/**
 * Client Model
 * Generated from Doctrine entity: Client.php
 */
import {Deserializable} from '../../../core/models/deserializable';
import { PersonModel } from '../../person/models/person.model';
import { UniverseFormat } from '../../../shared/components/formats/universe-format';
import { Formatter } from '../components/index/formatter';


export class ClientModel extends Deserializable implements UniverseFormat {
    public id: string;
    // public lastModified: string;
    // public modifiedBy: string;
    public serviceRequestType: string;
    public referralForm: string;
    public keyConsultant: string;
    public keyConsultant2: PersonModel;
    public client: string;
    public fundsManagement: string;
    public pipeline: string;
    public clientGoals: string;
    public comments: string;
    public organisation: string;
    public projectName: string;
    public serviceAgreementPrint: string;
    public planManagementOrganisation: string;
    public currentStatus: string;
    public clientisabletolegallyconsenttoservice: boolean;
    public statusReportPrint: string;
    public serviceAgreementSignedandSaved: boolean;
    public region: string;
    public repeatReferral: string;
    public referralDate: string;
    public proda_checked: string;
    public plan_managed_funds_confirmed: string;
    public client_file_url: string;
    public service_last_confirmed: string;
    public unscheduledActiveHours : string;
    public totalActiveHours : string;
    public clientStage : string;
    public remainingHoursToWork : string;
    public sREndDate : string;
    public revisedEndDate : string;
    public has_15_054 : string;
    public safe_home_visit_policy : string;
    public endDate : string;
    public address : string;
    public functionalAssessmentInterviewFormCompleted : string;


    getRelations() {
        return {
            keyConsultant2: PersonModel
        };
    }

    getKeys() {
        return [
            'id',
            // 'lastModified',
            // 'modifiedBy',
            'serviceRequestType',
            'referralForm',
            'keyConsultant',
            'keyConsultant2',
            'client',
            'fundsManagement',
            'pipeline',
            'clientGoals',
            'comments',
            'organisation',
            'projectName',
            'serviceAgreementPrint',
            'planManagementOrganisation',
            'currentStatus',
            'clientisabletolegallyconsenttoservice',
            'statusReportPrint',
            'serviceAgreementSignedandSaved',
            'region',
            'repeatReferral',
            'referralDate',
            'proda_checked',
            'plan_managed_funds_confirmed',
            'client_file_url',
            'service_last_confirmed',
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
    }

    toString() {
        return this.id + '';
    }

    adapt() {
        return new Formatter(this).getFormatter();
    }

}
