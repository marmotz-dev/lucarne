import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { providePrimeNG } from 'primeng/config';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootComponent } from './components/boot/boot.component';
import { PrimeNgLucarnePreset } from './prime-ng-lucarne-preset';

@NgModule({
  declarations: [AppComponent, BootComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy,
    },
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: PrimeNgLucarnePreset,
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
