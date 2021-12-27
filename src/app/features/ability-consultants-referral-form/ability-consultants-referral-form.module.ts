import { NgModule } from '@angular/core';
import { RestApiService } from '../../shared/grid/services/rest-api.service';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { FundsManagementComponent } from './components/funds-management/funds-management.component';
import { IndexComponent } from './components/index/index.component';
import { PipelineComponent } from './components/pipeline/pipeline.component';
import { RoleComponent } from './components/role/referral-form-role.component';
import { ViewComponent } from './components/view/view.component';
import { AbilityConsultantsReferralFormService } from './services/ability-consultants-referral-form.service';
import { FormComponent } from './components/form/form.component';
import { SharedModule } from '../../shared/shared.module';
import { GridModule } from '../../shared/grid/grid.module';
import { AbilityConsultantsReferralFormRoutingModule } from './ability-consultants-referral-form-routing.module';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@NgModule({
    declarations: [
        IndexComponent,
        ViewComponent,
        FormComponent,
        AutocompleteComponent,
        RoleComponent,
        FundsManagementComponent,
        PipelineComponent
    ],
    imports: [
        SharedModule,
        GridModule,
        AbilityConsultantsReferralFormRoutingModule
    ],
    exports: [
        AutocompleteComponent,
        RoleComponent,
        FundsManagementComponent,
        PipelineComponent
    ],
    providers: [
        {provide: RestApiService, useClass: AbilityConsultantsReferralFormService},
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] },
    ]
})
export class AbilityConsultantsReferralFormModule { }
