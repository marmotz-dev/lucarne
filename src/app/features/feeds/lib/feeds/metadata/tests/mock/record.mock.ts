import { RecordContent } from '@app/features/feeds/lib/feeds/feeds.type';

export const recordMock = {
  $type: 'app.bsky.feed.post',
  createdAt: '2024-12-03T20:50:31.706Z',
  facets: [
    {
      features: [
        {
          $type: 'app.bsky.richtext.facet#link',
          uri: 'https://nextjs.org',
        },
      ],
      index: {
        byteEnd: 35,
        byteStart: 25,
      },
    },
  ],
  langs: ['en'],
  text: 'New footer just dropped: nextjs.org',
} as RecordContent;
