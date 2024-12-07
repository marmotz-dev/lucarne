import { Component, Input } from '@angular/core';
import { Post } from '@app/features/feeds/lib/feeds/feeds.type';
import { PostMetadata } from '@app/features/feeds/lib/feeds/metadata/post.metadata';
import { postBasic1Mock } from '@app/features/feeds/lib/feeds/metadata/tests/mock/post-basic-1.mock';
import { WINDOW_WIDTH } from '@app/features/feeds/lib/feeds/metadata/tests/test.constants';

@Component({
  template: `<div>
    <l-post [post]="post" />
  </div>`,
})
export class PostTester {
  @Input() post!: Post;
  @Input() width = WINDOW_WIDTH;

  constructor() {
    document.body.style.width = `${this.width}px`;
  }
}

describe('PostMetadata', () => {
  it('should be created', () => {
    const postMeta = new PostMetadata(postBasic1Mock);

    expect(postMeta).toBeTruthy();
  });

  // describe('predict post height', () => {
  //   let component: PostTester;
  //   let fixture: ComponentFixture<PostTester>;
  //
  //   beforeEach(waitForAsync(() => {
  //     // jest.spyOn(window, 'innerWidth', 'get').mockReturnValue(WINDOW_WIDTH);
  //     Object.defineProperty(window, 'innerWidth', {
  //       writable: true,
  //       configurable: true,
  //       value: WINDOW_WIDTH,
  //     });
  //
  //     TestBed.configureTestingModule({
  //       declarations: [
  //         PostTester,
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
  //     fixture = TestBed.createComponent(PostTester);
  //     component = fixture.componentInstance;
  //   }));
  //
  //   describe('with only text', () => {
  //     const postsToTest = [
  //       {
  //         url: 'vercel.com/3jwvd2i3kms2f',
  //         post: postBasic1Mock,
  //         height: 249,
  //       },
  //       {
  //         url: 'ledjay.bsky.social/3ldngeehf3c2x',
  //         post: postBasic2Mock,
  //         height: 249,
  //       },
  //       {
  //         url: 'ledjay.bsky.social/3ldngeehd4s2x',
  //         post: postBasic3Mock,
  //         height: 321,
  //       },
  //     ];
  //
  //     postsToTest.forEach(({ url, post, height }, index) => {
  //       it(`with only text - ${index + 1} - ${url}`, async () => {
  //         component.post = post;
  //         fixture.detectChanges();
  //
  //         const metaHeight = new PostMetadata(component.post).predictElementHeight();
  //         const element = fixture.nativeElement.querySelector('l-post > div');
  //         const elementHeight = await getElementStyleNumber(element, 'height');
  //
  //         expect(metaHeight).toBe(height);
  //         expect(metaHeight).toBe(elementHeight);
  //       });
  //     });
  //   });
  //
  //   describe('with image(s)', () => {
  //     it('with 1 image', async () => {
  //       // https://bsky.app/profile/cortini.co/post/3lcqrqh4xrm2x
  //       // http://localhost:8100/feeds/post/cortini.co/3lcqrqh4xrm2x
  //       component.post = postWithOneImageMock;
  //       fixture.detectChanges();
  //
  //       const metaHeight = new PostMetadata(component.post).predictElementHeight();
  //       const element = fixture.nativeElement.querySelector('l-post > div');
  //       const elementHeight = await getElementStyleNumber(element, 'height');
  //
  //       // console.log({
  //       //   at: 'Spec.PostMetadata.PredictPostHeight.with1Image',
  //       //   metaHeight,
  //       //   elementHeight,
  //       // });
  //
  //       expect(metaHeight).toBe(355);
  //       expect(elementHeight).toBe(354);
  //     });
  //   });
  //
  //   it('with record', async () => {
  //     // https://bsky.app/profile/cortini.co/post/3lcqs2vndsu2x
  //     // http://localhost:8100/feeds/post/cortini.co/3lcqs2vndsu2x
  //     component.post = postWithRecordMock;
  //     fixture.detectChanges();
  //
  //     const metaHeight = new PostMetadata(component.post).predictElementHeight();
  //     const element = fixture.nativeElement.querySelector('l-post > div');
  //     const elementHeight = await getElementStyleNumber(element, 'height');
  //
  //     // console.log({
  //     //   at: 'Spec.PostMetadata.PredictPostHeight.withRecords',
  //     //   metaHeight,
  //     //   elementHeight,
  //     // });
  //
  //     expect(metaHeight).toBe(elementHeight);
  //     expect(metaHeight).toBe(371);
  //   });
  //
  //   describe('with external', () => {
  //     const postsToTest = [
  //       {
  //         url: 'vercel.com/3ldr3anpe3s2t',
  //         post: postWithExternal1Mock,
  //         height: 329,
  //       },
  //       {
  //         url: 'vercel.com/3ldmgncymi423',
  //         post: postWithExternal2Mock,
  //         height: 353,
  //       },
  //     ];
  //
  //     postsToTest.forEach(({ url, post, height }) => {
  //       it('with external - ' + url, async () => {
  //         component.post = post;
  //         fixture.detectChanges();
  //
  //         const metaHeight = new PostMetadata(component.post).predictElementHeight();
  //         const element = fixture.nativeElement.querySelector('l-post > div');
  //         const elementHeight = await getElementStyleNumber(element, 'height');
  //
  //         expect(metaHeight).toBe(elementHeight);
  //         expect(metaHeight).toBe(height);
  //       });
  //     });
  //   });
  // });
});
