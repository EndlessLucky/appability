import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../core/guards/auth.guard';
import { FormStateGuard } from '../../core/guards/form-state.guard';
import { Role, RoleManager } from '../../core/models/role.model';
// import { FormStateResolve } from '../../core/resolvers/form-state.resolve';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  {
    path: 'feature-request',
    component: FormComponent,
    canActivate: [AuthGuard],
    // resolve: [FormStateResolve],
    canDeactivate: [FormStateGuard],
    data: {
        title: 'Report new issue',
        roles: RoleManager.allExcept(Role.Guest)
    },
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRequestRoutingModule { }


