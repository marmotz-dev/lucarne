import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostActionComponent } from './post-action.component';

describe('PostActionComponent', () => {
  let component: PostActionComponent;
  let fixture: ComponentFixture<PostActionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PostActionComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(PostActionComponent);
    component = fixture.componentInstance;
    component.iconName = 'heart';
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
