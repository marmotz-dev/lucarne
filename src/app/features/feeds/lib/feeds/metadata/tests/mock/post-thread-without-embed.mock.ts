import { ThreadPost } from '@app/features/feeds/lib/feeds/feeds.type';

export const postThreadWithoutEmbedMock = {
  $type: 'app.bsky.feed.defs#threadViewPost',
  post: {
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
  },
  replies: [
    {
      $type: 'app.bsky.feed.defs#threadViewPost',
      post: {
        uri: 'at://did:plc:nudwookqatbbk7ry3h4dt4ln/app.bsky.feed.post/3jwvf7bp3tt2g',
        cid: 'bafyreift6dsoooerngpsx6tah7ubpdj5364opi6oelpsynpngl33yp34mm',
        author: {
          did: 'did:plc:nudwookqatbbk7ry3h4dt4ln',
          handle: 'doemser.bsky.social',
          displayName: 'doemser ',
          avatar:
            'https://cdn.bsky.app/img/avatar/plain/did:plc:nudwookqatbbk7ry3h4dt4ln/bafkreibaqfjsvescheatv3iykefzfagyudqi6gv6sapmwmagmaozcdzbvq@jpeg',
          viewer: {
            muted: false,
            blockedBy: false,
          },
          labels: [],
          createdAt: '2023-05-16T21:39:57.698Z',
        },
        record: {
          $type: 'app.bsky.feed.post',
          createdAt: '2023-05-29T20:18:33.400Z',
          reply: {
            parent: {
              cid: 'bafyreiaybrrvghmfdmashhh2fcg7o3jhvyhb3hctwsmzdyuzih7im7danm',
              uri: 'at://did:plc:m2jwplpernhxkzbo4ev5ljwj/app.bsky.feed.post/3jwvd2i3kms2f',
            },
            root: {
              cid: 'bafyreiaybrrvghmfdmashhh2fcg7o3jhvyhb3hctwsmzdyuzih7im7danm',
              uri: 'at://did:plc:m2jwplpernhxkzbo4ev5ljwj/app.bsky.feed.post/3jwvd2i3kms2f',
            },
          },
          text: 'changed my life',
        },
        replyCount: 0,
        repostCount: 0,
        likeCount: 4,
        quoteCount: 0,
        indexedAt: '2023-05-29T20:18:33.400Z',
        viewer: {
          threadMuted: false,
          embeddingDisabled: false,
        },
        labels: [],
      },
      replies: [],
    },
    {
      $type: 'app.bsky.feed.defs#threadViewPost',
      post: {
        uri: 'at://did:plc:hank7iv3rp7wf7jttggeff2h/app.bsky.feed.post/3jwvgvdrbot2o',
        cid: 'bafyreigumu5rd74bjct6drfwhe76xgqi6zelygsvdwdkiau7govczzjytu',
        author: {
          did: 'did:plc:hank7iv3rp7wf7jttggeff2h',
          handle: 'handle.invalid',
          displayName: 'Ray',
          avatar:
            'https://cdn.bsky.app/img/avatar/plain/did:plc:hank7iv3rp7wf7jttggeff2h/bafkreiegn7ktd7hb5g66feac6f4a5nlhuczc6mxfvzlpxkrfmxndca6pjy@jpeg',
          viewer: {
            muted: false,
            blockedBy: false,
          },
          labels: [],
          createdAt: '2023-03-27T00:03:33.512Z',
        },
        record: {
          $type: 'app.bsky.feed.post',
          createdAt: '2023-05-29T20:48:47.693Z',
          reply: {
            parent: {
              cid: 'bafyreiaybrrvghmfdmashhh2fcg7o3jhvyhb3hctwsmzdyuzih7im7danm',
              uri: 'at://did:plc:m2jwplpernhxkzbo4ev5ljwj/app.bsky.feed.post/3jwvd2i3kms2f',
            },
            root: {
              cid: 'bafyreiaybrrvghmfdmashhh2fcg7o3jhvyhb3hctwsmzdyuzih7im7danm',
              uri: 'at://did:plc:m2jwplpernhxkzbo4ev5ljwj/app.bsky.feed.post/3jwvd2i3kms2f',
            },
          },
          text: 'Now I can finally find a React developer who actually has 10 years of experience.',
        },
        replyCount: 0,
        repostCount: 0,
        likeCount: 3,
        quoteCount: 0,
        indexedAt: '2023-05-29T20:48:47.693Z',
        viewer: {
          threadMuted: false,
          embeddingDisabled: false,
        },
        labels: [],
      },
      replies: [],
    },
    {
      $type: 'app.bsky.feed.defs#threadViewPost',
      post: {
        uri: 'at://did:plc:f4c6knio6nne7uogp3n4vs4b/app.bsky.feed.post/3jx4kwefiu22k',
        cid: 'bafyreih67rrsy2qf2zvornknxjr2ccs6ylv7xv7bwihylh4zi5vjist5bm',
        author: {
          did: 'did:plc:f4c6knio6nne7uogp3n4vs4b',
          handle: 'mannyb.bsky.social',
          displayName: 'Manny Becerra',
          avatar:
            'https://cdn.bsky.app/img/avatar/plain/did:plc:f4c6knio6nne7uogp3n4vs4b/bafkreibhiy6krmridr6pug6m7j4nf7siacvlanteyjeyeubt3x5f5nuhqi@jpeg',
          viewer: {
            muted: false,
            blockedBy: false,
          },
          labels: [],
          createdAt: '2023-05-03T04:16:13.268Z',
        },
        record: {
          $type: 'app.bsky.feed.post',
          createdAt: '2023-06-01T16:49:34.889Z',
          reply: {
            parent: {
              cid: 'bafyreiaybrrvghmfdmashhh2fcg7o3jhvyhb3hctwsmzdyuzih7im7danm',
              uri: 'at://did:plc:m2jwplpernhxkzbo4ev5ljwj/app.bsky.feed.post/3jwvd2i3kms2f',
            },
            root: {
              cid: 'bafyreiaybrrvghmfdmashhh2fcg7o3jhvyhb3hctwsmzdyuzih7im7danm',
              uri: 'at://did:plc:m2jwplpernhxkzbo4ev5ljwj/app.bsky.feed.post/3jwvd2i3kms2f',
            },
          },
          text: 'So good. Serious `props` and congrats to the React crew and wider community of contributors ✨',
        },
        replyCount: 0,
        repostCount: 0,
        likeCount: 0,
        quoteCount: 0,
        indexedAt: '2023-06-01T16:49:34.889Z',
        viewer: {
          threadMuted: false,
          embeddingDisabled: false,
        },
        labels: [],
      },
      replies: [],
    },
  ],
} as ThreadPost;
