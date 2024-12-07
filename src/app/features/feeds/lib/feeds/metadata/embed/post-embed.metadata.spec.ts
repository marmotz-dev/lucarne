import { PostEmbedMetadata } from '@app/features/feeds/lib/feeds/metadata/embed/post-embed.metadata';
import { embedImagesMock } from '@app/features/feeds/lib/feeds/metadata/tests/mock/embed-images.mock';

describe('PostEmbedMeta', () => {
  it('should be created', () => {
    const viewPostMeta = new PostEmbedMetadata(embedImagesMock);
    expect(viewPostMeta).toBeTruthy();
  });
});
