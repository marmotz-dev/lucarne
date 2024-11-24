import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, FolderPageRoutingModule, NgOptimizedImage],
  declarations: [FolderPage],
})
export class FolderPageModule {}
