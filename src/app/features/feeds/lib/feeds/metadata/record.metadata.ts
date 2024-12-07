import { RecordContent } from '@app/features/feeds/lib/feeds/feeds.type';
import { POST_AVATAR_WIDTH, POST_GAP_X, POST_PADDING_X } from '@app/features/feeds/lib/feeds/metadata/post.constants';

export class RecordMetadata {
  private static div: HTMLDivElement;

  constructor(
    private readonly record: RecordContent,
    postUri?: string
  ) {
    if (!RecordMetadata.div) {
      const contentWidth = window.innerWidth - 2 * POST_PADDING_X - POST_AVATAR_WIDTH - POST_GAP_X;

      RecordMetadata.div = document.createElement('div');
      if (postUri) {
        RecordMetadata.div.setAttribute('post-uri', postUri);
      }
      RecordMetadata.div.style.width = `${contentWidth}px`;
      RecordMetadata.div.style.fontFamily = 'Inter, sans-serif';
      RecordMetadata.div.style.fontSize = '16px';
      RecordMetadata.div.style.lineHeight = '24px';
      RecordMetadata.div.style.whiteSpace = 'pre-line';
      RecordMetadata.div.style.whiteSpaceCollapse = 'preserve-breaks';
      RecordMetadata.div.style.textWrap = 'wrap';
      RecordMetadata.div.style.visibility = 'hidden';
      RecordMetadata.div.style.overflowWrap = 'break-word';
      RecordMetadata.div.style.textRendering = 'optimizelegibility';
      RecordMetadata.div.style.webkitTextSizeAdjust = '100%';
      RecordMetadata.div.style.textWrapMode = 'wrap';
      RecordMetadata.div.style.textWrapStyle = 'auto';
      // RecordMetadata.div.style.position = 'absolute';
      // RecordMetadata.div.style.top = '0px';
      // RecordMetadata.div.style.left = '0px';
      document.body.append(RecordMetadata.div);
    }
  }

  predictElementHeight(reduceWidth?: number) {
    let currentWidth = 0;
    if (reduceWidth) {
      currentWidth = parseInt(RecordMetadata.div.style.width, 10);
      RecordMetadata.div.style.width = currentWidth - reduceWidth + 'px';
    }

    RecordMetadata.div.innerText = this.record.text;
    const textHeight = RecordMetadata.div.offsetHeight;

    if (currentWidth) {
      RecordMetadata.div.style.width = currentWidth + 'px';
    }

    // console.log({
    //   at: 'RecordMetadata.predictElementHeight',
    //   reduceWidth,
    //   text: this.record.text,
    //   textHeight,
    //   textHeightAgain: RecordMetadata.div.offsetHeight,
    //   divWidth: RecordMetadata.div.style.width,
    // });

    return textHeight;
  }
}
