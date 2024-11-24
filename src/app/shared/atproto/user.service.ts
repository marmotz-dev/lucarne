import { DestroyRef, inject, Injectable } from '@angular/core';
import { AuthenticatedApiService } from '@shared/api/authenticated-api.service';
import { AuthService } from '@shared/atproto/auth.service';

type GetProfileResponse = {
  displayName: string;
  avatar: string;
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly destroyRef = inject(DestroyRef);

  constructor(
    private readonly authService: AuthService,
    private readonly authenticatedApiService: AuthenticatedApiService
  ) {}

  async getProfile() {
    return this.authenticatedApiService.get<GetProfileResponse>('app.bsky.actor.getProfile', {
      data: {
        actor: this.authService.did,
      },
    });
  }
}
