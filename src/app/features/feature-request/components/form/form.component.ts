import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { BaseFormComponent, LATEST_FORM_VALUES } from '../../../../shared/components/base-form/base-form.component';

@Component({
  selector: 'app-feature-request-form',
  templateUrl: './form.component.html',
  styleUrls: [
    '../../../../shared/grid/components/core-form/core-form.component.scss',
    './form.component.scss'
  ]
})
export class FormComponent extends BaseFormComponent implements OnInit {

  template =  `## Steps to reproduce

1.
2.
3.

## Expected Result


## Actual Result


## Visual Proof (links to screenshots, videos, text)


## Environment

*OS*: ${window.navigator.userAgent}
*Browser*: ${window.navigator.platform}

  `;

  fields = {
    title: ['', Validators.required],
    description: [this.template, Validators.required],
    url: [''],
    username: [this.getCurrentUserName(), Validators.required],
    role: [this.getCurrentRole()],
    type: ['-1', Validators.required],
    // file_url : [''],
    priority: ['2', Validators.required],
    values: ['', Validators.required]
  };

  goToMarkdownHelp() {
    window.open('https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax', '_blank');
  }

  getCurrentUserName(): string {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser && currentUser.username) {
      return currentUser.username;
    }

    return null;
  }

  ngOnInit() {
    super.ngOnInit();
    const latestFormValues = this.storageService.getItem(LATEST_FORM_VALUES);
    if (latestFormValues) {
      this.form.patchValue({
          url: latestFormValues.url,
          values: JSON.stringify(latestFormValues.values, null, 2)
        }
      );
    }
  }
}
