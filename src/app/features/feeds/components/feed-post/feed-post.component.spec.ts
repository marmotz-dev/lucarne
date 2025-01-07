import { NgOptimizedImage } from '@angular/common';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { FeedsModule } from '@app/features/feeds/feeds.module';
import { postBasic1Mock } from '@app/features/feeds/lib/feeds/metadata/tests/mock/post-basic-1.mock';
import { TimeAgoPipe } from '@app/lib/dates/time-ago.pipe';
import { IonicModule } from '@ionic/angular';
import { TranslateTestingModule } from 'ngx-translate-testing';

import { FeedPostComponent } from './feed-post.component';

describe('FeedPostComponent', () => {
  let component: FeedPostComponent;
  let fixture: ComponentFixture<FeedPostComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FeedPostComponent],
      imports: [
        IonicModule.forRoot(),
        TimeAgoPipe,
        TranslateTestingModule.withTranslations({}),
        NgOptimizedImage,
        FeedsModule,
        RouterModule.forRoot([]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FeedPostComponent);
    component = fixture.componentInstance;
    component.viewPost = { post: postBasic1Mock };
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
