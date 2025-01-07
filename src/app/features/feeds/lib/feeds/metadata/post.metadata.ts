import { Post } from '@app/features/feeds/lib/feeds/feeds.type';
import { PostEmbedMetadata } from '@app/features/feeds/lib/feeds/metadata/embed/post-embed.metadata';
import {
  POST_ACTIONS,
  POST_BORDER_BOTTOM,
  POST_HEADER,
  POST_PADDING,
} from '@app/features/feeds/lib/feeds/metadata/post.constants';
import { RecordMetadata } from '@app/features/feeds/lib/feeds/metadata/record.metadata';

export class PostMetadata {
  readonly embedMeta: PostEmbedMetadata;

  constructor(private readonly post: Post) {
    this.embedMeta = new PostEmbedMetadata(post.embed);
  }

  getPageUrl() {
    return ['/feeds/post', this.post.author.handle, this.post.uri.split('/').pop()];
  }

  predictElementHeight() {
    const textHeight = new RecordMetadata(this.post.record, this.post.uri).predictElementHeight();
    const embedHeight = this.embedMeta.predictElementHeight();

    const postHeight = 3 * POST_PADDING + POST_HEADER + textHeight + embedHeight + POST_ACTIONS + POST_BORDER_BOTTOM;

    // console.log({
    //   at: 'PostMetadata.predictElementHeight',
    //   textHeight,
    //   embedHeight,
    //   postHeight,
    // });

    return postHeight;
  }
}
