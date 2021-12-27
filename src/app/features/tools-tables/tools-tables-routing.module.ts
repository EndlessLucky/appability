import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../core/guards/auth.guard';
import { Role, RoleManager } from '../../core/models/role.model';
import { CalculatedComponent } from './components/calculated/calculated.component';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
    {
        path: 'list',
        component: IndexComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'List of tables',
            roles: RoleManager.allExcept(Role.Guest)
        }
    },
    {
        path: 'calculated',
        component: CalculatedComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'Add calculated fields',
            roles: RoleManager.allExcept(Role.Guest)
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ToolsTablesRoutingModule {
}
