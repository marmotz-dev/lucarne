import { TestBed } from '@angular/core/testing';
import { AppSettingsService } from '@app/lib/storage/app-settings.service';
import { FeedViewPost } from '@atproto/api/dist/client/types/app/bsky/feed/defs';
import { FeedsService } from './feeds.service';

describe('FeedsService', () => {
  let service: FeedsService;
  let appSettingsServiceMock: jest.Mocked<AppSettingsService>;

  const credentials = { identifier: 'user', password: 'pass' };

  beforeEach(() => {
    appSettingsServiceMock = {
      get: jest.fn().mockResolvedValue(credentials),
    } as unknown as jest.Mocked<AppSettingsService>;

    TestBed.configureTestingModule({
      providers: [
        FeedsService,
        {
          provide: AppSettingsService,
          useValue: appSettingsServiceMock,
        },
      ],
    });

    service = TestBed.inject(FeedsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should initialize credentials and network status', (doneFn) => {
  //   service.isReady$.pipe(filter((isReady) => isReady)).subscribe(() => {
  //     expect(service['credentials']).toEqual(credentials);
  //     expect(service['haveNetwork']).toBeTrue();
  //
  //     doneFn();
  //   });
  // });
  //
  // it('should connect when network is available and credentials are set', async () => {
  //   service['credentials$'].next(credentials);
  //   service['haveNetwork$'].next(true);
  //   fetchMock.and.returnValue(
  //     Promise.resolve({
  //       json: () => Promise.resolve({ accessJwt: 'accessToken', refreshJwt: 'refreshToken' }),
  //     } as Response)
  //   );
  //
  //   await service.connect();
  //
  //   expect(service['tokens']).toEqual({ accessToken: 'accessToken', refreshToken: 'refreshToken' });
  // });
  //
  // it('should not connect when network is unavailable', () => {
  //   service['credentials$'].next(credentials);
  //   service['haveNetwork$'].next(false);
  //
  //   service.connect();
  //
  //   expect(window.fetch).not.toHaveBeenCalled();
  // });
  //
  // it('should not connect when credentials are not set', () => {
  //   service['credentials$'].next(undefined);
  //   service['haveNetwork$'].next(true);
  //
  //   service.connect();
  //
  //   expect(window.fetch).not.toHaveBeenCalled();
  // });
  //
  // it('should get timeline with valid tokens', async () => {
  //   service['tokens$'].next({ accessToken: 'accessToken', refreshToken: 'refreshToken' });
  //
  //   const result = await service.getTimeline();
  //
  //   expect(result).toEqual(generateFeedItems([1]));
  // });
  //
  // it('should get timeline with current posts (not duplications)', async () => {
  //   service['tokens$'].next({ accessToken: 'accessToken', refreshToken: 'refreshToken' });
  //
  //   const result = await service.getTimeline(generateFeedItems([2]));
  //
  //   expect(result).toEqual(generateFeedItems([1, 2]));
  // });
  //
  // it('should get timeline with current posts (with simple duplications)', async () => {
  //   service['tokens$'].next({ accessToken: 'accessToken', refreshToken: 'refreshToken' });
  //   fetchMock.and.returnValue(
  //     Promise.resolve({
  //       json: () => Promise.resolve({ feed: generateFeedItems([1, 2]) }),
  //     } as Response)
  //   );
  //
  //   const result = await service.getTimeline(generateFeedItems([2, 3]));
  //
  //   expect(result).toEqual(generateFeedItems([1, 2, 3]));
  // });
  //
  // it('should get timeline with current posts (with complex duplications)', async () => {
  //   service['tokens$'].next({ accessToken: 'accessToken', refreshToken: 'refreshToken' });
  //   fetchMock.and.returnValue(
  //     Promise.resolve({
  //       json: () => Promise.resolve({ feed: generateFeedItems([1, 2, 4]) }),
  //     } as Response)
  //   );
  //
  //   const result = await service.getTimeline(generateFeedItems([2, 3, 4, 5]));
  //
  //   expect(result).toEqual(generateFeedItems([1, 2, 4, 5]));
  // });
  //
  // it('should get timeline with current posts (with same data)', async () => {
  //   service['tokens$'].next({ accessToken: 'accessToken', refreshToken: 'refreshToken' });
  //   fetchMock.and.returnValue(
  //     Promise.resolve({
  //       json: () => Promise.resolve({ feed: generateFeedItems([1, 2, 3]) }),
  //     } as Response)
  //   );
  //
  //   const result = await service.getTimeline(generateFeedItems([1, 2, 3]));
  //
  //   expect(result).toEqual(generateFeedItems([1, 2, 3]));
  // });
  //
  // it('should handle empty timeline response', async () => {
  //   service['tokens$'].next({ accessToken: 'accessToken', refreshToken: 'refreshToken' });
  //   fetchMock.and.returnValue(
  //     Promise.resolve({
  //       json: () => Promise.resolve({ feed: [] }),
  //     } as Response)
  //   );
  //
  //   const result = await service.getTimeline();
  //
  //   expect(result).toEqual([]);
  // });
});

function generateFeedItems(ids: any[]): FeedViewPost[] {
  return ids.map((id) => ({ post: { cid: String(id) } }) as FeedViewPost);
}
