import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RecordContent } from '@app/features/feeds/lib/feeds/feeds.type';
import { RichText } from '@atproto/api';

@Component({
  selector: 'l-post-text',
  templateUrl: './post-text.component.html',
})
export class PostTextComponent implements OnInit, OnChanges {
  @Input() record!: RecordContent;

  protected richText?: RichText;

  loadRichText() {
    if (!this.record.text || !this.record.facets) {
      this.richText = undefined;

      return;
    }

    this.richText = new RichText({
      text: this.record.text,
      facets: this.record.facets,
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['record']) {
      this.loadRichText();
    }
  }

  ngOnInit() {
    this.loadRichText();
  }
}
