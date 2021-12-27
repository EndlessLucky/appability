import { NgModule } from '@angular/core';
import { CalculatedComponent } from './components/calculated/calculated.component';
import { IndexComponent } from './components/index/index.component';
import { SharedModule } from '../../shared/shared.module';
import { GridModule } from '../../shared/grid/grid.module';
import { ToolsCalculatedService } from './services/tools-calculated.service';
import { ToolsTableInfoService } from './services/tools-table-info.service';
import { ToolsTablesService } from './services/tools-tables.service';
import { ToolsTablesRoutingModule } from './tools-tables-routing.module';

@NgModule({
    declarations: [
        IndexComponent,
        CalculatedComponent
    // AutocompleteComponent
    ],
    imports: [
        SharedModule,
        GridModule,
        ToolsTablesRoutingModule
    ],
    exports: [
    // AutocompleteComponent
    ],
    providers: [
        ToolsTablesService,
        ToolsTableInfoService,
        ToolsCalculatedService
    ]
})
export class ToolsTablesModule { }
