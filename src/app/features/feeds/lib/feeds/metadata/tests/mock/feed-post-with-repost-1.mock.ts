import { FeedPost } from '@app/features/feeds/lib/feeds/feeds.type';
import { postBasic1Mock } from '@app/features/feeds/lib/feeds/metadata/tests/mock/post-basic-1.mock';

export const feedPostWithRepost1Mock = {
  post: postBasic1Mock,
  reason: {
    $type: 'app.bsky.feed.defs#reasonRepost',
    by: {
      did: 'did:plc:ebhyl4ftsaleto4al6pakify',
      handle: 'romainlanz.com',
      displayName: 'Romain Lanz',
      avatar:
        'https://cdn.bsky.app/img/avatar/plain/did:plc:ebhyl4ftsaleto4al6pakify/bafkreiakgxbwlrlbuchny3qcdhzvjbbk2vs5gml2ydjhjcvt3azzroy764@jpeg',
      viewer: {
        muted: false,
        blockedBy: false,
        following: 'at://did:plc:4b2vjkemb4b5jy7z35o6txqd/app.bsky.graph.follow/3l7w7jh6d7425',
      },
      labels: [],
      createdAt: '2023-07-06T15:35:39.229Z',
    },
    indexedAt: '2024-12-21T07:48:42.520Z',
  },
} as FeedPost;
