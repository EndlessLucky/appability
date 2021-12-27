import { NgModule } from '@angular/core';
import { RestApiService } from '../../shared/grid/services/rest-api.service';
import { MultiAutocompleteComponent } from './components/multi-autocomplete/multi-autocomplete.component';
import { ViewComponent } from './components/view/view.component';
import { DataRoutingModule } from './data-routing.module';
import { IndexComponent } from './components/index/index.component';
import { DataService } from './services/data.service';
import { FormComponent } from './components/form/form.component';
import { SharedModule } from '../../shared/shared.module';
import { GridModule } from '../../shared/grid/grid.module';

@NgModule({
    declarations: [
        IndexComponent,
        FormComponent,
        ViewComponent,
        MultiAutocompleteComponent
    ],
    imports: [
        SharedModule,
        GridModule,
        DataRoutingModule
    ],
    exports: [
    ],
    providers: [
        {provide: RestApiService, useClass: DataService},
    ]
})
export class DataModule { }
