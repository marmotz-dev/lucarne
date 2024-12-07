import { Post } from '@app/features/feeds/lib/feeds/feeds.type';

export const postWithExternal2Mock = {
  uri: 'at://did:plc:m2jwplpernhxkzbo4ev5ljwj/app.bsky.feed.post/3ldmgncymi423',
  cid: 'bafyreigitxhjpkpzoglgsis3jqpzdwocwemuztvyoyrrq2f2wuodcuq4lu',
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
    createdAt: '2024-12-18T22:44:04.120Z',
    embed: {
      $type: 'app.bsky.embed.external',
      external: {
        description:
          "We built Hive, our general compute platform, after outgrowing off-the-shelf solutions.  See how it's now powering secure connections to private networks, cutting initialization from 90s to 5s and impr...",
        thumb: {
          $type: 'blob',
          ref: {
            $link: 'bafkreifwqr4skzpvwizgtfq4pu5st7hn756lwyhcvkhjthgitl7fjp63oq',
          },
          mimeType: 'image/jpeg',
          size: 268807,
        },
        title: 'Optimizing secure builds with Hive and Secure Compute - Vercel',
        uri: 'https://vercel.com/blog/optimizing-secure-builds-with-hive-and-secure-compute',
      },
    },
    facets: [
      {
        features: [
          {
            $type: 'app.bsky.richtext.facet#link',
            uri: 'https://vercel.com/blog/optimizing-secure-builds-with-hive-and-secure-compute',
          },
        ],
        index: {
          byteEnd: 254,
          byteStart: 228,
        },
      },
    ],
    langs: ['en'],
    text: "We built Hive, our general compute platform, after outgrowing off-the-shelf solutions.\n\nSee how it's now powering secure connections to private networks, cutting initialization from 90s to 5s and improving build speeds by 30%.\n\nvercel.com/blog/optimiz...",
  },
  embed: {
    $type: 'app.bsky.embed.external#view',
    external: {
      uri: 'https://vercel.com/blog/optimizing-secure-builds-with-hive-and-secure-compute',
      title: 'Optimizing secure builds with Hive and Secure Compute - Vercel',
      description:
        "We built Hive, our general compute platform, after outgrowing off-the-shelf solutions.  See how it's now powering secure connections to private networks, cutting initialization from 90s to 5s and impr...",
      thumb:
        'https://cdn.bsky.app/img/feed_thumbnail/plain/did:plc:m2jwplpernhxkzbo4ev5ljwj/bafkreifwqr4skzpvwizgtfq4pu5st7hn756lwyhcvkhjthgitl7fjp63oq@jpeg',
    },
  },
  replyCount: 0,
  repostCount: 0,
  likeCount: 20,
  quoteCount: 0,
  indexedAt: '2024-12-18T22:44:05.418Z',
  viewer: {
    threadMuted: false,
    embeddingDisabled: false,
  },
  labels: [],
} as Post;
