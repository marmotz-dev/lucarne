export const postBasic1Mock = {
  uri: 'at://did:plc:m2jwplpernhxkzbo4ev5ljwj/app.bsky.feed.post/3jwvd2i3kms2f',
  cid: 'bafyreiaybrrvghmfdmashhh2fcg7o3jhvyhb3hctwsmzdyuzih7im7danm',
  author: {
    did: 'did:plc:m2jwplpernhxkzbo4ev5ljwj',
    handle: 'vercel.com',
    displayName: 'Vercel',
    avatar:
      'https://cdn.bsky.app/img/avatar/plain/did:plc:m2jwplpernhxkzbo4ev5ljwj/bafkreicebob2yf5lv6yg72luzv5qwsr6ob65j6oc3jciyowqkfiz736oqu@jpeg',
    associated: {
      chat: {
        allowIncoming: 'following',
      },
    },
    viewer: {
      muted: false,
      blockedBy: false,
      following: 'at://did:plc:4b2vjkemb4b5jy7z35o6txqd/app.bsky.graph.follow/3lb7kkesmdb2b',
    },
    labels: [],
    createdAt: '2023-04-25T00:08:45.850Z',
  },
  record: {
    $type: 'app.bsky.feed.post',
    createdAt: '2023-05-29T19:40:04.901Z',
    facets: [
      {
        features: [
          {
            $type: 'app.bsky.richtext.facet#link',
            uri: 'https://vercel.com/blog/10-years-of-react',
          },
        ],
        index: {
          byteEnd: 153,
          byteStart: 112,
        },
      },
    ],
    text: 'On this day 10 years ago, React was introduced.\n\nCongratulations to the React team for a decade of innovation.\n\nhttps://vercel.com/blog/10-years-of-react',
  },
  replyCount: 3,
  repostCount: 5,
  likeCount: 28,
  quoteCount: 2,
  indexedAt: '2023-05-29T19:40:04.901Z',
  viewer: {
    threadMuted: false,
    embeddingDisabled: false,
  },
  labels: [],
};
