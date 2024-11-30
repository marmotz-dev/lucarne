import { DestroyRef, inject, Injectable, OnDestroy } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { ConnectionStatus, Network } from '@capacitor/network';
import { BehaviorSubject, combineLatest, filter } from 'rxjs';
import { AppSettingsService } from '../storage/app-settings.service';
import { Credentials } from '../storage/credentials.type';
import { Feed, FeedItem } from './feed.type';

type Tokens = {
  accessToken: string;
  refreshToken: string;
};

@Injectable({
  providedIn: 'root',
})
export class FeedsService implements OnDestroy {
  public readonly isReady$ = new BehaviorSubject<boolean>(false);
  public readonly haveNetwork$ = new BehaviorSubject<boolean>(false);
  public readonly tokens$ = new BehaviorSubject<Tokens | undefined>(undefined);
  private readonly credentials$ = new BehaviorSubject<Credentials | undefined>(undefined);
  private readonly destroyRef = inject(DestroyRef);
  private networkListenerRemove?: () => Promise<void>;

  constructor(private readonly appSettings: AppSettingsService) {
    this.init();
  }

  private get tokens() {
    return this.tokens$.getValue();
  }

  private get credentials() {
    return this.credentials$.getValue();
  }

  private get isReady() {
    return this.isReady$.getValue();
  }

  private get haveNetwork() {
    return this.haveNetwork$.getValue();
  }

  async connect() {
    if (!this.haveNetwork || !this.credentials) {
      return;
    }

    try {
      const response: HttpResponse = await CapacitorHttp.post({
        url: 'https://bsky.social/xrpc/com.atproto.server.createSession',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        params: {
          mode: 'cors',
        },
        data: this.credentials,
      });

      const data = response.data as { accessJwt: string; refreshJwt: string };
      this.tokens$.next({
        accessToken: data.accessJwt,
        refreshToken: data.refreshJwt,
      });
    } catch (error) {
      console.log('connect (error)', error);
    }
  }

  async getTimeline(oldFeedItems: FeedItem[] = []): Promise<FeedItem[]> {
    return fetch('https://bsky.social/xrpc/app.bsky.feed.getTimeline', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.tokens!.accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data: Feed) => data.feed)
      .then((apiFeedItems) => {
        const newFeedItems: FeedItem[] = [];

        // Keep new feed items that are not already in the old feed items
        const firstDuplicatedNewFeedItemIndex = apiFeedItems.findIndex((newFeedItem) =>
          oldFeedItems.some((currentFeedItem) => currentFeedItem.post.cid === newFeedItem.post.cid)
        );

        // If there are no duplicated items, we can just merge the two arrays
        if (firstDuplicatedNewFeedItemIndex === -1) {
          return [...apiFeedItems, ...oldFeedItems];
        }

        // else we must keep all the new feed items that are before the first duplicated item
        apiFeedItems.slice(0, firstDuplicatedNewFeedItemIndex).forEach((feedItem) => {
          newFeedItems.push(feedItem);
        });

        // Extract the range of feed items that are in new and old feed items
        // ex: if new feed items have posts [1, 2, 4, 5] and old feed items have [3, 4, 5, 6, 7]
        // we must extract posts [4, 5]
        const duplicatedNewFeedItems = apiFeedItems.slice(firstDuplicatedNewFeedItemIndex);

        // Now we must remove all old feed items that are not in the extracted new feed items (to remove deleted posts)
        const lastDuplicatedNewFeedItem = duplicatedNewFeedItems[duplicatedNewFeedItems.length - 1];
        const lastDuplicatedCurrentFeedItemIndex = oldFeedItems.findIndex(
          (currentFeedItem) => currentFeedItem.post.cid === lastDuplicatedNewFeedItem.post.cid
        );
        const duplicatedCurrentFeedItems = oldFeedItems.slice(0, lastDuplicatedCurrentFeedItemIndex + 1);
        duplicatedNewFeedItems
          .filter((duplicatedNewFeedItem) =>
            duplicatedCurrentFeedItems.some(
              (duplicatedCurrentFeedItem) => duplicatedCurrentFeedItem.post.cid === duplicatedNewFeedItem.post.cid
            )
          )
          .forEach((duplicatedItem) => {
            newFeedItems.push(duplicatedItem);
          });

        // Finally, keep all the rest of the old feed items
        oldFeedItems.slice(lastDuplicatedCurrentFeedItemIndex + 1).forEach((currentFeedItem) => {
          newFeedItems.push(currentFeedItem);
        });

        // deduplicate newFeedItems by post.cid
        const seen = new Set();
        return newFeedItems.filter((feedItem) => {
          const duplicate = seen.has(feedItem.post.cid);
          seen.add(feedItem.post.cid);
          return !duplicate;
        });
      });
  }

  async ngOnDestroy() {
    if (this.networkListenerRemove) {
      await this.networkListenerRemove();
    }
  }

  private init() {
    this.appSettings.get<Credentials>('credentials').then((credentials) => {
      this.credentials$.next(credentials);
    });

    Network.getStatus().then((connectionStatus: ConnectionStatus) => {
      this.haveNetwork$.next(connectionStatus.connected);
    });
    Network.addListener('networkStatusChange', (connectionStatus: ConnectionStatus) => {
      this.haveNetwork$.next(connectionStatus.connected);
    }).then(
      (pluginListenerHandle) => {
        this.networkListenerRemove = pluginListenerHandle.remove;
      },
      (reason) => {
        console.error('Failed to add network listener', reason);
      }
    );

    combineLatest([this.credentials$, this.haveNetwork$])
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        filter(([credentials, haveNetwork]) => !!credentials && haveNetwork)
      )
      .subscribe(() => {
        this.connect();
      });

    combineLatest([this.tokens$, this.haveNetwork$])
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        filter(([tokens, haveNetwork]) => !!tokens && haveNetwork)
      )
      .subscribe(() => {
        this.isReady$.next(!!this.tokens && this.haveNetwork);
      });
  }
}
