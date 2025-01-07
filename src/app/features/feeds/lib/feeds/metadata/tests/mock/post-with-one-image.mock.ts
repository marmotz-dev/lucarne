import { Post } from '@app/features/feeds/lib/feeds/feeds.type';

export const postWithOneImageMock = {
  uri: 'at://did:plc:pdcn3dkmq6t6qtan5fkxoloq/app.bsky.feed.post/3lcqrqh4xrm2x',
  cid: 'bafyreigyaymxkryrfz625mev7xuulkl7nkaevkadqiflbspqiovwddbobi',
  author: {
    did: 'did:plc:pdcn3dkmq6t6qtan5fkxoloq',
    handle: 'cortini.co',
    displayName: 'Nicola 🏳️‍🌈',
    avatar:
      'https://cdn.bsky.app/img/avatar/plain/did:plc:pdcn3dkmq6t6qtan5fkxoloq/bafkreida7ywmb7w2c4d6lc4ksyfcgfotovfc7v2y7k5z3v6bqsq5qxsw7e@jpeg',
    viewer: {
      muted: false,
      blockedBy: false,
      following: 'at://did:plc:4b2vjkemb4b5jy7z35o6txqd/app.bsky.graph.follow/3lb7kkkkaek2l',
    },
    labels: [],
    createdAt: '2023-05-01T10:03:56.247Z',
  },
  record: {
    $type: 'app.bsky.feed.post',
    createdAt: '2024-12-07T22:48:07.605Z',
    embed: {
      $type: 'app.bsky.embed.images',
      images: [
        {
          alt: '',
          aspectRatio: {
            height: 646,
            width: 1140,
          },
          image: {
            $type: 'blob',
            ref: {
              $link: 'bafkreigbje4pgnz4xmqhsjaja7gdj33myzygvgbkkkjshmkm753cjbgtwq',
            },
            mimeType: 'image/jpeg',
            size: 390636,
          },
        },
      ],
    },
    langs: ['en'],
    text: "cool new 'merge' UI for GitHub with more collapsed information on successfull/failed signals",
  },
  embed: {
    $type: 'app.bsky.embed.images#view',
    images: [
      {
        thumb:
          'https://cdn.bsky.app/img/feed_thumbnail/plain/did:plc:pdcn3dkmq6t6qtan5fkxoloq/bafkreigbje4pgnz4xmqhsjaja7gdj33myzygvgbkkkjshmkm753cjbgtwq@jpeg',
        fullsize:
          'https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:pdcn3dkmq6t6qtan5fkxoloq/bafkreigbje4pgnz4xmqhsjaja7gdj33myzygvgbkkkjshmkm753cjbgtwq@jpeg',
        alt: '',
        aspectRatio: {
          height: 646,
          width: 1140,
        },
      },
    ],
  },
  replyCount: 0,
  repostCount: 0,
  likeCount: 3,
  quoteCount: 0,
  indexedAt: '2024-12-07T22:48:10.613Z',
  viewer: {
    threadMuted: false,
    embeddingDisabled: false,
  },
  labels: [],
} as Post;
