import { NgModule } from '@angular/core';
import { RestApiService } from '../../shared/grid/services/rest-api.service';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { FormComponent } from './components/form/form.component';
import { IndexComponent } from './components/index/index.component';
import { SharedModule } from '../../shared/shared.module';
import { GridModule } from '../../shared/grid/grid.module';
import { ViewComponent } from './components/view/view.component';
import { ContractorInvoiceRoutingModule } from './contractor-invoice-routing.module';
import { ContractorInvoiceService } from './services/contractor-invoice.service';

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
        ContractorInvoiceRoutingModule
    ],
    exports: [
        AutocompleteComponent
    ],
    providers: [
        {provide: RestApiService, useClass: ContractorInvoiceService},
    ]
})
export class ContractorInvoiceModule { }
