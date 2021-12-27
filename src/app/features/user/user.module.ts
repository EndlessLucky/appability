import { NgModule } from '@angular/core';
import { RestApiService } from '../../shared/grid/services/rest-api.service';
import { FormComponent } from './components/form/form.component';
import { IndexComponent } from './components/index/index.component';
import { SharedModule } from '../../shared/shared.module';
import { GridModule } from '../../shared/grid/grid.module';
import { PreferencesComponent } from './components/preferences/preferences.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ThemeMenuComponent } from './components/theme-menu/theme-menu.component';
import { StyleManagerService } from './services/style-manager.service';
import { ThemeService } from './services/theme.service';
import { UserService } from './services/user.service';
import { UserRoutingModule } from './user-routing.module';
import { PasswordComponent } from './components/password/password.component';
import { ViewComponent } from './components/view/view.component';
import { RoleComponent } from './components/role/role.component';

@NgModule({
    declarations: [
        IndexComponent,
        FormComponent,
        ProfileComponent,
        PasswordComponent,
        ViewComponent,
        RoleComponent,
        PreferencesComponent,
        ThemeMenuComponent
    ],
    imports: [
        SharedModule,
        GridModule,
        UserRoutingModule
    ],
    exports: [
    ],
    providers: [
        {provide: RestApiService, useClass: UserService},
        ThemeService,
        StyleManagerService
    ],
    entryComponents: [
        FormComponent
    ]
})
export class UserModule { }
