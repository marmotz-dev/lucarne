import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { recordMock } from '@app/features/feeds/lib/feeds/metadata/tests/mock/record.mock';
import { IonicModule } from '@ionic/angular';

import { PostTextComponent } from './post-text.component';

describe('PostTextComponent', () => {
  let component: PostTextComponent;
  let fixture: ComponentFixture<PostTextComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PostTextComponent],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(PostTextComponent);
    component = fixture.componentInstance;
    component.record = recordMock;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
