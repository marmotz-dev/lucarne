import { Component, Input } from '@angular/core';
import * as AppBskyActorDefs from '@atproto/api/src/client/types/app/bsky/actor/defs';

@Component({
  selector: 'l-post-header',
  templateUrl: './post-header.component.html',
})
export class PostHeaderComponent {
  @Input() author!: AppBskyActorDefs.ProfileViewBasic;
  @Input() createdAt!: string;
}
