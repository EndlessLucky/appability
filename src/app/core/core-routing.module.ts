import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingsComponent } from './components/settings/settings.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { AuthGuard } from './guards/auth.guard';
import { LayoutSidebarComponent } from './layouts/layout-sidebar/layout-sidebar.component';
import { LayoutCenteredComponent } from './layouts/layout-centered/layout-centered.component';
import { Role, RoleManager } from './models/role.model';

const routes: Routes = [
    {
        path: '',
        component: LayoutSidebarComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
                data: {
                    title: 'Dashboard',
                    roles: RoleManager.allExcept(Role.Guest)
                }
            },
            {
                path: 'settings',
                component: SettingsComponent,
                data: {
                    title: 'Dashboard',
                    roles: RoleManager.only(Role.Admin)
                }
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
        ]
    },
    {
        path: '',
        component: LayoutCenteredComponent,
        children: [
            { path: 'login',
                component: LoginComponent,
                data: {roles: [Role.ALL]}
            },
            {
                path: 'unauthorized',
                component: UnauthorizedComponent,
                data: {roles: [Role.ALL]}
            },
            {
                path: '**',
                component: PageNotFoundComponent,
                data: {roles: [Role.ALL]}
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule {

}

