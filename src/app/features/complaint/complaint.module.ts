import { NgModule } from '@angular/core';
import { RestApiService } from '../../shared/grid/services/rest-api.service';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { FormComponent } from './components/form/form.component';
import { IndexComponent } from './components/index/index.component';
import { SharedModule } from '../../shared/shared.module';
import { GridModule } from '../../shared/grid/grid.module';
import { ViewComponent } from './components/view/view.component';
import { ComplaintRoutingModule } from './complaint-routing.module';
import { ComplaintService } from './services/complaint.service';

@NgModule({
    declarations: [
        IndexComponent,
        FormComponent,
        ViewComponent,
        AutocompleteComponent
    ],
    imports: [
        SharedModule,
        GridModule,
        ComplaintRoutingModule
    ],
    exports: [
        AutocompleteComponent
    ],
    providers: [
        {provide: RestApiService, useClass: ComplaintService},
    ]
})
export class ComplaintModule { }
