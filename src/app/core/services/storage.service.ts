import { Injectable } from '@angular/core';

/**
 * Local storage abstraction
 */

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  setItem(key: string, value: any) {
      console.log('storing: ' + key);
      if (typeof value !== 'string') {
        localStorage.setItem(key, JSON.stringify(value));
      } else {
        localStorage.setItem(key, value);
      }
  }

  getItem(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

}
