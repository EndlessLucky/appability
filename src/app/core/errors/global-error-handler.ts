import { ErrorHandler, Injectable, OnDestroy } from '@angular/core';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LoggerService } from '../services/logger.service';


@Injectable()
export class GlobalErrorHandler implements ErrorHandler, OnDestroy {

  sendErrorsToApi = true;

  showErrorsInConsole = true;

  showLoggerApiErrorsInConsole = true;

  constructor(private loggerService: LoggerService) {
  }

  subscription: Subscription;

  handleError(error) {
    if (this.showErrorsInConsole) {
      console.error(error);
    }
    if (this.sendErrorsToApi) {
      this.subscription = this.loggerService.log(error).pipe(
          catchError(this.loggerError),
        ).subscribe(
        value => environment.debug ? console.log('NOTICE: Error successfully logged by the API') : null
        );
    }
  }

  loggerError(error) {
    if (environment.debug) {
      console.warn('WARNING: Unable to send the error to the API: ' + environment.apiUrl + 'tools/error'
        + ': Response code: ' + error.status);
    }

    if (this.showLoggerApiErrorsInConsole) {
      console.error(error);
    }

    return of();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
