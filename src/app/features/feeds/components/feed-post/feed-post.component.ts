import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FeedPost, Post } from '@app/features/feeds/lib/feeds/feeds.type';
import { isReasonRepost } from '@atproto/api/dist/client/types/app/bsky/feed/defs';

@Component({
  selector: 'l-feed-post',
  templateUrl: './feed-post.component.html',
  styleUrl: './feed-post.component.scss',
})
export class FeedPostComponent implements OnInit, OnChanges {
  @Input() viewPost!: FeedPost;

  @Output() onClick = new EventEmitter<Post>();

  protected isRepostedBy?: string;

  constructor(private readonly elementRef: ElementRef) {}

  handleClick(postView: Post) {
    this.onClick.emit(postView);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['viewPost']?.currentValue) {
      if (this.viewPost.reason && isReasonRepost(this.viewPost.reason)) {
        this.isRepostedBy = this.viewPost.reason.by.displayName;
      }
    }
  }

  ngOnInit() {
    // catch clic events dispatched on component (essentially from unit tests)
    this.elementRef.nativeElement.addEventListener('click', (event: MouseEvent) => this.handleClick.bind(this));
  }
}
