import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormInputPasswordUiComponent } from './input-password.ui-component';

describe('FormInputPasswordUiComponent', () => {
  let component: FormInputPasswordUiComponent;
  let fixture: ComponentFixture<FormInputPasswordUiComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormInputPasswordUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormInputPasswordUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
