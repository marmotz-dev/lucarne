import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedsLayout } from '@app/features/feeds/layouts/feeds/feeds.layout';
import { PostPage } from '@app/features/feeds/pages/post/post.page';
import { TimelinePage } from '@app/features/feeds/pages/timeline/timeline.page';

const routes: Routes = [
  {
    path: '',
    component: FeedsLayout,
    children: [
      {
        path: '',
        redirectTo: 'timeline',
        pathMatch: 'full',
      },
      {
        path: 'timeline',
        component: TimelinePage,
      },
      {
        path: 'post/:authorHandle/:postId',
        component: PostPage,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedsRoutingModule {}
