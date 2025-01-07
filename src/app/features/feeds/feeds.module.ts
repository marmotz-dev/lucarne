import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { CenteredUiComponent } from '@app/components/ui/center-message/centered.ui-component';
import { FeedPostComponent } from '@app/features/feeds/components/feed-post/feed-post.component';
import { FeedComponent } from '@app/features/feeds/components/feed/feed.component';
import { PostActionComponent } from '@app/features/feeds/components/post-action/post-action.component';
import { PostActionsComponent } from '@app/features/feeds/components/post-actions/post-actions.component';
import { PostAvatarComponent } from '@app/features/feeds/components/post-avatar/post-avatar.component';
import { PostEmbedImagesComponent } from '@app/features/feeds/components/post-embed-images/post-embed-images.component';
import { PostEmbedRecordComponent } from '@app/features/feeds/components/post-embed-record/post-embed-record.component';
import { PostEmbedVideoComponent } from '@app/features/feeds/components/post-embed-video/post-embed-video.component';
import { PostEmbedComponent } from '@app/features/feeds/components/post-embed/post-embed.component';
import { PostHeaderComponent } from '@app/features/feeds/components/post-header/post-header.component';
import { PostTextComponent } from '@app/features/feeds/components/post-text/post-text.component';
import { PostComponent } from '@app/features/feeds/components/post/post.component';
import { FeedsLayout } from '@app/features/feeds/layouts/feeds/feeds.layout';
import { FeedVirtualScrollDirective } from '@app/features/feeds/lib/virtual-scroll/feed.virtual-scroll.directive';
import { PostPage } from '@app/features/feeds/pages/post/post.page';
import { TimelinePage } from '@app/features/feeds/pages/timeline/timeline.page';
import { TimeAgoPipe } from '@app/lib/dates/time-ago.pipe';
import { ClsPipe } from '@app/lib/utils/cls.pipe';
import { IonicModule } from '@ionic/angular';
import { TranslatePipe } from '@ngx-translate/core';
import { Button } from 'primeng/button';
import { FeedsRoutingModule } from './feeds-routing.module';

@NgModule({
  declarations: [
    TimelinePage,
    PostPage,
    FeedsLayout,
    FeedComponent,
    FeedPostComponent,
    PostComponent,
    PostEmbedComponent,
    PostEmbedVideoComponent,
    PostActionsComponent,
    PostActionComponent,
    PostTextComponent,
    PostEmbedImagesComponent,
    PostEmbedRecordComponent,
    PostAvatarComponent,
    PostHeaderComponent,
    FeedVirtualScrollDirective,
  ],
  imports: [
    CommonModule,
    FeedsRoutingModule,
    IonicModule,
    NgOptimizedImage,
    TimeAgoPipe,
    ClsPipe,
    CenteredUiComponent,
    Button,
    TranslatePipe,
  ],
})
export class FeedsModule {}
