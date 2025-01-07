import { AfterContentChecked, Component, DestroyRef, ElementRef, inject, ViewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FeedStorage, NewFeedStorage } from '@app/features/feeds/lib/feeds/feeds-storage.type';
import { FeedsService } from '@app/features/feeds/lib/feeds/feeds.service';
import { FeedPost } from '@app/features/feeds/lib/feeds/feeds.type';
import { AppSettingsService } from '@app/lib/storage/app-settings.service';
import { StorageKeys } from '@app/lib/storage/storage-keys.enum';
import { IonContent } from '@ionic/angular';
import { BehaviorSubject, filter, take } from 'rxjs';

@Component({
  selector: 'l-timeline-page',
  templateUrl: './timeline.page.html',
})
export class TimelinePage implements AfterContentChecked {
  @ViewChild('content') content!: IonContent;
  @ViewChild('list', { read: ElementRef }) list!: ElementRef<HTMLElement>;

  protected feedStorage?: FeedStorage;
  protected refreshing = false;

  private readonly destroyRef = inject(DestroyRef);
  private readonly setFeedPositionStatus = new BehaviorSubject<'loading' | 'toSet' | 'set'>('loading');

  private setScrollPositionTimer?: ReturnType<typeof setTimeout>;

  constructor(
    private readonly appSettingsService: AppSettingsService,
    private readonly feedsService: FeedsService
  ) {}

  protected get feedPosts(): FeedPost[] | undefined {
    return this.feedStorage?.feedPosts;
  }

  async loadNewestPost() {
    await this.loadPost('newest');
  }

  async loadOlderPost() {
    await this.loadPost('older');
  }

  async ngAfterContentChecked() {
    if (this.setFeedPositionStatus.getValue() === 'toSet' && this.list?.nativeElement.children[1].children.length > 0) {
      if (this.setScrollPositionTimer) {
        clearTimeout(this.setScrollPositionTimer);
      }

      this.setScrollPositionTimer = setTimeout(async () => {
        // const foundIndex = this.feedStorage.feedPosts.findIndex(
        //   (feedPost) => feedPost.post.cid === this.feedStorage.currentPostId
        // );
        // this.virtualScrollViewport.scrollToIndex(foundIndex === -1 ? 0 : foundIndex);
        this.setFeedPositionStatus.next('set');
      });
    }
  }

  async onFeedReady() {
    this.feedStorage = await this.appSettingsService.get<FeedStorage>(StorageKeys.TimelineFeed, NewFeedStorage);

    // if (this.feedStorage.feedPosts.length > 0 && this.feedStorage.currentPostId) {
    //   const foundIndex = this.feedStorage.feedPosts.findIndex(
    //     (feedPost) => feedPost.post.cid === this.feedStorage.currentPostId
    //   );
    //   this.virtualScrollViewport.scrollToIndex(foundIndex === -1 ? 0 : foundIndex);
    // }

    // if (this.feedStorage.feedPosts.length > 0 && this.feedStorage.currentPostId) {
    //   this.setFeedPositionStatus.next('toSet');
    // } else {
    this.setFeedPositionStatus.next('set');
    // }

    this.setFeedPositionStatus
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        filter((setFeedPositionStatus) => setFeedPositionStatus === 'set'),
        take(1)
      )
      .subscribe(async () => {
        await this.loadNewestPost();
      });
  }

  async saveScrollPosition() {
    if (this.feedStorage) {
      const scrollElement = await this.content.getScrollElement();
      this.fixScrollTop(scrollElement);
      this.feedStorage.scrollPosition = scrollElement.scrollTop;
      await this.saveFeedStorage();
    }
  }

  private fixScrollTop(scrollElement: HTMLElement) {
    if (scrollElement.scrollTop < 1) {
      // scrollElement.scrollTop = 1;
    }
  }

  private async loadPost(direction: 'older' | 'newest') {
    this.refreshing = true;
    const timeline = await this.feedsService.getTimeline(
      this.feedStorage?.feedPosts ?? [],
      direction === 'older' && this.feedStorage ? this.feedStorage.cursor : undefined
    );

    this.refreshing = false;

    this.feedStorage = {
      ...NewFeedStorage,
      ...(this.feedStorage ?? {}),
      feedPosts: timeline.feedPosts,
      cursor: timeline.cursor,
    };

    // @TODO improve auto delete old posts
    // this.feedStorage.feedPosts = this.feedStorage.feedPosts.slice(0, 20);

    await this.saveScrollPosition();
  }

  private async saveFeedStorage() {
    if (this.feedStorage) {
      await this.appSettingsService.set<FeedStorage>(StorageKeys.TimelineFeed, this.feedStorage);
    }
  }
}
