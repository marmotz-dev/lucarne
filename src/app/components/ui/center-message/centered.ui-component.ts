import { Component } from '@angular/core';

@Component({
  selector: 'l-ui-centered',
  template: `
    <div class="flex items-center justify-center h-full">
      <ng-content />
    </div>
  `,
  standalone: true,
})
export class CenteredUiComponent {}
