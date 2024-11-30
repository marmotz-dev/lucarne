import { Injectable } from '@angular/core';
import { SecureStoragePlugin } from 'capacitor-secure-storage-plugin';

@Injectable({
  providedIn: 'root',
})
export class AppSettingsService {
  public async get<T>(key: string, defaultValue?: T): Promise<T> {
    try {
      const { value } = await SecureStoragePlugin.get({ key });

      return (value ? JSON.parse(decodeURIComponent(value)) : defaultValue) as T;
    } catch (e) {
      return defaultValue as T;
    }
  }

  public async set<T>(key: string, value: T) {
    try {
      const valueStr = encodeURIComponent(JSON.stringify(value));

      return await SecureStoragePlugin.set({
        key,
        value: valueStr,
      });
    } catch (e) {
      console.log(e);

      return Promise.resolve({ value: false });
    }
  }
}
