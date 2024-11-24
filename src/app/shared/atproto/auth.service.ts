import { Injectable } from '@angular/core';
import { AnonymousApiService } from '@shared/api/anonymous-api.service';
import { AuthenticatedApiService } from '@shared/api/authenticated-api.service';
import { Tokens } from '@shared/api/tokens.type';
import { BehaviorSubject } from 'rxjs';
import { AppSettingsService } from '../storage/app-settings.service';

type LoginResponse = {
  did: string;
  handle: string;

  accessJwt: string;
  refreshJwt: string;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public readonly isAuthenticated$ = new BehaviorSubject<boolean>(false);
  public readonly did$ = new BehaviorSubject<string | undefined>(undefined);
  public readonly tokens$ = new BehaviorSubject<Tokens | undefined>(undefined);

  constructor(
    private readonly appSettings: AppSettingsService,
    private readonly anonymousApiService: AnonymousApiService,
    private readonly authenticatedApiService: AuthenticatedApiService
  ) {}

  public get did() {
    return this.did$.getValue();
  }

  public get isAuthenticated() {
    return this.isAuthenticated$.getValue();
  }

  private get tokens() {
    return this.tokens$.getValue();
  }

  async login(identifier: string, password: string) {
    const response = await this.anonymousApiService.post<LoginResponse>('com.atproto.server.createSession', {
      data: {
        identifier,
        password,
      },
    });

    await this.setTokens(
      {
        accessToken: response.json.accessJwt,
        refreshToken: response.json.refreshJwt,
      },
      false
    );

    this.did$.next(response.json.did);

    return response;
  }

  async refreshTokens() {
    const refreshToken = this.tokens?.refreshToken;

    if (!refreshToken) {
      return;
    }

    const response = await this.anonymousApiService.post<LoginResponse>('com.atproto.server.refreshSession', {
      headers: {
        Authorization: `Bearer ${this.tokens.refreshToken}`,
      },
    });

    return this.setTokens(
      {
        accessToken: response.json.accessJwt,
        refreshToken: response.json.refreshJwt,
      },
      false
    );
  }

  async setTokens(tokens: Tokens, refreshTokens = true) {
    this.tokens$.next(tokens);

    if (refreshTokens) {
      await this.refreshTokens();
    } else {
      this.isAuthenticated$.next(true);
      this.authenticatedApiService.setTokens(tokens);
    }
  }
}
