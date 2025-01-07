import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { authorMock } from '@app/features/feeds/lib/feeds/metadata/tests/mock/author.mock';
import { TimeAgoPipe } from '@app/lib/dates/time-ago.pipe';
import { IonicModule } from '@ionic/angular';
import { TranslateTestingModule } from 'ngx-translate-testing';

import { PostHeaderComponent } from './post-header.component';

describe('PostHeaderComponent', () => {
  let component: PostHeaderComponent;
  let fixture: ComponentFixture<PostHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PostHeaderComponent],
      imports: [IonicModule.forRoot(), TimeAgoPipe, TranslateTestingModule.withTranslations({})],
    }).compileComponents();

    fixture = TestBed.createComponent(PostHeaderComponent);
    component = fixture.componentInstance;
    component.author = authorMock;
    component.createdAt = new Date().toISOString();
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
