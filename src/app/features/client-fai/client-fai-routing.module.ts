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
            title: 'Client FAI list',
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
            title: 'Create new Client FAI',
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
            title: 'Edit Client FAI',
            roles: RoleManager.allExcept(Role.Guest)
        }
    },
    {
        path: 'view/:id',
        component: ViewComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'Client FAI',
            roles: RoleManager.allExcept(Role.Guest)
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientFaiRoutingModule {
}
