import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeedsComponent } from '@features/feeds/components/feeds/feeds.component';
import { TimelineComponent } from '@features/feeds/components/timeline/timeline.component';
import { IonicModule } from '@ionic/angular';

import { FeedsRoutingModule } from './feeds-routing.module';

@NgModule({
  declarations: [FeedsComponent, TimelineComponent],
  imports: [CommonModule, FeedsRoutingModule, IonicModule],
})
export class FeedsModule {}
