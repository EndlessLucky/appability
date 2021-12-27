import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { AuthenticationService } from '../services/authentication.service';
import { NotificationService } from '../services/notification.service';
import { RestApiService } from '../../shared/grid/services/rest-api.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  apiUrl = environment.apiUrl;

  /**
   * What to do on 401 responses?
   * Logout and redirect to login page on any 401 response from any of the AJAX calls?
   * or just display the error and let user choose another option?
   */
  logoutOnAny401 = false;

  /**
   * What to do on 403 responses?
   * Show the Unauthorized page only on show the page and display snackbar message
   */
  displayUnauthorizedReason = true;

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private notificationService: NotificationService,
              private restService: RestApiService
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401) {

        if (this.logoutOnAny401) {
          // auto logout if 401 response returned from api
          this.authenticationService.logout();

          this.router.navigate(['/login']);
          // or alternative:
          // if (!this.isOnRoute('/login')) {
          //   this.reloadPage();
          // }
        }
      } else if (err.status === 403) {
        if (this.displayUnauthorizedReason) {
          this.router.navigate(['/unauthorized']);
        }
      }

      this.displaySnackbarError(request.url ? request.url : '/', err);

      return throwError(err);
    }));
  }

  displaySnackbarError(requestUrl: any, err: any): void {
    // notify error to snackbar
    const urlParam = this.getApiPath(requestUrl);
    let error = this.getErrorMessageByUrl(this.getUrlWithoutParams(urlParam));
    if (!error) {
      error = err?.message || err?.error?.message || err?.statusText;
    }

    error = decodeURI(error);
    this.notificationService?.warn(error);
  }

  reloadPage(): void {
    // @todo Do it different way as this is deprecated
    location.reload();
  }

  /**
   * Check if the current route is the one
   *
   * @param string name Route name to compare with
   */
  isOnRoute(name: string): boolean {
    return name === this.getUrlWithoutParams();
  }

  /**
   * Removes protocol and domain from the url
   * e.g http://example.com/login?m=p -> /login?m=p
   *
   * @param url URL to remove the prefix from
   * @param toRemove Optional string to remove. If empty - apiUrl is used
   */
  getApiPath(url: any, toRemove?: any): any {
    if (!toRemove) {
      toRemove = this.apiUrl;
    }
    return url.replace(new RegExp('^' + toRemove), '');
  }

  /**
   * @todo Save this as reusable pipe
   * Returns local url without query params
   * e.g /login?return=re => /login
   * @param url URL to clean up (just the part after the domain name)
   */
  getUrlWithoutParams(url?: any): any {
    if (!url) {
      url = this.router.url;
    }

    const urlTree = this.router?.parseUrl(url);
    return '/' + urlTree?.root.children.primary.segments.map(it => it.path).join('/');
  }

  getErrorMessageByUrl(url: any): any {
    switch (url) {
      case '/oauth':
        return 'Invalid credentials';
      default:
        return null;
    }
  }
}
