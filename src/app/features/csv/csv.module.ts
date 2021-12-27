import { NgModule } from '@angular/core';
import { NgxFilesizeModule } from 'ngx-filesize';
import { RestApiService } from '../../shared/grid/services/rest-api.service';
import { FormComponent } from './components/form/form.component';
import { SharedModule } from '../../shared/shared.module';
import { GridModule } from '../../shared/grid/grid.module';
import { IndexComponent } from './components/index/index.component';
import { ViewComponent } from './components/view/view.component';
import { CSVRoutingModule } from './csv-routing.module';
import { CSVService } from './services/csv.service';

@NgModule({
    declarations: [
        IndexComponent,
        FormComponent,
        ViewComponent,
    // AutocompleteComponent
    ],
    imports: [
        SharedModule,
        GridModule,
        CSVRoutingModule,
        NgxFilesizeModule
    ],
    exports: [
    // AutocompleteComponent
    ],
    providers: [
        {provide: RestApiService, useClass: CSVService},
    ]
})
export class CSVModule { }
