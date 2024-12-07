import { PostEmbedTypedMetadataInterface } from '@app/features/feeds/lib/feeds/metadata/embed/post-embed-typed.metadata.interface';
import { AppBskyEmbedRecordWithMedia } from '@atproto/api';

export class PostEmbedRecordWithMediaMetadata implements PostEmbedTypedMetadataInterface {
  constructor(private readonly embed: AppBskyEmbedRecordWithMedia.View) {}

  predictElementHeight(): number {
    return 24;
  }
}
