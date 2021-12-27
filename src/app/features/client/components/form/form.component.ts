import { Location } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from '../../../../core/services/authentication.service';
import { FormStateService } from '../../../../core/services/form-state.service';
import { StorageService } from '../../../../core/services/storage.service';
import { BaseFormComponent } from '../../../../shared/components/base-form/base-form.component';
import { RestApiService } from '../../../../shared/grid/services/rest-api.service';
import { UserService } from '../../../user/services/user.service';

@Component({
    selector: 'app-client-create',
    templateUrl: './form.component.html',
    styleUrls: ['./../../../../shared/grid/components/core-form/core-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent extends BaseFormComponent implements OnInit {
    fields = {
        id: ['', []],
        // id_auto: [id_auto],
        // ID: [ID],
        // lastModified: [''],
        // modifiedBy: [''],
        serviceRequestType: ['', Validators.required],
        referralForm: ['', Validators.required],
        keyConsultant: ['', Validators.required],
        // keyConsultant2: [''],
        client: ['', Validators.required],
        // client_id: [''],
        client_stage: ['', Validators.required],
        fundsManagement: ['', Validators.required],
        pipeline: ['', Validators.required],
        clientGoals: ['', Validators.required],
        comments: ['', Validators.required],
        organisation: ['', Validators.required],
        projectName: ['', Validators.required],
        serviceAgreementPrint: ['', Validators.required],
        planManagementOrganisation: ['', Validators.required],
        currentStatus: ['', Validators.required],
        clientisabletolegallyconsenttoservice: [''],
        statusReportPrint: ['', Validators.required],
        serviceAgreementSignedandSaved: [''],
        region: ['', Validators.required],
        repeatReferral: ['TRUE', Validators.required],
        referralDate: ['', Validators.required],
        proda_checked: [''],
        plan_managed_funds_confirmed: [''],
        client_file_url: ['', Validators.required],
        service_last_confirmed: ['', Validators.required],
        people: [''],
        service_bookings: [''],
    };

    //@todo Fix naming to camelCase, make this solution universal
    initial_funds : any;
    initial_region : any;

    ngOnInit() {
        super.ngOnInit();

        this.subscriptions.add(
            this.form.controls.referralForm.valueChanges.subscribe(
                value => {
                    // console.log(value);
                    // console.log('hehe',value['region']);
                    this.form.get('clientGoals').setValue(value['personsNdisGoals']);
                    this.form.get('planManagementOrganisation').setValue(value['planManagementAgency']);
                    this.initial_funds = value['fundsManagement'];
                    this.initial_region = value['region'];
                }
            )
        );
    }
}
