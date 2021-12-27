import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanDeactivate,
    UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ConfirmDialogComponent, ConfirmDialogModel } from '../components/confirm-dialog/confirm-dialog.component';
import { FormStateService } from '../services/form-state.service';

/**
 * Handle saving partially filled form values on route changes
 */

@Injectable({providedIn: 'root'})
export class FormStateGuard implements CanDeactivate<any> {
    displayDialog = false;
    canDeactivateDefault = true;

    constructor(private formStateService: FormStateService, public dialog: MatDialog) {
    }

    canDeactivate(component: any,
                  currentRoute: ActivatedRouteSnapshot,
                  currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (!this.formStateService.enabled) {
            return true;
        }
        if (typeof component.form === 'object' && 'FormGroup' === component.form.constructor.name) {
            if (!component.form.pristine) {
                if (!component.saving) {
                    // save partially filled form values to local storage
                    const canDeactivate = this.canDeactivateDefault;
                    if (this.displayDialog) {
                        // display dialog
                        const message = 'The data were not saved yet. Leave anyway?';
                        const title = 'Confirm leaving';
                        return this.confirmDialog(message, title).pipe(tap(data => {
                            if (data) {
                                this.formStateService.saveValues(component.form.value, component.constructor.name, currentState.url);
                            }
                        }));
                    } else {
                        // no dialog
                        if (canDeactivate) {
                            this.formStateService.saveValues(component.form.value, component.constructor.name, currentState.url);
                        } else {
                            return false;
                        }
                    }
                }
            }

            return true;
        }

        return this.canDeactivateDefault;
    }

    confirmDialog(message? : any, title? : any): Observable<any> {
        const dialogData = new ConfirmDialogModel(message, title);
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            maxWidth: '400px',
            data: dialogData
        });

        return dialogRef.afterClosed();
    }
}
