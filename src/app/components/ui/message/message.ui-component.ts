import { Component, Input } from '@angular/core';
import { ClsPipe } from '@app/lib/utils/cls.pipe';

@Component({
  selector: 'l-ui-message',
  templateUrl: './message.ui-component.html',
  standalone: true,
  imports: [ClsPipe],
})
export class MessageUiComponent {
  @Input() type!: 'info' | 'success' | 'warning' | 'error';
}
