import { Facet } from '@atproto/api';
import { ViewRecord as BaseViewRecord } from '@atproto/api/dist/client/types/app/bsky/embed/record';
import {
  FeedViewPost as BaseFeedViewPost,
  PostView as BasePostView,
  ThreadViewPost as BaseThreadViewPost,
} from '@atproto/api/dist/client/types/app/bsky/feed/defs';

export type RecordContent = {
  text: string;
  facets?: Facet[];
  createdAt: string;
};

export type FeedPost = BaseFeedViewPost & {
  post: Post;
};

export type ThreadPost = BaseThreadViewPost & {
  post: Post;
};

export type Post = BasePostView & {
  record: RecordContent;
};

export type Record = BaseViewRecord & {
  value: RecordContent;
};

export type Feed = {
  feedPosts: FeedPost[];
  cursor?: string;
};
