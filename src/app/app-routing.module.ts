import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authenticatedGuard } from '@app/lib/auth/authenticated.guard';
import { BootComponent } from '@app/pages/boot/boot.component';

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
  {
    canActivate: [authenticatedGuard],
    path: 'feeds',
    loadChildren: () => import('./features/feeds/feeds.module').then((m) => m.FeedsModule),
  },
  {
    path: '**',
    redirectTo: '/boot',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
