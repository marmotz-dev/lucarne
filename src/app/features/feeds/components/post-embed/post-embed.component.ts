import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PostEmbedMetadata } from '@app/features/feeds/lib/feeds/metadata/embed/post-embed.metadata';
import { PostView } from '@atproto/api/dist/client/types/app/bsky/feed/defs';

@Component({
  selector: 'l-post-embed',
  templateUrl: './post-embed.component.html',
})
export class PostEmbedComponent implements OnChanges {
  @Input() embed?: PostView['embed'];

  protected type?: 'video' | 'images' | 'external' | 'record' | 'record-with-media' | 'unknown' | 'none';

  private embedMeta: PostEmbedMetadata;

  constructor() {
    this.embedMeta = new PostEmbedMetadata(this.embed);
  }

  getEmbedAsExternal() {
    return this.embedMeta.getEmbedAsExternal();
  }

  getEmbedAsImages() {
    return this.embedMeta.getEmbedAsImages();
  }

  getEmbedAsRecord() {
    return this.embedMeta.getEmbedAsRecord();
  }

  getEmbedAsRecordWithMedia() {
    return this.embedMeta.getEmbedAsRecordWithMedia();
  }

  getEmbedAsVideo() {
    return this.embedMeta.getEmbedAsVideo();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['embed']) {
      this.embedMeta = new PostEmbedMetadata(this.embed);
      this.type = this.embedMeta.getEmbedType();
    }
  }
}
