import { Component, ElementRef, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IftaLabel } from 'primeng/iftalabel';
import { Password } from 'primeng/password';

@Component({
  selector: 'l-ui-form-input-password',
  templateUrl: './input-password.ui-component.html',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormInputPasswordUiComponent),
      multi: true,
    },
  ],
  imports: [IftaLabel, Password],
})
export class FormInputPasswordUiComponent implements ControlValueAccessor, OnInit {
  @Input() id!: string;
  @Input() label!: string;

  value?: string;
  disabled = false;

  constructor(private readonly element: ElementRef) {}

  ngOnInit() {
    this.element.nativeElement.removeAttribute('id');
  }

  onChange: CallableFunction = () => {};

  onTouched: CallableFunction = () => {};

  registerOnChange(fn: CallableFunction): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: CallableFunction): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  valueChanged(event: Event): void {
    const value = (event.target as HTMLInputElement).value;

    this.value = value;
    this.onChange(value);
  }

  writeValue(value: string): void {
    this.value = value;
  }
}
