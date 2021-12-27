import { NgModule } from '@angular/core';
import { RestApiService } from '../../shared/grid/services/rest-api.service';
import { AbilityConsultantsReferralFormModule } from '../ability-consultants-referral-form/ability-consultants-referral-form.module';
import { AbilityConsultantsReferralFormService } from '../ability-consultants-referral-form/services/ability-consultants-referral-form.service';
import { SupportItemService } from '../support-item/services/support-item.service';
import { SupportItemModule } from '../support-item/support-item.module';
// import { ServiceBookingModule } from '../service-booking/service-booking.module';
// import { ServiceBookingService } from '../service-booking/services/service-booking.service';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { FormComponent } from './components/form/form.component';
import { IndexComponent } from './components/index/index.component';
import { SharedModule } from '../../shared/shared.module';
import { GridModule } from '../../shared/grid/grid.module';
import { MultiAutocompleteComponent } from './components/multi-autocomplete/multi-autocomplete.component';
import { ViewComponent } from './components/view/view.component';
import { ServiceBookingDetailsRoutingModule } from './service-booking-details-routing.module';
import { ServiceBookingDetailsService } from './services/service-booking-details.service';

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
        ServiceBookingDetailsRoutingModule,
        SupportItemModule,
        AbilityConsultantsReferralFormModule
    // ServiceBookingModule
    ],
    exports: [
        AutocompleteComponent,
        MultiAutocompleteComponent
    ],
    providers: [
        {provide: RestApiService, useClass: ServiceBookingDetailsService},
        SupportItemService,
        AbilityConsultantsReferralFormService
    // ServiceBookingService
    ]
})
export class ServiceBookingDetailsModule { }
