import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../core/guards/auth.guard';
import { Role, RoleManager } from '../../core/models/role.model';
import { IndexComponent } from './components/index/index.component';
import { ViewComponent } from './components/view/view.component';
import { FormComponent } from './components/form/form.component';
import { FormStateResolve } from '../../core/resolvers/form-state.resolve';
import { FormStateGuard } from '../../core/guards/form-state.guard';

const routes: Routes = [
    {
        path: 'list',
        component: IndexComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'Referral forms list',
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
            title: 'Create new Referral Form',
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
            title: 'Edit Referral forms list',
            roles: RoleManager.allExcept(Role.Guest)
        }
    },
    {
        path: 'view/:id',
        component: ViewComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'Ability Consultants Referral Form',
            roles: RoleManager.allExcept(Role.Guest)
        }
    },
    {
        path : '',
        canActivate : [AuthGuard],
        data: {
            title: 'Referral forms list',
            roles: RoleManager.allExcept(Role.Guest)
        },
        redirectTo: '/ability-consultants-referral-form/list', pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AbilityConsultantsReferralFormRoutingModule {
}
