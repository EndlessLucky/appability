import { NgModule } from '@angular/core';
import { NgxFilesizeModule } from 'ngx-filesize';
import { RestApiService } from '../../shared/grid/services/rest-api.service';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { FormComponent } from './components/form/form.component';
import { IndexComponent } from './components/index/index.component';
import { SharedModule } from '../../shared/shared.module';
import { GridModule } from '../../shared/grid/grid.module';
import { UploadComponent } from './components/upload/upload.component';
import { ViewComponent } from './components/view/view.component';
import { PaymentOutcomeRoutingModule } from './payment-outcome-routing.module';
import { PaymentOutcomeService } from './services/payment-outcome.service';

@NgModule({
    declarations: [
        IndexComponent,
        FormComponent,
        ViewComponent,
        AutocompleteComponent,
        UploadComponent
    ],
    imports: [
        SharedModule,
        GridModule,
        PaymentOutcomeRoutingModule,
        NgxFilesizeModule
    ],
    exports: [
        AutocompleteComponent
    ],
    providers: [
        {provide: RestApiService, useClass: PaymentOutcomeService},
    ]
})
export class PaymentOutcomeModule { }
