import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../core/guards/auth.guard';
import { Role, RoleManager } from '../../core/models/role.model';
import { FormComponent } from './components/form/form.component';
import { PasswordComponent } from './components/password/password.component';
import { PreferencesComponent } from './components/preferences/preferences.component';
import { ProfileComponent } from './components/profile/profile.component';
import { IndexComponent } from './components/index/index.component';
import { RoleComponent } from './components/role/role.component';
import { ViewComponent } from './components/view/view.component';

const routes: Routes = [
    {
        path: ':id/role',
        component: RoleComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'Change user role',
            roles: RoleManager.only(Role.Admin)
        }
    },
    {
        path: 'list',
        component: IndexComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'User list',
            roles: RoleManager.only(Role.Admin)
        }
    },
  {
    path: 'create',
    component: FormComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Create new user',
      roles: RoleManager.only(Role.Admin)
    }
  },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'User profile',
            roles: RoleManager.allExcept(Role.Guest)
        }
    },
    {
        path: 'preferences',
        component: PreferencesComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'User preferences',
            roles: RoleManager.allExcept(Role.Guest)
        }
    },
    {
        path: 'password',
        component: PasswordComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'Change password',
            roles: RoleManager.allExcept(Role.Guest)
        }
    },
    {
        path: ':id',
        component: ViewComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'User details',
            roles: RoleManager.only(Role.Admin)
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {
}
