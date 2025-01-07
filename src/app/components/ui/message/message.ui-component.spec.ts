import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MessageUiComponent } from './message.ui-component';

describe('MessageUiComponent', () => {
  let component: MessageUiComponent;
  let fixture: ComponentFixture<MessageUiComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MessageUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MessageUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
