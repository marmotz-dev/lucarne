import { booleanAttribute, Component, Input } from '@angular/core';
import * as AppBskyActorDefs from '@atproto/api/src/client/types/app/bsky/actor/defs';

@Component({
  selector: 'l-post-avatar',
  templateUrl: './post-avatar.component.html',
})
export class PostAvatarComponent {
  @Input() author!: AppBskyActorDefs.ProfileViewBasic;
  @Input({ transform: booleanAttribute }) small = false;
}
