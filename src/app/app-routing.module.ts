import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutSidebarComponent } from './core/layouts/layout-sidebar/layout-sidebar.component';

const routes: Routes = [
    // LAZY LOADED MODULES

    // Data module
    {
        path: 'data',
        component: LayoutSidebarComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./features/data/data.module').then(mod => mod.DataModule)
            }
        ]
    },
    // Person module
    {
        path: 'person',
        component: LayoutSidebarComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./features/person/person.module').then(mod => mod.PersonModule)
            }
        ]
    },
    // Service Request Type module
    {
        path: 'service-request-type',
        component: LayoutSidebarComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./features/service-request-type/service-request-type.module').then(mod => mod.ServiceRequestTypeModule)
            }
        ]
    },
    // User module
    {
        path: 'user',
        component: LayoutSidebarComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./features/user/user.module').then(mod => mod.UserModule)
            }
        ]
    },
    // Help module
    {
        path: 'help',
        component: LayoutSidebarComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./features/help/help.module').then(mod => mod.HelpModule)
            }
        ]
    },
    {
        path: 'client',
        component: LayoutSidebarComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./features/client/client.module').then(mod => mod.ClientModule)
            }
        ]
    },
    {
        path: 'ability-consultants-referral-form',
        component: LayoutSidebarComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./features/ability-consultants-referral-form/ability-consultants-referral-form.module').then(mod => mod.AbilityConsultantsReferralFormModule)
            }
        ]
    },
    {
        path: 'service-booking',
        component: LayoutSidebarComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./features/service-booking/service-booking.module').then(mod => mod.ServiceBookingModule)
            }
        ]
    },
    {
        path: 'support-item',
        component: LayoutSidebarComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./features/support-item/support-item.module').then(mod => mod.SupportItemModule)
            }
        ]
    },
    {
        path: 'service-booking-details',
        component: LayoutSidebarComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./features/service-booking-details/service-booking-details.module').then(mod => mod.ServiceBookingDetailsModule)
            }
        ]
    },
    {
        path: 'client-stage',
        component: LayoutSidebarComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./features/client-stage/client-stage.module').then(mod => mod.ClientStageModule)
            }
        ]
    },
    {
        path: 'organisation',
        component: LayoutSidebarComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./features/organisation/organisation.module').then(mod => mod.OrganisationModule)
            }
        ]
    },
    {
        path: 'organisation-client',
        component: LayoutSidebarComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./features/organisation-client/organisation-client.module').then(mod => mod.OrganisationClientModule)
            }
        ]
    },
    {
        path: 'region',
        component: LayoutSidebarComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./features/region/region.module').then(mod => mod.RegionModule)
            }
        ]
    },
    {
        path: 'client-person',
        component: LayoutSidebarComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./features/client-person/client-person.module').then(mod => mod.ClientPersonModule)
            }
        ]
    },
    {
        path: 'client-relationship',
        component: LayoutSidebarComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./features/client-relationship/client-relationship.module').then(mod => mod.ClientRelationshipModule)
            }
        ]
    },
    {
        path: 'ability-calendar',
        component: LayoutSidebarComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./features/ability-calendar/ability-calendar.module').then(mod => mod.AbilityCalendarModule)
            }
        ]
    },
    {
        path: 'action',
        component: LayoutSidebarComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./features/action/action.module').then(mod => mod.ActionModule)
            }
        ]
    },
    {
        path: 'adjective',
        component: LayoutSidebarComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./features/adjective/adjective.module').then(mod => mod.AdjectiveModule)
            }
        ]
    },
    {
        path: 'capability',
        component: LayoutSidebarComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./features/capability/capability.module').then(mod => mod.CapabilityModule)
            }
        ]
    },
    {
        path: 'cient-documents',
        component: LayoutSidebarComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./features/cient-documents/cient-documents.module').then(mod => mod.CientDocumentsModule)
            }
        ]
    },
    {
        path: 'client-fai',
        component: LayoutSidebarComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./features/client-fai/client-fai.module').then(mod => mod.ClientFaiModule)
            }
        ]
    },
    {
        path: 'client-sr-stage',
        component: LayoutSidebarComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./features/client-sr-stage/client-sr-stage.module').then(mod => mod.ClientSrStageModule)
            }
        ]
    },
    {
        path: 'client-supervision-session',
        component: LayoutSidebarComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./features/client-supervision-session/client-supervision-session.module').then(mod => mod.ClientSupervisionSessionModule)
            }
        ]
    },
    {
        path: 'competency',
        component: LayoutSidebarComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./features/competency/competency.module').then(mod => mod.CompetencyModule)
            }
        ]
    },
    {
        path: 'complaint',
        component: LayoutSidebarComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./features/complaint/complaint.module').then(mod => mod.ComplaintModule)
            }
        ]
    },
    {
        path: 'contractor-detail',
        component: LayoutSidebarComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./features/contractor-detail/contractor-detail.module').then(mod => mod.ContractorDetailModule)
            }
        ]
    },
    {
        path: 'contractor-invoice',
        component: LayoutSidebarComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./features/contractor-invoice/contractor-invoice.module').then(mod => mod.ContractorInvoiceModule)
            }
        ]
    },
    {
        path: 'document',
        component: LayoutSidebarComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./features/document/document.module').then(mod => mod.DocumentModule)
            }
        ]
    },
    {
        path: 'document-standard',
        component: LayoutSidebarComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./features/document-standard/document-standard.module').then(mod => mod.DocumentStandardModule)
            }
        ]
    },
    {
        path: 'incident',
        component: LayoutSidebarComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./features/incident/incident.module').then(mod => mod.IncidentModule)
            }
        ]
    },
    {
        path: 'hazard',
        component: LayoutSidebarComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./features/hazard/hazard.module').then(mod => mod.HazardModule)
            }
        ]
    },
    {
        path: 'incident-hazard',
        component: LayoutSidebarComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./features/incident-hazard/incident-hazard.module').then(mod => mod.IncidentHazardModule)
            }
        ]
    },
    {
        path: 'module',
        component: LayoutSidebarComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./features/module/module.module').then(mod => mod.ModuleModule)
            }
        ]
    },
    {
        path: 'payment-outcome',
        component: LayoutSidebarComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./features/payment-outcome/payment-outcome.module').then(mod => mod.PaymentOutcomeModule)
            }
        ]
    },
    {
        path: 'payment-request',
        component: LayoutSidebarComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./features/payment-request/payment-request.module').then(mod => mod.PaymentRequestModule)
            }
        ]
    },
    {
        path: 'pay-rate',
        component: LayoutSidebarComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./features/pay-rate/pay-rate.module').then(mod => mod.PayRateModule)
            }
        ]
    },
    {
        path: 'person-staff-status',
        component: LayoutSidebarComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./features/person-staff-status/person-staff-status.module').then(mod => mod.PersonStaffStatusModule)
            }
        ]
    },
    {
        path: 'csv',
        component: LayoutSidebarComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./features/csv/csv.module').then(mod => mod.CSVModule)
            }
        ]
    },
    {
        path: 'xero-payments',
        component: LayoutSidebarComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./features/xero-payments/xero-payments.module').then(mod => mod.XeroPaymentsModule)
            }
        ]
    },
    {
        path: 'timetrack',
        component: LayoutSidebarComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./features/timetrack/timetrack.module').then(mod => mod.TimetrackModule)
            }
        ]
    },
    {
        path: 'tools-tables',
        component: LayoutSidebarComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./features/tools-tables/tools-tables.module').then(mod => mod.ToolsTablesModule)
            }
        ]
    },
    {
        path : 'tools',
        component : LayoutSidebarComponent,
        children : [
            {
                path : '',
                loadChildren: () => import('./features/feature-request/feature-request.module').then(mod => mod.FeatureRequestModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
