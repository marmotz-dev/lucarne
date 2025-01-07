import { Component, Input } from '@angular/core';
import { FeedPost } from '@app/features/feeds/lib/feeds/feeds.type';
import { FeedPostMetadata } from '@app/features/feeds/lib/feeds/metadata/feed-post.metadata';
import { feedPostWithoutRepostMock } from '@app/features/feeds/lib/feeds/metadata/tests/mock/feed-post-without-repost.mock';
import { WINDOW_WIDTH } from '@app/features/feeds/lib/feeds/metadata/tests/test.constants';

@Component({
  template: `<div>
    <l-feed-post [viewPost]="feedPost" />
  </div>`,
})
export class FeedPostTester {
  @Input() feedPost!: FeedPost;
  @Input() width = WINDOW_WIDTH;

  constructor() {
    document.body.style.width = `${this.width}px`;
  }
}

describe('FeedPostMetadata', () => {
  it('should be created', () => {
    const postMeta = new FeedPostMetadata(feedPostWithoutRepostMock);

    expect(postMeta).toBeTruthy();
  });

  // describe('predict feedPost height', () => {
  //   let component: FeedPostTester;
  //   let fixture: ComponentFixture<FeedPostTester>;
  //
  //   beforeEach(waitForAsync(() => {
  //     Object.defineProperty(window, 'innerWidth', {
  //       writable: true,
  //       configurable: true,
  //       value: WINDOW_WIDTH,
  //     });
  //
  //     TestBed.configureTestingModule({
  //       declarations: [
  //         FeedPostTester,
  //         FeedPostComponent,
  //         PostComponent,
  //         PostAvatarComponent,
  //         PostHeaderComponent,
  //         PostTextComponent,
  //         PostEmbedComponent,
  //         PostActionComponent,
  //         PostEmbedImagesComponent,
  //         PostEmbedRecordComponent,
  //       ],
  //       imports: [
  //         IonicModule.forRoot(),
  //         TimeAgoPipe,
  //         TranslateTestingModule.withTranslations({}),
  //         NgOptimizedImage,
  //         ClsPipe,
  //         RouterModule.forRoot([]),
  //         FeedsModule,
  //       ],
  //     }).compileComponents();
  //
  //     fixture = TestBed.createComponent(FeedPostTester);
  //     component = fixture.componentInstance;
  //   }));
  //
  //   it('without repost', async () => {
  //     component.feedPost = feedPostWithoutRepostMock;
  //     fixture.detectChanges();
  //
  //     const metaHeight = new FeedPostMetadata(component.feedPost).predictElementHeight();
  //     const element = fixture.nativeElement.querySelector('l-feed-post > div');
  //     const elementHeight = await getElementStyleNumber(element, 'height');
  //
  //     expect(metaHeight).toBe(249);
  //     expect(metaHeight).toBe(elementHeight);
  //   });
  //
  //   describe('with repost', () => {
  //     const feedPostsToTest = [
  //       // {
  //       //   url: 'vercel.com/3jwvd2i3kms2f',
  //       //   feedPost: feedPostWithRepost1Mock,
  //       //   height: 249,
  //       // },
  //       {
  //         url: 'ledjay.bsky.social/3le7nzrswbc2m',
  //         feedPost: feedPostWithRepost2Mock,
  //         height: 321,
  //       },
  //     ];
  //
  //     feedPostsToTest.forEach(({ url, feedPost, height }) => {
  //       it(`with only text - ${url}`, async () => {
  //         component.feedPost = feedPost;
  //         fixture.detectChanges();
  //
  //         const metaHeight = new FeedPostMetadata(component.feedPost).predictElementHeight();
  //         const element = fixture.nativeElement.querySelector('l-feed-post > div');
  //         const elementHeight = await getElementStyleNumber(element, 'height');
  //
  //         // console.log({
  //         //   at: 'Spec.FeedPostMetadata.predictFeedPostHeight.withRepost',
  //         //   metaHeight,
  //         //   elementHeight,
  //         // });
  //
  //         expect(metaHeight).toBe(height);
  //         expect(metaHeight).toBe(elementHeight);
  //       });
  //     });
  //   });
  // });
});
