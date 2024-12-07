import { AppBskyEmbedImages } from '@atproto/api';

export const embedImagesMock: AppBskyEmbedImages.View = {
  $type: 'app.bsky.embed.images#view',
  images: [
    {
      thumb:
        'https://cdn.bsky.app/img/feed_thumbnail/plain/did:plc:np63qsk4tlzguykanskcipxi/bafkreibjjni4crk3vdispetw2lbbqnzm7mqyr5jrlvxoedn3kp6xafieiq@jpeg',
      fullsize:
        'https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:np63qsk4tlzguykanskcipxi/bafkreibjjni4crk3vdispetw2lbbqnzm7mqyr5jrlvxoedn3kp6xafieiq@jpeg',
      alt: 'The foot on the Next.js website which now includes a link to Bluesky',
      aspectRatio: {
        height: 440,
        width: 604,
      },
    },
  ],
};
