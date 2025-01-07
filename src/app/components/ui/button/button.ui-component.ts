import { Component, Input } from '@angular/core';
import { Button } from 'primeng/button';

@Component({
  selector: 'l-ui-button',
  templateUrl: './button.ui-component.html',
  standalone: true,
  imports: [Button],
})
export class ButtonUiComponent {
  @Input() disabled = false;
  @Input() loading = false;
  @Input() type: 'button' | 'submit' = 'button';
}
