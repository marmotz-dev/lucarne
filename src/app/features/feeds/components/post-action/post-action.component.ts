import { Component, Input } from '@angular/core';

@Component({
  selector: 'l-post-action',
  templateUrl: './post-action.component.html',
  styleUrl: './post-action.component.scss',
})
export class PostActionComponent {
  @Input() iconName!: string;
  @Input() count?: number;
}
