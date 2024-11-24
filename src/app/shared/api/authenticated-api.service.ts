import { Injectable } from '@angular/core';
import { AnonymousApiService } from './anonymous-api.service';
import { RequestOptions } from './api';
import { Tokens } from './tokens.type';

@Injectable({
  providedIn: 'root',
})
export class AuthenticatedApiService {
  tokens?: Tokens;

  constructor(private readonly anonymousApiService: AnonymousApiService) {}

  get<T>(url: string, options: RequestOptions) {
    const request = this.anonymousApiService.get<T>(url, this.injectBearerTokenHeader(options));

    request.catch(this.catchError.bind(this));

    return request;
  }

  post<T>(url: string, options: RequestOptions) {
    const request = this.anonymousApiService.post<T>(url, this.injectBearerTokenHeader(options));

    request.catch(this.catchError.bind(this));

    return request;
  }

  setTokens(tokens: Tokens) {
    this.tokens = tokens;
  }

  private catchError(error: any) {
    console.log(error);
  }

  private injectBearerTokenHeader(options: RequestOptions) {
    if (this.tokens) {
      if (!options.headers) {
        options.headers = {};
      }

      options.headers['Authorization'] = `Bearer ${this.tokens.accessToken}`;
    }

    return options;
  }
}
