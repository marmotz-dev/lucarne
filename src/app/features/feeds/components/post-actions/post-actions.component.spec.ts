import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FeedsModule } from '@app/features/feeds/feeds.module';
import { postBasic1Mock } from '@app/features/feeds/lib/feeds/metadata/tests/mock/post-basic-1.mock';
import { IonicModule } from '@ionic/angular';

import { PostActionsComponent } from './post-actions.component';

describe('PostActionsComponent', () => {
  let component: PostActionsComponent;
  let fixture: ComponentFixture<PostActionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PostActionsComponent],
      imports: [IonicModule.forRoot(), FeedsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PostActionsComponent);
    component = fixture.componentInstance;
    component.post = postBasic1Mock;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
