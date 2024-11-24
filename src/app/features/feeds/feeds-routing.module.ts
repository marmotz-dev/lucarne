import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedsComponent } from '@features/feeds/components/feeds/feeds.component';
import { TimelineComponent } from '@features/feeds/components/timeline/timeline.component';

const routes: Routes = [
  {
    path: '',
    component: FeedsComponent,
    children: [
      {
        path: '',
        redirectTo: 'timeline',
        pathMatch: 'full',
      },
      {
        path: 'timeline',
        component: TimelineComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedsRoutingModule {}
