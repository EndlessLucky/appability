import { NgModule } from '@angular/core';
import { RestApiService } from '../../shared/grid/services/rest-api.service';
import { AbilityConsultantsReferralFormModule } from '../ability-consultants-referral-form/ability-consultants-referral-form.module';
// tslint:disable-next-line:max-line-length
import { AbilityConsultantsReferralFormService } from '../ability-consultants-referral-form/services/ability-consultants-referral-form.service';
import { ClientPersonModule } from '../client-person/client-person.module';
import { ClientPersonService } from '../client-person/services/client-person.service';
import { ClientStageModule } from '../client-stage/client-stage.module';
import { ClientStageService } from '../client-stage/services/client-stage.service';
import { OrganisationModule } from '../organisation/organisation.module';
import { OrganisationService } from '../organisation/services/organisation.service';
import { PersonModule } from '../person/person.module';
import { PersonService } from '../person/services/person.service';
import { RegionModule } from '../region/region.module';
import { RegionService } from '../region/services/region.service';
import { ServiceBookingModule } from '../service-booking/service-booking.module';
import { ServiceBookingService } from '../service-booking/services/service-booking.service';
import { ServiceRequestTypeModule } from '../service-request-type/service-request-type.module';
import { ServiceRequestTypeService } from '../service-request-type/services/service-request-type.service';
import { UserService } from '../user/services/user.service';
import { ClientRoutingModule } from './client-routing.module';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { FormComponent } from './components/form/form.component';
import { IndexComponent } from './components/index/index.component';
import { StepperOverviewExample } from './components/stepper/stepper.component';
import { ViewComponent } from './components/view/view.component';
import { ClientService } from './services/client.service';
import { SharedModule } from '../../shared/shared.module';
import { GridModule } from '../../shared/grid/grid.module';

@NgModule({
    declarations: [
        IndexComponent,
        ViewComponent,
        FormComponent,
        AutocompleteComponent,
        StepperOverviewExample
    ],
    imports: [
        SharedModule,
        GridModule,
        ClientRoutingModule,
        AbilityConsultantsReferralFormModule,
        ServiceRequestTypeModule,
        PersonModule,
        ClientStageModule,
        OrganisationModule,
        ServiceBookingModule,
        RegionModule,
        ClientPersonModule
    ],
    exports: [
        AutocompleteComponent
    ],
    providers: [
        {provide: RestApiService, useClass: ClientService},
        {provide: ClientService, useClass: ClientService},
        UserService,
        ServiceRequestTypeService,
        AbilityConsultantsReferralFormService,
        PersonService,
        ClientStageService,
        OrganisationService,
        ServiceBookingService,
        RegionService,
        ClientPersonService
    ],
})
export class ClientModule { }
