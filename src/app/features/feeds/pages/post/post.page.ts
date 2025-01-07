import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThreadPost } from '@app/features/feeds/lib/feeds/feeds.type';
import { PostService } from '@app/features/feeds/lib/feeds/post.service';

@Component({
  selector: 'l-post-page',
  templateUrl: './post.page.html',
})
export class PostPage implements OnInit {
  postThread?: ThreadPost;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly postService: PostService
  ) {}

  async loadData(postUri: string) {
    return this.postService.getPostThread(postUri).then((postThread) => {
      this.postThread = postThread;
    });
  }

  async ngOnInit() {
    const { authorHandle, postId } = this.activatedRoute.snapshot.params;

    await this.loadData(`at://${authorHandle}/app.bsky.feed.post/${postId}`);
  }
}
