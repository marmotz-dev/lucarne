import { afterRender, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FeedPost, Post } from '@app/features/feeds/lib/feeds/feeds.type';
import { PostMetadata } from '@app/features/feeds/lib/feeds/metadata/post.metadata';

@Component({
  selector: 'l-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent {
  @Input() feedPosts?: FeedPost[];

  @Output() ready = new EventEmitter<void>();
  @Output() loadNewestPosts = new EventEmitter<void>();
  @Output() loadOlderPosts = new EventEmitter<void>();

  @ViewChild('wrapper', { static: true }) wrapper!: HTMLElement;

  protected isReady = false;

  constructor(private readonly router: Router) {
    const afterRenderRef = afterRender({
      read: () => {
        if (this.wrapper) {
          afterRenderRef.destroy();
          this.isReady = true;
          setTimeout(() => {
            this.ready.emit();
          });
        }
      },
    });
  }

  async openPost(viewPost: Post) {
    try {
      await this.router.navigate(new PostMetadata(viewPost).getPageUrl());
    } catch (e) {
      console.error(e);
    }
  }
}
