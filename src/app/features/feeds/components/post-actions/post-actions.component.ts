import { Component, Input } from '@angular/core';
import { Post } from '@app/features/feeds/lib/feeds/feeds.type';

@Component({
  selector: 'l-post-actions',
  templateUrl: './post-actions.component.html',
})
export class PostActionsComponent {
  @Input() post!: Post;
}
