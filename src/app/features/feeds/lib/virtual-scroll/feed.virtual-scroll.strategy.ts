import { CdkVirtualScrollViewport, VirtualScrollStrategy } from '@angular/cdk/scrolling';
import { FeedPost } from '@app/features/feeds/lib/feeds/feeds.type';
import { PostMetadata } from '@app/features/feeds/lib/feeds/metadata/post.metadata';
import { distinctUntilChanged, Observable, Subject } from 'rxjs';

const PADDING_BEFORE = 5;
const PADDING_AFTER = 5;

type ViewPostHeight = {
  value: number;
  source: 'predicted' | 'actual';
};

export class FeedVirtualScrollStrategy implements VirtualScrollStrategy {
  scrolledIndexChange$ = new Subject<number>();
  scrolledIndexChange: Observable<number> = this.scrolledIndexChange$.pipe(distinctUntilChanged());
  private viewport?: CdkVirtualScrollViewport;
  private viewPosts: FeedPost[] = [];
  private heightCache = new Map<string, ViewPostHeight>();
  private wrapper!: ChildNode | null;

  constructor(private readonly postService: PostMetadata) {}

  attach(viewport: CdkVirtualScrollViewport): void {
    this.viewport = viewport;
    this.wrapper = viewport.getElementRef().nativeElement.querySelector('ion-list');

    if (this.viewPosts) {
      this.viewport.setTotalContentSize(this.getTotalHeight());
      this.updateRenderedRange();
    }
  }

  detach(): void {
    this.viewport = undefined;
  }

  onContentRendered(): void {
    /** no-op */
  }

  onContentScrolled(): void {
    if (this.viewport) {
      this.updateRenderedRange();
    }
  }

  onDataLengthChanged(): void {
    if (!this.viewport) {
      return;
    }

    this.viewport.setTotalContentSize(this.getTotalHeight());
    this.updateRenderedRange();
  }

  onRenderedOffsetChanged(): void {
    /** no-op */
  }

  scrollToIndex(index: number, behavior: ScrollBehavior): void {
    if (!this.viewport) {
      return;
    }

    const offset = this.getOffsetByViewPostIdx(index);
    this.viewport.scrollToOffset(offset, behavior);
  }

  updateViewPosts(viewPosts: FeedPost[]) {
    this.viewPosts = viewPosts;

    if (this.viewport) {
      this.viewport.checkViewportSize();
    }
  }

  private determineViewPostsCountInViewport(startIdx: number): number {
    if (!this.viewport) {
      return 0;
    }

    let totalSize = 0;
    // That is the height of the scrollable container (i.e. viewport)
    const viewportSize = this.viewport.getViewportSize();

    for (let i = startIdx; i < this.viewPosts.length; i++) {
      const viewPost = this.viewPosts[i];
      totalSize += this.getViewPostHeight(viewPost);

      if (totalSize >= viewportSize) {
        return i - startIdx + 1;
      }
    }

    return 0;
  }

  /**
   * Returns the offset relative to the top of the container
   * by a provided message index.
   *
   * @param idx
   * @returns
   */
  private getOffsetByViewPostIdx(idx: number): number {
    return this.measureViewPostsHeight(this.viewPosts.slice(0, idx));
  }

  /**
   * Returns the total height of the scrollable container
   * given the size of the elements.
   */
  private getTotalHeight(): number {
    return this.measureViewPostsHeight(this.viewPosts);
  }

  private getViewPostHeight(viewPost: FeedPost): number {
    let height = 0;
    const postId = viewPost.post.cid;
    const cachedHeight = this.heightCache.get(postId);

    if (!cachedHeight) {
      height = 200; //this.postService.viewPostHeightPredictor(viewPost);
      this.heightCache.set(postId, { value: height, source: 'predicted' });
    } else {
      height = cachedHeight.value;
    }

    return height;
  }

  /**
   * Returns the message index by a provided offset.
   *
   * @param offset
   * @returns
   */
  private getViewPostIdxByOffset(offset: number): number {
    let accumOffset = 0;

    for (let i = 0; i < this.viewPosts.length; i++) {
      const viewPost = this.viewPosts[i];
      const viewPostHeight = this.getViewPostHeight(viewPost);
      accumOffset += viewPostHeight;

      if (accumOffset >= offset) {
        return i;
      }
    }

    return 0;
  }

  private measureViewPostsHeight(viewPosts: FeedPost[]): number {
    return viewPosts.map((viewPost) => this.getViewPostHeight(viewPost)).reduce((a, c) => a + c, 0);
  }

  private updateHeightCache() {
    if (!this.wrapper || !this.viewport) {
      return;
    }

    // Get a reference of the child nodes/list items
    const nodes = this.wrapper.childNodes;
    let cacheUpdated: boolean = false;

    nodes.forEach((node) => {
      const element = node as HTMLElement;

      // Check if the node is actually an app-hero-message component
      if (element && element.nodeName === 'L-POST') {
        // Get the message ID
        const id = element.getAttribute('data-post-cid') as string;
        const cachedHeight = this.heightCache.get(id);

        // Update the height cache, if the existing height is predicted
        if (!cachedHeight || cachedHeight.source !== 'actual') {
          const height = element.clientHeight;

          this.heightCache.set(id, { value: height, source: 'actual' });
          cacheUpdated = true;
        }
      }
    });

    // Reset the total content size only if there has been a cache change
    if (cacheUpdated) {
      this.viewport.setTotalContentSize(this.getTotalHeight());
    }
  }

  private updateRenderedRange() {
    if (!this.viewport) {
      return;
    }

    const scrollOffset = this.viewport.measureScrollOffset();
    const scrollIdx = this.getViewPostIdxByOffset(scrollOffset);
    const dataLength = this.viewport.getDataLength();
    const renderedRange = this.viewport.getRenderedRange();
    const range = {
      start: renderedRange.start,
      end: renderedRange.end,
    };

    range.start = Math.max(0, scrollIdx - PADDING_BEFORE);
    range.end = Math.min(dataLength, scrollIdx + this.determineViewPostsCountInViewport(scrollIdx) + PADDING_AFTER);

    this.viewport.setRenderedRange(range);
    this.viewport.setRenderedContentOffset(this.getOffsetByViewPostIdx(range.start));
    this.scrolledIndexChange$.next(scrollIdx);

    this.updateHeightCache();
  }
}
