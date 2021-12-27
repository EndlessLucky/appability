import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../../environments/environment';
import { DataViewComponent } from '../../../../shared/grid/components/data-view/data-view.component';
import { RestApiService } from '../../../../shared/grid/services/rest-api.service';

@Component({
    selector: 'app-client-view',
    templateUrl: './view.component.html',
    styleUrls: ['../../../../shared/grid/components/data-view/data-view.component.scss']
})
export class ViewComponent extends DataViewComponent implements OnInit {
    // title = 'Your custom here';
    apiName = 'client';

    displayedFields = [
        'id',                // for column: "id"
        'lastmodified',                // for column: "LastModified"
        'modifiedby',                // for column: "ModifiedBy"
        'serviceRequestType',                // for column: "Service Request Type"
        'referralForm',                // for column: "Referral Form"
        'keyConsultant',                // for column: "Key Consultant"
        'keyConsultant2',                // for column: "Key Consultant"
        'client',                // for column: "Client"
        'fundsManagement',                // for column: "Funds Management"
        'pipeline',                // for column: "Pipeline"
        'clientGoals',                // for column: "Client Goals"
        'comments',                // for column: "Comments"
        'organisation',                // for column: "Organisation"
        'projectName',                // for column: "Project Name"
        'serviceAgreementPrint',                // for column: "Service Agreement Print"
        'planManagementOrganisation',                // for column: "Plan Management Organisation"
        'currentStatus',                // for column: "Current Status"
        'clientIsAbleToLegallyConsentToService',                // for column: "Client is able to legally consent to service"
        'statusReportPrint',                // for column: "Status Report Print"
        'serviceAgreementSignedAndSaved',                // for column: "Service Agreement Signed and Saved"
        'region',                // for column: "Region"
        'repeatReferral',                // for column: "Repeat Referral"
        'referralDate',                // for column: "Referral Date"
        'prodaChecked',                // for column: "proda_checked"
        'planManagedFundsConfirmed',                // for column: "plan_managed_funds_confirmed"
        'clientFileUrl',                // for column: "client_file_url"
        'serviceLastConfirmed',                // for column: "service_last_confirmed"
        'unscheduledActiveHours',
        'totalActiveHours',
        'clientStage',
        'remainingHoursToWork',
        'sREndDate',
        'revisedEndDate',
        'has_15_054',
        'safe_home_visit_policy',
        'endDate',
        'address',
        'functionalAssessmentInterviewFormCompleted'
    ];

    htmlLink = environment.apiUrl + 'html/client?id=';
    htmlLinkStatusReport = environment.apiUrl + 'html/client-status-report?id=';

    // @todo
    setSignedLink = '';

    /// ///////

    sendPdf(client) {
        return this.dataService.sendPdf(client.id);
    }

    sendStatusReport(client) {
        return this.dataService.sendStatusReport(client.id);
    }

    setSigned(client) {
        return this.dataService.setSigned(client.id);
    }

}

