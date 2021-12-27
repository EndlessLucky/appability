import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { GridSelectSearchComponent } from '../../../../shared/grid/components/grid-select-search/grid-select-search.component';

@Component({
    selector: 'app-ability-consultants-referral-form-funds-management',
    templateUrl: './../../../../shared/grid/components/grid-select-search/grid-select-search.component.html',
    styleUrls: ['./../../../../shared/grid/components/grid-select-search/grid-select-search.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FundsManagementComponent),
            multi: true
        }
    ]
})
export class FundsManagementComponent extends GridSelectSearchComponent {
    debug = false;

    @Input() label = 'Funds Management';

    /**
     * Whether the form control value should be the whole object or just a value property
     */
    returnObject = false;

    /**
     * List of available options (objects or strings)
     *
     * @see toLabel()
     * @see toValue()
     */
    protected options: any[] = [
        {name: 'NDIS Managed', value: 'NDIS Managed'},
        {name: 'NDIS Plan Managed', value: 'NDIS Plan Managed'},
        {name: 'NDIS Self Managed', value: 'NDIS Self Managed'},
        {name: 'Privately Managed', value: 'Privately Managed'},
        {name: 'Self Managed', value: 'Self Managed'},
        {name: 'Supplier', value: 'Supplier'},
    ];

}
