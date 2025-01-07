import { Post } from '@app/features/feeds/lib/feeds/feeds.type';

export const postWithExternal1Mock = {
  uri: 'at://did:plc:m2jwplpernhxkzbo4ev5ljwj/app.bsky.feed.post/3ldr3anpe3s2t',
  cid: 'bafyreib3sehtgyfjx52uuult7dv3wl4wdwvi45sqiwuy74z4ctfsz64mzi',
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
    createdAt: '2024-12-20T19:03:26.676Z',
    embed: {
      $type: 'app.bsky.embed.external',
      external: {
        description:
          'Vercel Remote Cache is now free for all plans.  Never do the same work twice in your Turborepo or Nx repository with a shared store of build outputs and logs for your team.',
        thumb: {
          $type: 'blob',
          ref: {
            $link: 'bafkreietfm4zsmil5u26trfeixmyk4ehsja2hf7a2a4lolrtc5s3vxl2rq',
          },
          mimeType: 'image/jpeg',
          size: 159321,
        },
        title: 'Vercel Remote Cache is now free - Vercel',
        uri: 'https://vercel.com/changelog/free-vercel-remote-cache',
      },
    },
    facets: [
      {
        features: [
          {
            $type: 'app.bsky.richtext.facet#link',
            uri: 'https://vercel.com/changelog/free-vercel-remote-cache',
          },
        ],
        index: {
          byteEnd: 200,
          byteStart: 174,
        },
      },
    ],
    langs: ['en'],
    text: 'Vercel Remote Cache is now free for all plans.\n\nNever do the same work twice in your Turborepo or Nx repository with a shared store of build outputs and logs for your team.\n\nvercel.com/changelog/fr...',
  },
  embed: {
    $type: 'app.bsky.embed.external#view',
    external: {
      uri: 'https://vercel.com/changelog/free-vercel-remote-cache',
      title: 'Vercel Remote Cache is now free - Vercel',
      description:
        'Vercel Remote Cache is now free for all plans.  Never do the same work twice in your Turborepo or Nx repository with a shared store of build outputs and logs for your team.',
      thumb:
        'https://cdn.bsky.app/img/feed_thumbnail/plain/did:plc:m2jwplpernhxkzbo4ev5ljwj/bafkreietfm4zsmil5u26trfeixmyk4ehsja2hf7a2a4lolrtc5s3vxl2rq@jpeg',
    },
  },
  replyCount: 0,
  repostCount: 5,
  likeCount: 36,
  quoteCount: 1,
  indexedAt: '2024-12-20T19:03:28.519Z',
  viewer: {
    threadMuted: false,
    embeddingDisabled: false,
  },
  labels: [],
} as Post;
