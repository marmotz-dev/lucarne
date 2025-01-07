import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '@app/features/feeds/lib/feeds/feeds.type';
import { text } from 'ionicons/icons';

@Component({
  selector: 'l-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent implements OnInit {
  @Input() post!: Post;
  @Input() repostedBy?: string;

  @Output() onClick = new EventEmitter<Post>();
  protected readonly text = text;

  constructor(private readonly elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.addEventListener('click', (event: MouseEvent) => {
      this.onClick.emit(this.post);
    });
  }
}
