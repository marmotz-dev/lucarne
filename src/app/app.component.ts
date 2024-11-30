import { Component } from '@angular/core';
import { AuthenticatedApiService } from '@shared/api/authenticated-api.service';
import { AuthService } from '@shared/atproto/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private readonly authService: AuthService,
    private readonly authenticatedApiService: AuthenticatedApiService
  ) {
    this.authService.tokens$.subscribe((tokens) => {
      if (tokens) {
        this.authenticatedApiService.setTokens(tokens);
      }
    });
  }
}
