import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../core/guards/auth.guard';
import { FormStateGuard } from '../../core/guards/form-state.guard';
import { AccessPolicy } from '../../core/models/access-policy.enum';
import { Permission } from '../../core/models/permission.enum';
import { Role, RoleManager } from '../../core/models/role.model';
import { FormStateResolve } from '../../core/resolvers/form-state.resolve';
import { FormComponent } from './components/form/form.component';
import { IndexComponent } from './components/index/index.component';
import { StepperOverviewExample } from './components/stepper/stepper.component';
import { ViewComponent } from './components/view/view.component';

const routes: Routes = [
    {
        path: 'list',
        component: IndexComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'Client list',
            roles: RoleManager.allExcept(Role.Guest)
        }
    },
    {
        path: 'view/:id',
        component: ViewComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'Service Request',
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
            title: 'Create new Client',
            roles: RoleManager.allExcept(Role.Guest),
            access: [
                {resource: 'form.keyConsultant',
                    permissions: [Permission.create],
                    roles: RoleManager.only(Role.Admin),
                    default: AccessPolicy.deny
                }
            ]
        },
    },
    {
        path: 'update/:id',
        component: FormComponent,
        canActivate: [AuthGuard],
        resolve: [FormStateResolve],
        canDeactivate: [FormStateGuard],
        data: {
            title: 'Edit Client',
            roles: RoleManager.allExcept(Role.Guest)
        }
    },
    {
        path: 'steps',
        component: StepperOverviewExample,
        canActivate: [AuthGuard],
        resolve: [FormStateResolve],
        canDeactivate: [FormStateGuard],
        data: {
            title: 'Edit Client',
            roles: RoleManager.allExcept(Role.Guest)
        }
    },
    {
        path : '',
        canActivate: [AuthGuard],
        redirectTo: '/client/list', 
        pathMatch: 'full' ,
        data: {
            title: 'Client list',
            roles: RoleManager.allExcept(Role.Guest)
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientRoutingModule {
}
