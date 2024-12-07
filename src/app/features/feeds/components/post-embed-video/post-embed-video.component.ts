import { AfterViewChecked, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import { AppBskyEmbedVideo } from '@atproto/api';
import videojs from 'video.js';
import Player from 'video.js/dist/types/player';

@Component({
  selector: 'l-post-embed-video',
  templateUrl: './post-embed-video.component.html',
})
export class PostEmbedVideoComponent implements AfterViewChecked, OnDestroy {
  @Input() embed!: AppBskyEmbedVideo.View;

  @ViewChild('target', { static: true }) target!: ElementRef;

  protected player!: Player;

  protected options: {
    fluid: boolean;
    aspectRatio: string;
    autoplay: boolean;
    sources: {
      src: string;
      type: string;
    }[];
  } = {
    fluid: true,
    aspectRatio: '16:9',
    autoplay: true,
    sources: [
      {
        src: '',
        type: 'video/mp4',
      },
    ],
  };

  constructor() {}

  ngAfterViewChecked() {
    if (!this.player && this.target && this.embed) {
      this.player = videojs(
        this.target.nativeElement,
        {
          ...this.options,
          sources: [
            {
              src: this.embed.playlist,
              type: 'application/x-mpegURL',
            },
          ],
        },
        function onPlayerReady() {
          console.log('onPlayerReady', this);
        }
      );
    }
  }

  ngOnDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }
}
