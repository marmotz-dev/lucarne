import { FeedPost } from '@app/features/feeds/lib/feeds/feeds.type';

export type FeedStorage = {
  version: 1;
  feedPosts: FeedPost[];
  cursor?: string;
  scrollPosition: number;
  currentPostId: string;
};

export const NewFeedStorage: FeedStorage = {
  version: 1,
  feedPosts: [],
  scrollPosition: 0,
  currentPostId: '',
};
