import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../core/guards/auth.guard';
import { FormStateGuard } from '../../core/guards/form-state.guard';
import { Role, RoleManager } from '../../core/models/role.model';
import { FormStateResolve } from '../../core/resolvers/form-state.resolve';
import { FormComponent } from './components/form/form.component';
import { IndexComponent } from './components/index/index.component';
import { ViewComponent } from './components/view/view.component';

const routes: Routes = [
    {
        path: 'list',
        component: IndexComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'Service Request Type list',
            roles: RoleManager.allExcept(Role.Guest)
        }
    },
    {
        path: 'create',
        component: FormComponent,
        canActivate: [AuthGuard],
        resolve: [FormStateResolve],
        canDeactivate: [FormStateGuard],
        data: {
            title: 'Create new Service Request Type',
            roles: RoleManager.allExcept(Role.Guest)
        },
    },
    {
        path: 'update/:id',
        component: FormComponent,
        canActivate: [AuthGuard],
        resolve: [FormStateResolve],
        canDeactivate: [FormStateGuard],
        data: {
            title: 'Edit Service Request type',
            roles: RoleManager.allExcept(Role.Guest)
        }
    },
    {
        path: 'view/:id',
        component: ViewComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'Service Request type',
            roles: RoleManager.allExcept(Role.Guest)
        }
    },
    {
        path : '',
        canActivate : [AuthGuard],
        data: {
            title: 'Service Request Type list',
            roles: RoleManager.allExcept(Role.Guest)
        },
        redirectTo: '/service-request-type/list', pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ServiceRequestTypeRoutingModule {
}
