import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../shared/shared.module';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CoreRoutingModule } from './core-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { fakeBackendProvider } from './interceptors/fake-backend.interceptor';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { LayoutSidebarComponent } from './layouts/layout-sidebar/layout-sidebar.component';
import { LayoutCenteredComponent } from './layouts/layout-centered/layout-centered.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { SettingsComponent } from './components/settings/settings.component';
import { FormStateResolve } from './resolvers/form-state.resolve';
import { FormStateService } from './services/form-state.service';
import { LoggerService } from './services/logger.service';
import { NotificationService } from './services/notification.service';
import { StorageService } from './services/storage.service';

@NgModule({
    declarations: [
        SnackbarComponent,
        PageNotFoundComponent,
        DashboardComponent,
        LayoutSidebarComponent,
        LayoutCenteredComponent,
        FooterComponent,
        NavComponent,
        LoginComponent,
        UnauthorizedComponent,
        SettingsComponent,
        ConfirmDialogComponent,
    ],
    imports: [
        CommonModule,
        CoreRoutingModule,
        MatSnackBarModule,
        MatCardModule,
        FormsModule,
        ReactiveFormsModule,

        HttpClientModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatBadgeModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        SharedModule,
        FlexLayoutModule
    ],
    exports: [
      LayoutModule,
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},

        // provider used to create fake backend
        fakeBackendProvider,
        NotificationService,
        FormStateResolve,
        FormStateService,
        LoggerService,
        StorageService
    ],
    entryComponents: [
        ConfirmDialogComponent
    ],
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
