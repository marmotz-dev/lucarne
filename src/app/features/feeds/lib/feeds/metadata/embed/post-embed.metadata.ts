import { PostEmbedExternalMetadata } from '@app/features/feeds/lib/feeds/metadata/embed/post-embed-external.metadata';
import { PostEmbedImagesMetadata } from '@app/features/feeds/lib/feeds/metadata/embed/post-embed-images.metadata';
import { PostEmbedRecordWithMediaMetadata } from '@app/features/feeds/lib/feeds/metadata/embed/post-embed-record-with-media.metadata';
import { PostEmbedRecordMetadata } from '@app/features/feeds/lib/feeds/metadata/embed/post-embed-record.metadata';
import { PostEmbedVideoMetadata } from '@app/features/feeds/lib/feeds/metadata/embed/post-embed-video.metadata';
import { POST_EMBED_PADDING_Y } from '@app/features/feeds/lib/feeds/metadata/post.constants';
import {
  AppBskyEmbedExternal,
  AppBskyEmbedImages,
  AppBskyEmbedRecord,
  AppBskyEmbedRecordWithMedia,
  AppBskyEmbedVideo,
} from '@atproto/api';
import { isView as isExternal } from '@atproto/api/dist/client/types/app/bsky/embed/external';
import { isView as isImage } from '@atproto/api/dist/client/types/app/bsky/embed/images';
import { isView as isRecord } from '@atproto/api/dist/client/types/app/bsky/embed/record';
import { isView as isRecordWithMedia } from '@atproto/api/dist/client/types/app/bsky/embed/recordWithMedia';
import { isView as isVideo } from '@atproto/api/dist/client/types/app/bsky/embed/video';
import { PostView } from '@atproto/api/dist/client/types/app/bsky/feed/defs';

export class PostEmbedMetadata {
  constructor(private readonly embed: PostView['embed']) {}

  getEmbed(): PostView['embed'] {
    return this.embed;
  }

  getEmbedAsExternal(): AppBskyEmbedExternal.View {
    return this.embed as AppBskyEmbedExternal.View;
  }

  getEmbedAsImages(): AppBskyEmbedImages.View {
    return this.embed as AppBskyEmbedImages.View;
  }

  getEmbedAsRecord(): AppBskyEmbedRecord.View {
    return this.embed as AppBskyEmbedRecord.View;
  }

  getEmbedAsRecordWithMedia(): AppBskyEmbedRecordWithMedia.View {
    return this.embed as AppBskyEmbedRecordWithMedia.View;
  }

  getEmbedAsVideo(): AppBskyEmbedVideo.View {
    return this.embed as AppBskyEmbedVideo.View;
  }

  getEmbedMetaAsExternal(): PostEmbedExternalMetadata {
    return new PostEmbedExternalMetadata(this.getEmbedAsExternal());
  }

  getEmbedMetaAsImages(): PostEmbedImagesMetadata {
    return new PostEmbedImagesMetadata(this.getEmbedAsImages());
  }

  getEmbedMetaAsRecord(): PostEmbedRecordMetadata {
    return new PostEmbedRecordMetadata(this.getEmbedAsRecord());
  }

  getEmbedMetaAsRecordWithMedia(): PostEmbedRecordWithMediaMetadata {
    return new PostEmbedRecordWithMediaMetadata(this.getEmbedAsRecordWithMedia());
  }

  getEmbedMetaAsVideo(): PostEmbedVideoMetadata {
    return new PostEmbedVideoMetadata(this.getEmbedAsVideo());
  }

  getEmbedMetaByType() {
    switch (this.getEmbedType()) {
      case 'images':
        return this.getEmbedMetaAsImages();
      case 'video':
        return this.getEmbedMetaAsVideo();
      case 'external':
        return this.getEmbedMetaAsExternal();
      case 'record':
        return this.getEmbedMetaAsRecord();
      case 'record-with-media':
        return this.getEmbedMetaAsRecordWithMedia();
      default:
        return null;
    }
  }

  getEmbedType() {
    if (this.embed) {
      if (isImage(this.embed)) {
        return 'images';
      } else if (isVideo(this.embed)) {
        return 'video';
      } else if (isExternal(this.embed)) {
        return 'external';
      } else if (isRecord(this.embed)) {
        return 'record';
      } else if (isRecordWithMedia(this.embed)) {
        return 'record-with-media';
      }

      return 'unknown';
    }

    return 'none';
  }

  predictElementHeight() {
    const embedByType = this.getEmbedMetaByType();

    if (!embedByType) {
      // console.log('No embed: height = 0');

      return 0;
    }

    const embedByTypeHeight = embedByType.predictElementHeight();

    // console.log({
    //   at: 'PostEmbedMeta.predictElementHeight',
    //   embedType: this.getEmbedType(),
    //   POST_EMBED_PADDING_Y,
    //   embedByTypeHeight,
    // });

    return 2 * POST_EMBED_PADDING_Y + embedByTypeHeight;
  }
}
