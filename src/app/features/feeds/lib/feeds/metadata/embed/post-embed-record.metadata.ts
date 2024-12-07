import { RecordContent } from '@app/features/feeds/lib/feeds/feeds.type';
import { PostEmbedTypedMetadataInterface } from '@app/features/feeds/lib/feeds/metadata/embed/post-embed-typed.metadata.interface';
import {
  POST_BORDER_BOTTOM,
  POST_EMBED_RECORD_PADDING_Y,
  POST_HEADER,
} from '@app/features/feeds/lib/feeds/metadata/post.constants';
import { RecordMetadata } from '@app/features/feeds/lib/feeds/metadata/record.metadata';
import { AppBskyEmbedRecord } from '@atproto/api';

export class PostEmbedRecordMetadata implements PostEmbedTypedMetadataInterface {
  constructor(private readonly embed: AppBskyEmbedRecord.View) {}

  predictElementHeight(): number {
    const textHeight = this.embed.record.value
      ? new RecordMetadata(this.embed.record.value as RecordContent).predictElementHeight(
          2 * POST_EMBED_RECORD_PADDING_Y
        )
      : 0;

    // console.log({
    //   at: 'PostEmbedRecordMetadata.predictElementHeight',
    //   POST_HEADER,
    //   POST_EMBED_RECORD_PADDING_Y,
    //   textHeight,
    //   POST_BORDER_BOTTOM,
    // });

    return POST_HEADER + 2 * POST_EMBED_RECORD_PADDING_Y + textHeight + 2 * POST_BORDER_BOTTOM;
  }
}
