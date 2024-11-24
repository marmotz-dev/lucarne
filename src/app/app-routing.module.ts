import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BootComponent } from './components/boot/boot.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'boot',
    pathMatch: 'full',
  },
  {
    path: 'boot',
    component: BootComponent,
  },
  {
    path: 'account-add',
    loadChildren: () => import('./features/account-add/account-add.module').then((m) => m.AccountAddModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
