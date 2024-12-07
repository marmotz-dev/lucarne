import { NgOptimizedImage } from '@angular/common';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PostActionComponent } from '@app/features/feeds/components/post-action/post-action.component';
import { PostActionsComponent } from '@app/features/feeds/components/post-actions/post-actions.component';
import { PostAvatarComponent } from '@app/features/feeds/components/post-avatar/post-avatar.component';
import { PostEmbedComponent } from '@app/features/feeds/components/post-embed/post-embed.component';
import { PostHeaderComponent } from '@app/features/feeds/components/post-header/post-header.component';
import { PostTextComponent } from '@app/features/feeds/components/post-text/post-text.component';
import { PostComponent } from '@app/features/feeds/components/post/post.component';
import { postThreadWithoutEmbedMock } from '@app/features/feeds/lib/feeds/metadata/tests/mock/post-thread-without-embed.mock';
import { PostService } from '@app/features/feeds/lib/feeds/post.service';
import { TimeAgoPipe } from '@app/lib/dates/time-ago.pipe';
import { ClsPipe } from '@app/lib/utils/cls.pipe';
import { IonicModule } from '@ionic/angular';
import { TranslateTestingModule } from 'ngx-translate-testing';

import { PostPage } from './post.page';

describe('PostPage', () => {
  let component: PostPage;
  let fixture: ComponentFixture<PostPage>;
  let postServiceMock: jest.Mocked<PostService>;

  const mockActivatedRoute = {
    snapshot: {
      params: {
        authorHandle: 'testAuthor',
        postId: '12345',
      },
    },
  };

  beforeEach(waitForAsync(() => {
    postServiceMock = {
      getPostThread: jest.fn().mockResolvedValue(postThreadWithoutEmbedMock),
    } as unknown as jest.Mocked<PostService>;

    TestBed.configureTestingModule({
      declarations: [
        PostPage,
        PostComponent,
        PostAvatarComponent,
        PostHeaderComponent,
        PostTextComponent,
        PostEmbedComponent,
        PostActionsComponent,
        PostActionComponent,
      ],
      imports: [
        IonicModule.forRoot(),
        RouterModule.forRoot([]),
        TranslateTestingModule.withTranslations({}),
        ClsPipe,
        TimeAgoPipe,
        NgOptimizedImage,
      ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: PostService, useValue: postServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PostPage);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call loadData with the correct post URI on init', () => {
    const loadDataSpy = jest.spyOn(component, 'loadData').mockImplementation(() => Promise.resolve());

    component.ngOnInit();

    expect(loadDataSpy).toHaveBeenCalledWith('at://testAuthor/app.bsky.feed.post/12345');
  });

  it('should set postThread after loading data', async () => {
    await component['loadData']('testPostUri');

    expect(component.postThread).toEqual(postThreadWithoutEmbedMock);
  });

  it('should render the l-post component when postThread is defined', async () => {
    component.postThread = postThreadWithoutEmbedMock;
    fixture.detectChanges();

    const lPostElement = fixture.nativeElement.querySelector('l-post');
    expect(lPostElement).toBeTruthy();
  });

  it('should not render the l-post component when postThread is undefined', () => {
    component.postThread = undefined;
    fixture.detectChanges();

    const lPostElement = fixture.nativeElement.querySelector('l-post');
    expect(lPostElement).toBeNull();
  });
});
