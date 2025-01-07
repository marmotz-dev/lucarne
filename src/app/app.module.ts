import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouteReuseStrategy } from '@angular/router';
import { BootComponent } from '@app/pages/boot/boot.component';
import { Device } from '@capacitor/device';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { providePrimeNG } from 'primeng/config';
import translationsEN from '../assets/i18n/en.json';
import translationsFR from '../assets/i18n/fr.json';
import { PrimeNgLucarnePreset } from '../theme/prime-ng-lucarne-preset';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, BootComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
    }),
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy,
    },
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: PrimeNgLucarnePreset,
        options: {
          cssLayer: {
            name: 'primeng',
            order: 'tailwind-base, ionic, primeng, tailwind-utilities',
          },
        },
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private readonly translateService: TranslateService) {
    translateService.setTranslation('en', translationsEN);
    translateService.setTranslation('fr', translationsFR);

    this.loadDeviceLanguage();
  }

  private loadDeviceLanguage() {
    Device.getLanguageCode().then((languageCode) => {
      const language = languageCode.value === 'fr' ? 'fr' : 'en';
      this.translateService.use(language);
    });
  }
}
