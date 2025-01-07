import { Post } from '@app/features/feeds/lib/feeds/feeds.type';

export const postBasic2Mock = {
  uri: 'at://did:plc:3m7whmaunxrql57w42mqubay/app.bsky.feed.post/3ldngeehf3c2x',
  cid: 'bafyreiadfrno5shcse3t625ip4bshcjq5pioekseatlbvb4tp24nejef34',
  author: {
    did: 'did:plc:3m7whmaunxrql57w42mqubay',
    handle: 'ledjay.bsky.social',
    displayName: 'Jérémie Gisserot',
    avatar:
      'https://cdn.bsky.app/img/avatar/plain/did:plc:3m7whmaunxrql57w42mqubay/bafkreibbvd7fmmc6k54bs6xprlwvxbhld52fotfisqwmnzueeim77y4uaa@jpeg',
    viewer: {
      muted: false,
      blockedBy: false,
      following: 'at://did:plc:4b2vjkemb4b5jy7z35o6txqd/app.bsky.graph.follow/3lbsk7bvvsp2n',
      followedBy: 'at://did:plc:3m7whmaunxrql57w42mqubay/app.bsky.graph.follow/3lbsjeq4vtq22',
    },
    labels: [],
    createdAt: '2024-11-24T07:29:18.307Z',
  },
  record: {
    $type: 'app.bsky.feed.post',
    createdAt: '2024-12-19T08:11:41.233Z',
    langs: ['fr'],
    reply: {
      parent: {
        cid: 'bafyreidsdipbiiy55d5dntfqnvnpwx5ycxt5zkwbv3xxywoxjpj23itou4',
        uri: 'at://did:plc:3m7whmaunxrql57w42mqubay/app.bsky.feed.post/3ldngeehe422x',
      },
      root: {
        cid: 'bafyreie546nxr3zobscjjim35rrn5yqedrxn6kj3ac52phhsgwms2x2tqq',
        uri: 'at://did:plc:3m7whmaunxrql57w42mqubay/app.bsky.feed.post/3ldngecf7vc2x',
      },
    },
    text: '4️⃣ Avec mon passé en direction artistique, j’ai souvent été un pont entre tech et créatif.\n\nCe rôle de traducteur, je l’ai pris naturellement. Mais je ne réalisais pas vraiment à quel point c’est important.',
  },
  replyCount: 1,
  repostCount: 0,
  likeCount: 0,
  quoteCount: 0,
  indexedAt: '2024-12-19T08:11:44.956Z',
  viewer: {
    threadMuted: false,
    embeddingDisabled: false,
  },
  labels: [],
} as Post;
