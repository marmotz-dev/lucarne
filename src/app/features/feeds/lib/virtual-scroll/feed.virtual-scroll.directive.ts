import { VIRTUAL_SCROLL_STRATEGY } from '@angular/cdk/scrolling';
import { Directive, forwardRef, Input } from '@angular/core';
import { FeedPost } from '@app/features/feeds/lib/feeds/feeds.type';
import { PostMetadata } from '@app/features/feeds/lib/feeds/metadata/post.metadata';
import { FeedVirtualScrollStrategy } from '@app/features/feeds/lib/virtual-scroll/feed.virtual-scroll.strategy';

@Directive({
  selector: '[lFeedVirtualScroll]',
  providers: [
    {
      provide: VIRTUAL_SCROLL_STRATEGY,
      useFactory: (directive: FeedVirtualScrollDirective) => directive.scrollStrategy,
      deps: [forwardRef(() => FeedVirtualScrollDirective)],
    },
  ],
})
export class FeedVirtualScrollDirective {
  scrollStrategy: FeedVirtualScrollStrategy;
  #viewPosts: FeedPost[] = [];

  constructor(readonly postService: PostMetadata) {
    this.scrollStrategy = new FeedVirtualScrollStrategy(postService);
  }

  @Input()
  set viewPosts(viewPosts: FeedPost[] | null) {
    if (viewPosts && this.#viewPosts.length !== viewPosts.length) {
      this.scrollStrategy.updateViewPosts(viewPosts);
      this.#viewPosts = viewPosts;
    }
  }
}
