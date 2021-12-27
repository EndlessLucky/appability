import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of, Subscription } from 'rxjs';

import { debounceTime, tap } from 'rxjs/operators';
import { RestApiService } from '../../../../shared/grid/services/rest-api.service';


@Component({
    selector: 'app-user-role',
    templateUrl: './role.component.html',
    styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit, OnDestroy {
    private subscriptions: Subscription = new Subscription();

    roleElement = new FormControl();
    $filtered: Observable<any> = of([]);

    /**
     * Minimum number of characters triggering autocomplete
     */
    minLength = 0;

    constructor(
        private dataService: RestApiService
    ) {
    }

    getUserId(user) {
        return user ? user.id : user;
    }

    getUserRole(user) {
        return user ? user.role : user;
    }

    ngOnInit(): void {
        const fieldName = 'role';
        this.subscriptions.add(
            this.roleElement.valueChanges.pipe(
                debounceTime(500),
                tap(value => {
                    if (value.length >= this.minLength) {
                        this.$filtered = this.dataService.findSerialized(value, 'asc', 0, 24, fieldName, [fieldName]);
                    } else {
                        this.$filtered = of([]);
                    }
                })
            ).subscribe()
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }
}
