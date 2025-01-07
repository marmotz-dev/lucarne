import { PostEmbedTypedMetadataInterface } from '@app/features/feeds/lib/feeds/metadata/embed/post-embed-typed.metadata.interface';
import { POST_AVATAR_WIDTH, POST_GAP_X, POST_PADDING_X } from '@app/features/feeds/lib/feeds/metadata/post.constants';
import { AppBskyEmbedImages } from '@atproto/api';

export class PostEmbedImagesMetadata implements PostEmbedTypedMetadataInterface {
  constructor(private readonly embed: AppBskyEmbedImages.View) {}

  predictElementHeight(): number {
    const image = this.embed.images[0];

    if (image.aspectRatio) {
      const windowWidth = window.innerWidth;
      const imageWidth = image.aspectRatio.width;
      const imageHeight = image.aspectRatio.height;
      const screenImageWidth = windowWidth - 2 * POST_PADDING_X - POST_AVATAR_WIDTH - POST_GAP_X;
      const screenImageHeight = Math.round((screenImageWidth * imageHeight) / imageWidth);

      // console.log({
      //   at: 'PostEmbedImagesMeta.predictElementHeight',
      //   windowWidth,
      //   imageWidth,
      //   imageHeight,
      //   screenImageWidth,
      //   screenImageHeight,
      // });

      return screenImageHeight;
    }

    return 0;
  }
}
