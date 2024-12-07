import { NgOptimizedImage } from '@angular/common';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { FeedsModule } from '@app/features/feeds/feeds.module';
import { postBasic1Mock } from '@app/features/feeds/lib/feeds/metadata/tests/mock/post-basic-1.mock';
import { TimeAgoPipe } from '@app/lib/dates/time-ago.pipe';
import { IonicModule } from '@ionic/angular';
import { TranslateTestingModule } from 'ngx-translate-testing';

import { PostComponent } from './post.component';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PostComponent],
      imports: [
        IonicModule.forRoot(),
        TimeAgoPipe,
        TranslateTestingModule.withTranslations({}),
        NgOptimizedImage,
        FeedsModule,
        RouterModule.forRoot([]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    component.post = postBasic1Mock;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
