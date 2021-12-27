import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { GridSelectSearchComponent } from '../../../../shared/grid/components/grid-select-search/grid-select-search.component';

@Component({
    selector: 'app-ability-consultants-referral-form-pipeline',
    templateUrl: './../../../../shared/grid/components/grid-select-search/grid-select-search.component.html',
    styleUrls: ['./../../../../shared/grid/components/grid-select-search/grid-select-search.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PipelineComponent),
            multi: true
        }
    ]
})
export class PipelineComponent extends GridSelectSearchComponent {
    debug = false;

    @Input() label = 'Pipeline';

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
        {name: 'Training and Consulting', value: 'Training and Consulting'},
        {name: 'Client: NDIS', value: 'Client: NDIS'},
    ];

}
