import { Injectable } from '@angular/core';
import { Api, RequestOptions } from './api';

@Injectable({
  providedIn: 'root',
})
export class AnonymousApiService {
  defaultHeaders: Record<string, string> = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  };

  get<T>(url: string, options: RequestOptions) {
    return Api.get<T>(this.getUrl(url), this.injectDefaultHeaders(options));
  }

  getUrl(url: string): string {
    return 'https://bsky.social/xrpc' + (url.startsWith('/') ? '' : '/') + url;
  }

  post<T>(url: string, options: RequestOptions) {
    return Api.post<T>(this.getUrl(url), this.injectDefaultHeaders(options));
  }

  private injectDefaultHeaders(options: RequestOptions): RequestOptions {
    if (!options.headers) {
      options.headers = {};
    }

    Object.assign(options.headers, this.defaultHeaders);

    return options;
  }
}
