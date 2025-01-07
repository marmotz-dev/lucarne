import { NgOptimizedImage } from '@angular/common';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PostEmbedImagesComponent } from '@app/features/feeds/components/post-embed-images/post-embed-images.component';
import { FeedsModule } from '@app/features/feeds/feeds.module';
import { embedImagesMock } from '@app/features/feeds/lib/feeds/metadata/tests/mock/embed-images.mock';
import { TimeAgoPipe } from '@app/lib/dates/time-ago.pipe';
import { IonicModule } from '@ionic/angular';
import { TranslateTestingModule } from 'ngx-translate-testing';

describe('PostEmbedImagesComponent', () => {
  let component: PostEmbedImagesComponent;
  let fixture: ComponentFixture<PostEmbedImagesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PostEmbedImagesComponent],
      imports: [
        IonicModule.forRoot(),
        TimeAgoPipe,
        TranslateTestingModule.withTranslations({}),
        NgOptimizedImage,
        FeedsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PostEmbedImagesComponent);
    component = fixture.componentInstance;
    component.embed = embedImagesMock;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
