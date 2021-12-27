import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { FormStateService } from '../services/form-state.service';

@Injectable()
export class FormStateResolve implements Resolve<any> {
    constructor(private formStateService: FormStateService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        if (!this.formStateService.enabled) {
            return of();
        }
        let componentName = 'UnknownComponent';
        if (typeof route.component !== 'string') {
            componentName = route.component.name;
        }

        const data = this.formStateService.getValues(componentName, state.url);

        return data;
    }
}
