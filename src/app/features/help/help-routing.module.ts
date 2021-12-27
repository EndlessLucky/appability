import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../core/guards/auth.guard';
import { Role, RoleManager } from '../../core/models/role.model';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
    {
        path: 'index',
        component: IndexComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'Help',
            roles: RoleManager.allExcept(Role.Guest)
        }
    }
];



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HelpRoutingModule {
}
