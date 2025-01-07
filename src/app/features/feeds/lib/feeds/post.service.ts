import { Injectable } from '@angular/core';
import { ThreadPost } from '@app/features/feeds/lib/feeds/feeds.type';
import { AtpAgent } from '@app/lib/atproto/atp-agent.service';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private readonly agent: AtpAgent) {}

  async getPostThread(uri: string): Promise<ThreadPost> {
    const response = await this.agent.getPostThread({
      uri,
    });

    return response.data.thread as ThreadPost;
  }
}
