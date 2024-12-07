import { Post } from '@app/features/feeds/lib/feeds/feeds.type';

export const postWithRecordMock = {
  uri: 'at://did:plc:pdcn3dkmq6t6qtan5fkxoloq/app.bsky.feed.post/3lcqs2vndsu2x',
  cid: 'bafyreih3elin4bmovnllm436ped5alnw4qmuxhkwzhosjef7hkqjyqwzcq',
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
    createdAt: '2024-12-07T22:53:58.367Z',
    embed: {
      $type: 'app.bsky.embed.record',
      record: {
        cid: 'bafyreigkleu7mmibz6stlent6wpkkidjyykhngs5gg7ny7starosgli5ca',
        uri: 'at://did:plc:2t6uwrtyhwpgtpon5qixlhkx/app.bsky.feed.post/3lcnmokhpus22',
      },
    },
    langs: ['en'],
    text: 'This 👇',
  },
  embed: {
    $type: 'app.bsky.embed.record#view',
    record: {
      $type: 'app.bsky.embed.record#viewRecord',
      uri: 'at://did:plc:2t6uwrtyhwpgtpon5qixlhkx/app.bsky.feed.post/3lcnmokhpus22',
      cid: 'bafyreigkleu7mmibz6stlent6wpkkidjyykhngs5gg7ny7starosgli5ca',
      author: {
        did: 'did:plc:2t6uwrtyhwpgtpon5qixlhkx',
        handle: 'plrdev.bsky.social',
        displayName: 'Juha Linnanen',
        avatar:
          'https://cdn.bsky.app/img/avatar/plain/did:plc:2t6uwrtyhwpgtpon5qixlhkx/bafkreihx3lk7vilo2lkif2y6hkpqhtew6yutygrvaqx2yadszeyjofu4wy@jpeg',
        viewer: {
          muted: false,
          blockedBy: false,
        },
        labels: [],
        createdAt: '2024-11-02T12:33:50.715Z',
      },
      value: {
        $type: 'app.bsky.feed.post',
        createdAt: '2024-12-06T16:39:36.072Z',
        langs: ['en'],
        reply: {
          parent: {
            cid: 'bafyreidaa34u63vzwyhb6hbeoaygokc5qtciw6zwsc4pmsqava5dxn7hzm',
            uri: 'at://did:plc:pdcn3dkmq6t6qtan5fkxoloq/app.bsky.feed.post/3lcngxq7tjt2s',
          },
          root: {
            cid: 'bafyreialgyu3sbluv7gj4foys3aj5zmxyu266dksn7j3t4tqmnruf4w46e',
            uri: 'at://did:plc:pdcn3dkmq6t6qtan5fkxoloq/app.bsky.feed.post/3lcngxpsyfk2s',
          },
        },
        text: "Another reason to do the repro is that I have mutlople times found out that it was a bug on my part, couldn't repro it 😅\n\nSaves everybody's time and helps to put debugging effort into the right place.",
      },
      labels: [],
      likeCount: 10,
      replyCount: 1,
      repostCount: 1,
      quoteCount: 1,
      indexedAt: '2024-12-06T16:39:37.128Z',
      embeds: [],
    },
  },
  replyCount: 0,
  repostCount: 1,
  likeCount: 14,
  quoteCount: 0,
  indexedAt: '2024-12-07T22:53:58.715Z',
  viewer: {
    threadMuted: false,
    embeddingDisabled: false,
  },
  labels: [],
} as Post;
