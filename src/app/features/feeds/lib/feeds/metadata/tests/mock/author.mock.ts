import { ProfileViewBasic } from '@atproto/api/dist/client/types/app/bsky/actor/defs';

export const authorMock = {
  did: 'did:plc:np63qsk4tlzguykanskcipxi',
  handle: 'nextjs.org',
  displayName: 'Next.js',
  avatar:
    'https://cdn.bsky.app/img/avatar/plain/did:plc:np63qsk4tlzguykanskcipxi/bafkreiem4wxm2bjiz2n2apquvoav5yi7by6rkghsipyd7mmfvjnuzlf44e@jpeg',
  viewer: {
    muted: false,
    blockedBy: false,
    following: 'at://did:plc:4b2vjkemb4b5jy7z35o6txqd/app.bsky.graph.follow/3lb7kkfnszv2k',
  },
  labels: [],
  createdAt: '2023-05-23T20:53:23.744Z',
} as ProfileViewBasic;
