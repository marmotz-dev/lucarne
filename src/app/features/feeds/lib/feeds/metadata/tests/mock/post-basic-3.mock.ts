import { Post } from '@app/features/feeds/lib/feeds/feeds.type';

export const postBasic3Mock = {
  uri: 'at://did:plc:3m7whmaunxrql57w42mqubay/app.bsky.feed.post/3ldngeehd4s2x',
  cid: 'bafyreid6a7n3cqugaq7u2oochfherhrxql5jxcgepvnl3pktkuuvihhj2m',
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
    createdAt: '2024-12-19T08:11:41.231Z',
    langs: ['fr'],
    reply: {
      parent: {
        cid: 'bafyreie546nxr3zobscjjim35rrn5yqedrxn6kj3ac52phhsgwms2x2tqq',
        uri: 'at://did:plc:3m7whmaunxrql57w42mqubay/app.bsky.feed.post/3ldngecf7vc2x',
      },
      root: {
        cid: 'bafyreie546nxr3zobscjjim35rrn5yqedrxn6kj3ac52phhsgwms2x2tqq',
        uri: 'at://did:plc:3m7whmaunxrql57w42mqubay/app.bsky.feed.post/3ldngecf7vc2x',
      },
    },
    text: '2️⃣ Ces dernières semaines, j’ai fait une erreur.\n\nPendant des réunions et des entretiens, je me suis retrouvé à utiliser du jargon technique sans réfléchir. 😅\n\nNormalement, je fais attention, surtout avec des non-tech. Mais là, avec la fatigue de fin d’année… j’ai clairement oublié.',
  },
  replyCount: 1,
  repostCount: 0,
  likeCount: 0,
  quoteCount: 0,
  indexedAt: '2024-12-19T08:11:44.932Z',
  viewer: {
    threadMuted: false,
    embeddingDisabled: false,
  },
  labels: [],
} as Post;
