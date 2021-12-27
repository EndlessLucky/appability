import
{
    Component,
    ViewContainerRef
} from
    '@angular/core';
import { User } from '../../../core/models/user.model';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { UserComponent } from '../user/user.component';

@Component({
    selector: 'app-current-user',
    template: `
      <ng-template #tpl>
          <ng-container *ngIf="hasAvatar"><img [ngStyle]="{cursor: 'pointer', 'vertical-align': 'middle'}"
                                               [routerLink]="link"
                                               src="{{initialsText | appInitialsImage:maxInitials:avatarSize}}"
                                               alt="{{fullName}} Initials" title="{{fullName}}"/>
          </ng-container>&nbsp;<span [ngStyle]="{cursor: 'pointer'}" [routerLink]="link">{{fullName}}</span>
      </ng-template>
      <ng-template #tplMailto>
          <ng-container *ngIf="hasAvatar"><a href="{{link}}"><img
                  [ngStyle]="{cursor: 'pointer', 'vertical-align': 'middle'}"
                  src="{{initialsText | appInitialsImage:maxInitials:avatarSize}}" alt="{{fullName}} Initials"
                  title="{{fullName}}"/></a></ng-container>&nbsp;<a href="{{link}}"
                                                                    [ngStyle]="{cursor: 'pointer'}">{{fullName}}</a>
      </ng-template>    `,
    // changeDetection: ChangeDetectionStrategy.OnPush
})

export class CurrentUserComponent extends UserComponent {
    constructor(viewContainer: ViewContainerRef, private authenticationService: AuthenticationService) {
        super(viewContainer);
    }

    getUser() {
        if (this.model && this.model instanceof User) {
            return this.model;
        }

        if (this.authenticationService.currentUserValue) {
            return this.authenticationService.currentUserValue;
        }

        return false;
    }

}
