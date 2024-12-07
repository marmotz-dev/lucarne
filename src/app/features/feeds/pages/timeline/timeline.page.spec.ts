import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CenteredUiComponent } from '@app/components/ui/center-message/centered.ui-component';
import { FeedComponent } from '@app/features/feeds/components/feed/feed.component';
import { FeedsService } from '@app/features/feeds/lib/feeds/feeds.service';
import { IonicModule } from '@ionic/angular';

import { TimelinePage } from './timeline.page';

describe('TimelinePage', () => {
  let component: TimelinePage;
  let fixture: ComponentFixture<TimelinePage>;
  let feedsServiceSpy: jest.Mocked<FeedsService>;

  beforeEach(waitForAsync(() => {
    feedsServiceSpy = {
      getTimeline: jest.fn().mockResolvedValue({ feedPosts: [] }),
    } as unknown as jest.Mocked<FeedsService>;

    TestBed.configureTestingModule({
      declarations: [TimelinePage, FeedComponent],
      imports: [CenteredUiComponent, IonicModule.forRoot()],
      providers: [{ provide: FeedsService, useValue: feedsServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(TimelinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
