import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IftaLabelModule } from 'primeng/iftalabel';
import { InputTextModule } from 'primeng/inputtext';

import { FormInputTextUiComponent } from './input-text.ui-component';

describe('FormInputTextUiComponent', () => {
  let component: FormInputTextUiComponent;
  let fixture: ComponentFixture<FormInputTextUiComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormInputTextUiComponent, IftaLabelModule, InputTextModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FormInputTextUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
