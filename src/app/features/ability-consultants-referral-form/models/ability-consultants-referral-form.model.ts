/**
 * Client Model
 * Generated from Doctrine entity: Client.php
 */
import {Deserializable} from '../../../core/models/deserializable';

export class AbilityConsultantsReferralFormModel extends Deserializable {
    public id: string;                // for column: "id"
    public emailAddress: string;                // for column: "email_address"
    public firstNameOfReferrer: string;                // for column: "first_name_of_referrer"
    public lastNameOfReferrer: string;                // for column: "last_name_of_referrer"
    public referrerRelationship: string;                // for column: "referrer_relationship"
    public referrerPhone: string;                // for column: "referrer_phone"
    public fundsManagement: string;                // for column: "funds_management"
    public planManagementAgency: string;                // for column: "plan_management_agency"
    public planManagementContact: string;                // for column: "plan_management_contact"
    public agreedToPrivacyPolicy: boolean;                // for column: "agreed_to_privacy_policy"
    public agreedToProvidePersonalInfo: boolean;                // for column: "agreed_to_provide_personal_info"
    public participantFirstName: string;                // for column: "participant_first_name"
    public participantLastName: string;                // for column: "Participant Last Name"
    public participantPreferredFirstName: string;                // for column: "participant_preferred_first_name"
    public gender: string;                // for column: "Gender"
    public dateOfBirth: string;                // for column: "Date of Birth"
    public diagnosis: string;                // for column: "diagnosis"
    public behaviourHistory: string;                // for column: "behaviour_history"
    public theParticipantHasAHistoryOfTheFollowingBehaviours: string;                // for column: "The Participant has a history of the following behaviours:"
    public addressOfParticipant: string;                // for column: "Address of Participant"
    public postcodeOfParticipant: string;                // for column: "Postcode of Participant"
    public region: string;                // for column: "region"
    public participantCanConsentToServices: string;                // for column: "participant_can_consent_to_services"
    public ndisNumber: string;                // for column: "NDIS Number"
    public ndisStartDate: string;                // for column: "NDIS Start Date"
    public ndisEndDate: string;                // for column: "NDIS End Date"
    public personsNdisGoals: string;                // for column: "Person's NDIS goals"
    public ndisPlan: string;                // for column: "NDIS Plan"
    public lineItemToQuoteFrom: string;                // for column: "line_item_to_quote_from"
    public howMuchFundingIsInEachStatedSupport: string;                // for column: "How much funding is in each stated support"
    public supportEnvironments: string;                // for column: "Support Environments"
    public reasonForReferral: string;                // for column: "Reason for Referral"
    public hasRestrictedPractices: string;                // for column: "has_restricted_practices"
    public restrictivePracticesCurrentlyUsed: string;                // for column: "restrictive_practices_currently_used"
    public chemicalRestraintProtocol: string;                // for column: "chemical_restraint_protocol"
    public restrictivePracticesAllAuthorised: string;                // for column: "restrictive_practices_all_authorised"
    public rpaExpiryDates: string;                // for column: "rpa_expiry_dates"
    public currentRpaConsents: string;                // for column: "current_rpa_consents"
    public pleaseExplainWhyEachRestrictivePracticeIsNeeded: string;                // for column: "Please explain why each Restrictive Practice is needed"
    public iAmInterestedInTheFollowingServices: string;                // for column: "I am interested in the following services"
    public consenterFirstName: string;                // for column: "Consenter First Name"
    public consenterLastName: string;                // for column: "Consenter Last Name"
    public consenterPhoneNumber: string;                // for column: "Consenter Phone Number"
    public consenterAddress: string;                // for column: "Consenter Address"
    public consenterEmailAddress: string;                // for column: "Consenter Email Address"
    public consenterRelationshipToParticipanttickAllThatApply: string;                // for column: "Consenter Relationship to participant (tick all that apply)"
    public enterAlternativeConsenter: string;                // for column: "enter_alternative_consenter"
    public alternativeConsenterContactFirstName: string;                // for column: "Alternative Consenter/ Contact First Name"
    public alternativeConsenterContactPersonLastName: string;                // for column: "Alternative Consenter/ Contact Person Last Name"
    public alternativeConsenterContactPersonMobile: string;                // for column: "Alternative Consenter/ Contact Person Mobile"
    public alternativeConsenterContactPersonEmail: string;                // for column: "Alternative Consenter/ Contact Person Email"
    public alternativeConsenterContactPersonAddress: string;                // for column: "Alternative Consenter / Contact Person Address"
    public alternativeConsenterRelationship: string;                // for column: "alternative_consenter_relationship"
    public enterAccommodationContact: string;                // for column: "enter_accommodation_contact"
    public supportedAccommodationKeyContactName: string;                // for column: "Supported Accommodation Key Contact - Name"
    public supportedAccommodationKeyContactMobile: string;                // for column: "Supported Accommodation Key Contact - Mobile"
    public supportedAccommodationKeyContactEmail: string;                // for column: "Supported Accommodation Key Contact - Email"
    public enterDayProgramContact: string;                // for column: "enter_day_program_contact"
    public dayProgramKeyContactName: string;                // for column: "Day Program Key Contact - Name"
    public dayProgramKeyContactMobile: string;                // for column: "Day Program Key Contact - Mobile"
    public dayProgramKeyContactEmail: string;                // for column: "Day Program Key Contact - Email"
    public enterEmployerContact: string;                // for column: "enter_employer_contact"
    public employmentKeyContactName: string;                // for column: "Employment Key Contact - Name"
    public employmentKeyContactMobile: string;                // for column: "Employment Key Contact - Mobile"
    public employmentKeyContactEmail: string;                // for column: "Employment Key Contact - Email"
    public additionalInfo: string;                // for column: "additional_info"
    public serviceBookingConsent: string;                // for column: "service_booking_consent"
    public timestamp: any;                // for column: "Timestamp"
    public token: string;                // for column: "Token"


    getKeys() {
        return [
            'id',
            'emailAddress',
            'firstNameOfReferrer',
            'lastNameOfReferrer',
            'referrerRelationship',
            'referrerPhone',
            'fundsManagement',
            'planManagementAgency',
            'planManagementContact',
            'agreedToPrivacyPolicy',
            'agreedToProvidePersonalInfo',
            'participantFirstName',
            'participantLastName',
            'participantPreferredFirstName',
            'gender',
            'dateOfBirth',
            'diagnosis',
            'behaviourHistory',
            'theParticipantHasAHistoryOfTheFollowingBehaviours',
            'addressOfParticipant',
            'postcodeOfParticipant',
            'region',
            'participantCanConsentToServices',
            'ndisNumber',
            'ndisStartDate',
            'ndisEndDate',
            'personsNdisGoals',
            'ndisPlan',
            'lineItemToQuoteFrom',
            'howMuchFundingIsInEachStatedSupport',
            'supportEnvironments',
            'reasonForReferral',
            'hasRestrictedPractices',
            'restrictivePracticesCurrentlyUsed',
            'chemicalRestraintProtocol',
            'restrictivePracticesAllAuthorised',
            'rpaExpiryDates',
            'currentRpaConsents',
            'pleaseExplainWhyEachRestrictivePracticeIsNeeded',
            'iAmInterestedInTheFollowingServices',
            'consenterFirstName',
            'consenterLastName',
            'consenterPhoneNumber',
            'consenterAddress',
            'consenterEmailAddress',
            'consenterRelationshipToParticipanttickAllThatApply',
            'enterAlternativeConsenter',
            'alternativeConsenterContactFirstName',
            'alternativeConsenterContactPersonLastName',
            'alternativeConsenterContactPersonMobile',
            'alternativeConsenterContactPersonEmail',
            'alternativeConsenterContactPersonAddress',
            'alternativeConsenterRelationship',
            'enterAccommodationContact',
            'supportedAccommodationKeyContactName',
            'supportedAccommodationKeyContactMobile',
            'supportedAccommodationKeyContactEmail',
            'enterDayProgramContact',
            'dayProgramKeyContactName',
            'dayProgramKeyContactMobile',
            'dayProgramKeyContactEmail',
            'enterEmployerContact',
            'employmentKeyContactName',
            'employmentKeyContactMobile',
            'employmentKeyContactEmail',
            'additionalInfo',
            'serviceBookingConsent',
            'timestamp',
            'token'
        ];
    }

    toString() {
    // tslint:disable-next-line:max-line-length
        return `${this.id}: ${this.firstNameOfReferrer} ${this.lastNameOfReferrer ? (' ' + this.lastNameOfReferrer) : ''} ${ this.timestamp ? this.timestamp.date.slice(0, -7) : ''})`;
    }

}
