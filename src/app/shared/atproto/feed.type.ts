export type Feed = {
  feed: FeedItem[];
  cursor: string;
};

export type FeedItem = {
  post: Post;
};

export type Post = {
  uri: string;
  cid: string;
  author: Author;
  record: Record;
  embed: Embed;
  replyCount: number;
  repostCount: number;
  likeCount: number;
  quoteCount: number;
  indexedAt: string;
  viewer: PostViewer;
  labels: any[];
};

export type Author = {
  did: string;
  handle: string;
  displayName: string;
  avatar: string;
  viewer: AuthorViewer;
  labels: any[];
  createdAt: string;
};

export type AuthorViewer = {
  muted: boolean;
  blockedBy: boolean;
  following?: string;
};

export type Record = {
  $type: string;
  createdAt: string;
  embed?: RecordEmbed;
  facets?: Facet[];
  langs: string[];
  text: string;
};

export type RecordEmbed = {
  $type: string;
  external?: ExternalContent;
  images?: ImageContent[];
  record?: RecordReference;
};

export type ExternalContent = {
  description: string;
  thumb?: ThumbContent;
  title: string;
  uri: string;
};

export type ThumbContent = {
  $type: string;
  ref: {
    $link: string;
  };
  mimeType: string;
  size: number;
};

export type ImageContent = {
  alt: string;
  aspectRatio: {
    height: number;
    width: number;
  };
  image: {
    $type: string;
    ref: {
      $link: string;
    };
    mimeType: string;
    size: number;
  };
};

export type RecordReference = {
  cid: string;
  uri: string;
};

export type Facet = {
  features: Feature[];
  index: {
    byteEnd: number;
    byteStart: number;
  };
};

export type Feature = {
  $type: string;
  uri: string;
};

export type Embed = {
  $type: string;
  external?: EmbedExternal;
  record?: EmbedRecord;
};

export type EmbedExternal = {
  uri: string;
  title: string;
  description: string;
  thumb: string;
};

export type EmbedRecord = {
  $type: string;
  record: {
    $type: string;
    uri: string;
    cid: string;
    author: Author;
    value: Record;
    labels: any[];
    likeCount: number;
    replyCount: number;
    repostCount: number;
    quoteCount: number;
    indexedAt: string;
    embeds?: EmbedContent[];
  };
};

export type EmbedContent = {
  $type: string;
  images: {
    thumb: string;
    fullsize: string;
    alt: string;
    aspectRatio: {
      height: number;
      width: number;
    };
  }[];
};

export type PostViewer = {
  threadMuted: boolean;
  embeddingDisabled: boolean;
};
