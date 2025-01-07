import { Component, ElementRef, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IftaLabel } from 'primeng/iftalabel';
import { InputText } from 'primeng/inputtext';

@Component({
  selector: 'l-ui-form-input-text',
  templateUrl: './input-text.ui-component.html',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormInputTextUiComponent),
      multi: true,
    },
  ],
  imports: [IftaLabel, InputText],
})
export class FormInputTextUiComponent implements ControlValueAccessor, OnInit {
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
