import { ApiResponseError } from '@shared/api/ApiResponse.error';
import { ApiResponse } from '@shared/api/ApiResponse.type';

export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

export type RequestOptions = {
  data?: any;
  headers?: Record<string, string>;
};

export class Api {
  static async get<T>(url: string, options: RequestOptions) {
    return this.request<T>('GET', url, options);
  }

  static async post<T>(url: string, options: RequestOptions) {
    return this.request<T>('POST', url, options);
  }

  static async request<T>(method: Method, url: string, options: RequestOptions) {
    // return CapacitorHttp.request({
    //   method,
    //   url,
    //   data: options.data,
    //   headers: options.headers,
    // });

    if (method === 'GET' && options.data) {
      const query = Object.keys(options.data)
        .map((key) => `${key}=${encodeURIComponent(options.data[key])}`)
        .join('&');

      if (url.includes('?')) {
        url += `&${query}`;
      } else {
        url += `?${query}`;
      }

      delete options.data;
    }

    return fetch(url, {
      method,
      headers: options.headers,
      body: JSON.stringify(options.data),
    })
      .then(async (response) => {
        const text = await response.text();
        let json: T | undefined;
        try {
          json = JSON.parse(text);
        } catch (e) {}

        return {
          status: response.status,
          statusText: response.statusText,
          json,
          text,
        } as ApiResponse<T>;
      })
      .then((response) => {
        if (response.status >= 300) {
          throw new ApiResponseError(response);
        }

        return response;
      });
  }
}
