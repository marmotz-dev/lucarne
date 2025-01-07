import { Injectable } from '@angular/core';
import { Feed, FeedPost } from '@app/features/feeds/lib/feeds/feeds.type';
import { AtpAgent } from '@app/lib/atproto/atp-agent.service';
import { differenceInSeconds } from 'date-fns';

@Injectable({
  providedIn: 'root',
})
export class FeedsService {
  constructor(private readonly agent: AtpAgent) {}

  async getTimeline(oldViewPosts: FeedPost[] = [], cursor?: string): Promise<Feed> {
    const response = await this.agent.getTimeline({ cursor });

    const timeline: Feed = {
      feedPosts: [],
      cursor: response.data.cursor,
    };

    const apiFeedViewPosts = response.data.feed as FeedPost[];
    const newFeedViewPosts: FeedPost[] = [];

    // Keep new feed items that are not already in the old feed items
    const firstDuplicatedNewFeedItemIndex = apiFeedViewPosts.findIndex((newFeedItem) =>
      oldViewPosts.some((currentFeedItem) => currentFeedItem.post.cid === newFeedItem.post.cid)
    );

    // If there are no duplicated items, we can just merge the two arrays
    if (firstDuplicatedNewFeedItemIndex === -1) {
      timeline.feedPosts = [...apiFeedViewPosts, ...oldViewPosts];
    } else {
      // else we must keep all the new feed items that are before the first duplicated item
      apiFeedViewPosts.slice(0, firstDuplicatedNewFeedItemIndex).forEach((feedItem) => {
        newFeedViewPosts.push(feedItem);
      });

      // Extract the range of feed items that are in new and old feed items
      // ex: if new feed items have posts [1, 2, 4, 5] and old feed items have [3, 4, 5, 6, 7]
      // we must extract posts [4, 5]
      const duplicatedNewFeedItems = apiFeedViewPosts.slice(firstDuplicatedNewFeedItemIndex);

      // Now we must remove all old feed items that are not in the extracted new feed items (to remove deleted posts)
      const lastDuplicatedNewFeedItem = duplicatedNewFeedItems[duplicatedNewFeedItems.length - 1];
      const lastDuplicatedCurrentFeedItemIndex = oldViewPosts.findIndex(
        (currentFeedItem) => currentFeedItem.post.cid === lastDuplicatedNewFeedItem.post.cid
      );
      const duplicatedCurrentFeedItems = oldViewPosts.slice(0, lastDuplicatedCurrentFeedItemIndex + 1);
      duplicatedNewFeedItems
        .filter((duplicatedNewFeedItem) =>
          duplicatedCurrentFeedItems.some(
            (duplicatedCurrentFeedItem) => duplicatedCurrentFeedItem.post.cid === duplicatedNewFeedItem.post.cid
          )
        )
        .forEach((duplicatedItem) => {
          newFeedViewPosts.push(duplicatedItem);
        });

      // Finally, keep all the rest of the old feed items
      oldViewPosts.slice(lastDuplicatedCurrentFeedItemIndex + 1).forEach((currentFeedItem) => {
        newFeedViewPosts.push(currentFeedItem);
      });

      timeline.feedPosts = newFeedViewPosts;
    }

    // deduplicate viewPosts by post.cid
    const seen = new Set();
    timeline.feedPosts = timeline.feedPosts.filter((feedItem) => {
      const duplicate = seen.has(feedItem.post.cid);
      seen.add(feedItem.post.cid);
      return !duplicate;
    });

    // sort by created at
    timeline.feedPosts.sort((a, b) => {
      return differenceInSeconds(b.post.record.createdAt, a.post.record.createdAt);
    });

    return timeline;
  }
}
