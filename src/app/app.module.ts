import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';

import { ErrorHandler } from '@angular/core';
import { GlobalErrorHandler } from './core/errors/global-error-handler';
@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        AppRoutingModule,
        CoreModule,
        BrowserModule,
        BrowserAnimationsModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ],
    exports: [
        CoreModule,
    ],
    providers : [
        {provide: ErrorHandler, useClass: GlobalErrorHandler},
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
