import { NgModule } from '@angular/core';
import { FormStateService } from '../../core/services/form-state.service';
import { RestApiService } from '../../shared/grid/services/rest-api.service';
import { AbilityConsultantsReferralFormModule } from '../ability-consultants-referral-form/ability-consultants-referral-form.module';
// tslint:disable-next-line:max-line-length
import { AbilityConsultantsReferralFormService } from '../ability-consultants-referral-form/services/ability-consultants-referral-form.service';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { FormComponent } from './components/form/form.component';
import { IndexComponent } from './components/index/index.component';
import { SharedModule } from '../../shared/shared.module';
import { GridModule } from '../../shared/grid/grid.module';
import { MultiAutocompleteComponent } from './components/multi-autocomplete/multi-autocomplete.component';
import { ViewComponent } from './components/view/view.component';
import { PersonRoutingModule } from './person-routing.module';
import { PersonService } from './services/person.service';

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
        PersonRoutingModule,
        AbilityConsultantsReferralFormModule,
    ],
    exports: [
        AutocompleteComponent,
        MultiAutocompleteComponent
    ],
    providers: [
        {provide: RestApiService, useClass: PersonService},
        AbilityConsultantsReferralFormService,
        FormStateService
    ]
})
export class PersonModule { }
