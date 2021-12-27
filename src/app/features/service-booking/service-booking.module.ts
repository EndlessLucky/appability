import { NgModule } from '@angular/core';
import { RestApiService } from '../../shared/grid/services/rest-api.service';
import { ClientModule } from '../client/client.module';
import { ClientService } from '../client/services/client.service';
import { ServiceBookingDetailsModule } from '../service-booking-details/service-booking-details.module';
import { ServiceBookingDetailsService } from '../service-booking-details/services/service-booking-details.service';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { FormComponent } from './components/form/form.component';
import { IndexComponent } from './components/index/index.component';
import { SharedModule } from '../../shared/shared.module';
import { GridModule } from '../../shared/grid/grid.module';
import { MultiAutocompleteComponent } from './components/multi-autocomplete/multi-autocomplete.component';
import { ViewComponent } from './components/view/view.component';
import { ServiceBookingRoutingModule } from './service-booking-routing.module';
import { ServiceBookingService } from './services/service-booking.service';

@NgModule({
    declarations: [
        IndexComponent,
        FormComponent,
        ViewComponent,
        AutocompleteComponent,
        MultiAutocompleteComponent
    ],
    imports: [
        SharedModule,
        GridModule,
        ServiceBookingRoutingModule,
        ServiceBookingDetailsModule
    ],
    exports: [
        AutocompleteComponent,
        MultiAutocompleteComponent
    ],
    providers: [
        {provide: RestApiService, useClass: ServiceBookingService},
        ClientService,
        ServiceBookingDetailsService
    ]
})
export class ServiceBookingModule { }
