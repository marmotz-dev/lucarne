import { NgOptimizedImage } from '@angular/common';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { authorMock } from '@app/features/feeds/lib/feeds/metadata/tests/mock/author.mock';
import { ClsPipe } from '@app/lib/utils/cls.pipe';
import { IonicModule } from '@ionic/angular';

import { PostAvatarComponent } from './post-avatar.component';

describe('PostAvatarComponent', () => {
  let component: PostAvatarComponent;
  let fixture: ComponentFixture<PostAvatarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PostAvatarComponent],
      imports: [IonicModule.forRoot(), ClsPipe, NgOptimizedImage],
    }).compileComponents();

    fixture = TestBed.createComponent(PostAvatarComponent);
    component = fixture.componentInstance;
    component.author = authorMock;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
