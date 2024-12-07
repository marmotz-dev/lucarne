import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Record } from '@app/features/feeds/lib/feeds/feeds.type';
import { AppBskyEmbedRecord } from '@atproto/api';
import { isViewRecord } from '@atproto/api/dist/client/types/app/bsky/embed/record';

@Component({
  selector: 'l-post-embed-record',
  templateUrl: './post-embed-record.component.html',
  styleUrls: ['./post-embed-record.component.scss'],
})
export class PostEmbedRecordComponent implements OnChanges {
  @Input() embed!: AppBskyEmbedRecord.View;

  protected recordType?: 'record';

  getRecordAsRecord(): Record {
    return this.embed.record as Record;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['embed']?.currentValue) {
      if (isViewRecord(this.embed.record)) {
        this.recordType = 'record';
      }
    }
  }
}
