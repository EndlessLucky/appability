export interface SelectableListItemInterface {
    value: any;
    selected?: boolean;
}

export class SelectableListItem implements SelectableListItemInterface {
    constructor(public value: any, public selected?: boolean) {
        if (selected === undefined) {
            this.selected = false;
        }
    }
}
