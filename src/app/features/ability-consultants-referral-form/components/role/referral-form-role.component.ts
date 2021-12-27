import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { GridSelectSearchComponent } from '../../../../shared/grid/components/grid-select-search/grid-select-search.component';

@Component({
    selector: 'app-ability-consultants-referral-form-role',
    templateUrl: './../../../../shared/grid/components/grid-select-search/grid-select-search.component.html',
    styleUrls: ['./../../../../shared/grid/components/grid-select-search/grid-select-search.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => RoleComponent),
            multi: true
        }
    ]
})
export class RoleComponent extends GridSelectSearchComponent {
    debug = false;

    @Input() label = 'Referral Form Role';

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
        {name: 'Referer', value: 'Referer'},
        {name: 'Consenter', value: 'Consenter'},
        {name: 'Alternative Consenter', value: 'Alternative Consenter'},
        {name: 'Participant/Client', value: 'Participant/Client'},
        {name: 'Supported Accomodation Key Contact', value: 'Supported Accomodation Key Contact'},
        {name: 'Day Program Key Contact', value: 'Day Program Key Contact'},
        {name: 'Employment Key Contact', value: 'Employment Key Contact'},
    ];

}
