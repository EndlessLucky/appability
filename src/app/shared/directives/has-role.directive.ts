import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthenticationService } from '../../core/services/authentication.service';

// Conditional content by current user role

// Sample usage:

// <div *appHasRole="'Admin">
// </div>


@Directive({
    selector: '[appHasRole]'
})
export class HasRoleDirective implements OnInit {
    // the role the user must have
    @Input() appHasRole: string;

    isVisible = false;

    // /**
    //  * @param {ViewContainerRef} viewContainerRef
    //  * 	-- the location where we need to render the templateRef
    //  * @param {TemplateRef<any>} templateRef
    //  *   -- the templateRef to be potentially rendered
    //  * @param {RolesService} rolesService
    //  *   -- will give us access to the roles a user has
    //  */
    constructor(
        private viewContainerRef: ViewContainerRef,
        private templateRef: TemplateRef<any>,
        private authenticationService: AuthenticationService
    ) {}

    ngOnInit() {
        const role = this.authenticationService.getRole();

        if (!role) {
            this.viewContainerRef.clear();
        }

        if (role === this.appHasRole) {
            if (!this.isVisible) {
                this.isVisible = true;
                this.viewContainerRef.createEmbeddedView(this.templateRef);
            }
        } else {
            this.isVisible = false;
            this.viewContainerRef.clear();
        }
    }
}
