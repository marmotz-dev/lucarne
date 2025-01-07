import { FeedPost } from '@app/features/feeds/lib/feeds/feeds.type';
import { POST_REPOSTED } from '@app/features/feeds/lib/feeds/metadata/post.constants';
import { PostMetadata } from '@app/features/feeds/lib/feeds/metadata/post.metadata';
import { isReasonRepost } from '@atproto/api/dist/client/types/app/bsky/feed/defs';

type HeightType = 'predicted' | 'reel';
type Height = {
  type: HeightType;
  value: number;
};

export class FeedPostMetadata {
  readonly postMeta: PostMetadata;
  private readonly heightCache = new Map<string, Height>();

  constructor(private readonly feedPost: FeedPost) {
    this.postMeta = new PostMetadata(feedPost.post);
  }

  predictElementHeight() {
    let feedPostHeight: number;

    const id = this.feedPost.post.cid;

    if (!this.heightCache.has(id)) {
      const repostHeight = this.feedPost.reason && isReasonRepost(this.feedPost.reason) ? POST_REPOSTED : 0;
      const postHeight = this.postMeta.predictElementHeight();

      feedPostHeight = repostHeight + postHeight;

      // console.log({
      //   at: 'FeedPostMetadata.predictElementHeight',
      //   repostHeight,
      //   postHeight,
      //   feedPostHeight,
      // });

      this.heightCache.set(id, {
        type: 'predicted',
        value: feedPostHeight,
      });
    } else {
      feedPostHeight = this.heightCache.get(id)!.value;
    }

    return feedPostHeight;
  }
}
