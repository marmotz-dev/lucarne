import { Record } from '@app/features/feeds/lib/feeds/feeds.type';
import { authorMock } from '@app/features/feeds/lib/feeds/metadata/tests/mock/author.mock';
import { recordMock } from '@app/features/feeds/lib/feeds/metadata/tests/mock/record.mock';
import { AppBskyEmbedRecord } from '@atproto/api';

export const embedRecordMock: AppBskyEmbedRecord.View = {
  record: {
    author: authorMock,
    value: recordMock,
  } as Record,
};
