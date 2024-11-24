import { AfterContentChecked, Component, DestroyRef, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IonContent } from '@ionic/angular';
import { BehaviorSubject, combineLatest, filter } from 'rxjs';
import { FeedItem } from '../shared/atproto/feed.type';
import { FeedsService } from '../shared/atproto/feeds.service';
import { AppSettingsService } from '../shared/storage/app-settings.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit, AfterContentChecked {
  @ViewChild('refreshIcon') refreshIcon!: ElementRef<HTMLIonIconElement>;
  @ViewChild('content') content!: IonContent;
  @ViewChild('list', { read: ElementRef }) list!: ElementRef<HTMLIonListElement>;

  protected feedItems: FeedItem[] = [];
  protected haveNetwork = false;
  protected haveTokens = false;
  protected isReady = false;
  protected refreshing = false;
  private readonly destroyRef = inject(DestroyRef);
  private readonly setFeedPositionStatus = new BehaviorSubject<'loading' | 'toSet' | 'set'>('loading');

  constructor(
    private readonly feedsService: FeedsService,
    private readonly appSettingsService: AppSettingsService
  ) {}

  async ngAfterContentChecked() {
    if (this.setFeedPositionStatus.getValue() === 'toSet' && this.list?.nativeElement.children.length > 0) {
      setTimeout(async () => {
        const scrollElement = await this.content.getScrollElement();
        scrollElement.scrollTop = await this.appSettingsService.get<number>('feedScrollPosition', 0);
        this.fixScrollTop(scrollElement);
        this.setFeedPositionStatus.next('set');
      });
    }
  }

  async ngOnInit() {
    this.feedItems = await this.appSettingsService.get<FeedItem[]>('feed', []);
    if (this.feedItems.length > 0) {
      this.setFeedPositionStatus.next('toSet');
    } else {
      this.setFeedPositionStatus.next('set');
    }

    this.feedsService.haveNetwork$.subscribe((haveNetwork) => (this.haveNetwork = haveNetwork));
    this.feedsService.tokens$.subscribe((tokens) => (this.haveTokens = !!tokens));
    this.feedsService.isReady$.subscribe((isReady) => (this.isReady = isReady));

    combineLatest([this.setFeedPositionStatus, this.feedsService.isReady$])
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        filter(([setFeedPositionStatus, isReady]) => setFeedPositionStatus === 'set' && isReady)
      )
      .subscribe(async (isReady) => {
        await this.refresh();
      });
  }

  async refresh() {
    this.refreshing = true;
    this.feedItems = await this.feedsService.getTimeline(this.feedItems);

    await this.appSettingsService.set<FeedItem[]>('feed', this.feedItems);
    await this.saveScrollPosition();
    this.refreshing = false;
  }

  async saveScrollPosition() {
    const scrollElement = await this.content.getScrollElement();
    this.fixScrollTop(scrollElement);
    await this.appSettingsService.set<number>('feedScrollPosition', scrollElement.scrollTop);
  }

  private fixScrollTop(scrollElement: HTMLElement) {
    if (scrollElement.scrollTop < 1) {
      scrollElement.scrollTop = 1;
    }
  }
}
