import
{
    Component,
    Input,
    OnInit,
    TemplateRef,
    ViewChild,
    ViewContainerRef
} from
    '@angular/core';
import { User } from '../../../core/models/user.model';

@Component({
    selector: 'app-user',
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
export class UserComponent implements OnInit {
    @Input('model') model: User;
    @Input('linkTo') linkTo: 'mailto' | 'view' = 'view';
    @Input('maxInitials') maxInitials = 2;
    @Input('avatar') hasAvatar = true;
    @Input('avatar') display: 'fullName' | 'email' | 'username' = 'fullName';
    @Input('avatarSize') avatarSize = 32;
    @ViewChild('tpl', {static: true, read: TemplateRef}) tpl: TemplateRef<null>;
    @ViewChild('tplMailto', {static: true, read: TemplateRef}) tplMailto: TemplateRef<null>;

    link: string;
    fullName: string;
    initialsText: string;

    constructor(private viewContainer: ViewContainerRef) {

    }

    ngOnInit() {
        const user = this.getUser();
        if (user) {
            this.fullName = '';
            if (user.firstName && user.lastName) {
                this.fullName = user.firstName + ' ' + user.lastName;
            } else {
                if (user.firstName) {
                    this.fullName = user.firstName;
                } else {
                    if (user.lastName) {
                        this.fullName = user.lastName;
                    }
                }
            }
            if (!this.fullName) {
                if (user.email) {
                    this.fullName = user.email;
                } else {
                    this.fullName = user.username;
                }
            }

            if (this.display === 'email') {
                this.fullName = user.email || this.fullName;
                this.linkTo = 'mailto';
            } else if (this.display === 'username') {
                this.fullName = user.username || this.fullName;
            }

            if (this.fullName.includes('@')) {
                this.initialsText = this.fullName.toUpperCase().split('@')[0].replace(/[._]/g, ' ');
                this.linkTo = 'mailto';
            } else {
                this.initialsText = this.fullName;
            }

            if (this.linkTo === 'view') {
                this.link = '/user/' + user.id;
                this.viewContainer.createEmbeddedView(this.tpl);
            } else {
                this.link = 'mailto:' + (user.email || this.fullName);
                this.viewContainer.createEmbeddedView(this.tplMailto);
            }
        } else {
            this.viewContainer.clear();
        }
    }

    getUser() {
        if (this.model) {
            return this.model;
        }

        return false;
    }

}
