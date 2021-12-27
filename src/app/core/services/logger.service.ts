import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AuthenticationService } from './authentication.service';

/**
 * Logs errors to the API
 * Note: this service is using HttpBackend, which is not triggering interceptors
 *
 * Use like normal with HttpClient. However,
 * Should use it carefully to separate which http request go throughout interceptor and which is not
 */

export interface ApiLogMessageInterface {
  message: string;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class LoggerService {

  protected logData: ApiLogMessageInterface = {
    message: null,
    url: null
  };

  apiEndpoint = 'tools/error';

  /**
   * Send all the errors to the API?
   * (and then log using file, email etc.)
   */
  public enabled = null;

  private httpClientBackend: HttpClient;

  constructor(handler: HttpBackend, protected locationStrategy: LocationStrategy, private authenticationService: AuthenticationService) {
    this.httpClientBackend = new HttpClient(handler);
    if (this.enabled === null) {
      this.enabled = !environment.debug;
    }
  }

  /**
   * Reqyest to the API to log the error
   */
  log(error, sendAuthToken = true): Observable<any> {
    if (!this.enabled) {
      return of();
    }
    if (typeof error === 'string') {
      this.logData.message = error;
    } else {
      this.logData.message = error.message ? error.message : error.toString();
    }

    const location = this.locationStrategy;
    this.logData.url = location instanceof PathLocationStrategy
      ? location.path() : null;

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    if (sendAuthToken) {
      const token = this.authenticationService.getToken();
      if (token) {
        headers = headers.append('Authorization', `Bearer ${token}`);
      }
    }

    return this.httpClientBackend.post(environment.apiUrl + this.apiEndpoint,
      this.logData, {headers}
    );
  }
}
