import { PostEmbedTypedMetadataInterface } from '@app/features/feeds/lib/feeds/metadata/embed/post-embed-typed.metadata.interface';
import { POST_EMBED_NOT_YET_SUPPORTED } from '@app/features/feeds/lib/feeds/metadata/post.constants';
import { AppBskyEmbedVideo } from '@atproto/api';

export class PostEmbedVideoMetadata implements PostEmbedTypedMetadataInterface {
  constructor(private readonly embed: AppBskyEmbedVideo.View) {}

  predictElementHeight(): number {
    return POST_EMBED_NOT_YET_SUPPORTED;
  }
}
