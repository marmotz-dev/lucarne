import { Component, Input } from '@angular/core';
import { AppBskyEmbedImages } from '@atproto/api';

@Component({
  selector: 'l-post-embed-images',
  templateUrl: './post-embed-images.component.html',
})
export class PostEmbedImagesComponent {
  @Input() embed!: AppBskyEmbedImages.View;
}
