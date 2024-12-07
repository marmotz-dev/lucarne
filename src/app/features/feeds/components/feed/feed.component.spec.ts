import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CenteredUiComponent } from '@app/components/ui/center-message/centered.ui-component';
import { IonicModule } from '@ionic/angular';

import { FeedComponent } from './feed.component';

describe('FeedComponent', () => {
  let component: FeedComponent;
  let fixture: ComponentFixture<FeedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FeedComponent],
      imports: [CenteredUiComponent, IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(FeedComponent);
    component = fixture.componentInstance;
    component.feedPosts = [];
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
