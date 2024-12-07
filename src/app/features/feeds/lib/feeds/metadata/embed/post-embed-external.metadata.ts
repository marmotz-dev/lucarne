import { PostEmbedTypedMetadataInterface } from '@app/features/feeds/lib/feeds/metadata/embed/post-embed-typed.metadata.interface';
import { POST_EMBED_NOT_YET_SUPPORTED } from '@app/features/feeds/lib/feeds/metadata/post.constants';
import { AppBskyEmbedExternal } from '@atproto/api';

export class PostEmbedExternalMetadata implements PostEmbedTypedMetadataInterface {
  constructor(private readonly embed: AppBskyEmbedExternal.View) {}

  predictElementHeight(): number {
    return POST_EMBED_NOT_YET_SUPPORTED;
  }
}
