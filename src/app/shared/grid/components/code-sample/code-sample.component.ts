import { Component, Input, OnInit } from '@angular/core';
import { NotificationService } from '../../../../core/services/notification.service';

@Component({
  selector: 'app-code-sample',
  styleUrls: ['./code-sample.component.scss'],
  templateUrl: './code-sample.component.html'
})
export class CodeSampleComponent implements OnInit {

  @Input()
  code;

  @Input()
  form = null;

  @Input()
  icon = 'code';

  @Input()
  color = 'accent';

  @Input()
  rows = 10;

  @Input()
  cols = 100;

  @Input()
  value = 'Copy to clipboard';

  @Input()
  title = 'Values as JSON';

  @Input()
  expanded = false;

  @Input()
  expandable = true;

  jsonStr = null;

  hasForm = false;

  constructor(protected notiticationService: NotificationService) {
  }

  ngOnInit() {
    if (this.form) {
      if (!this.code || !this.code.length) {
        this.code = JSON.stringify(this.form.value, null, 2);
      }
      this.hasForm = true;
    }
  }

  notify(payload) {
    if (this.notiticationService) {
      const lineLen = payload.split(/\r\n|\r|\n/).length;
      let msg;
      if (lineLen === 1) {
        msg = '1 line copied to the clipboard.';
      } else {
        msg = lineLen + ' lines copied to the clipboard.';
      }
      this.notiticationService.notify(msg);
    }
  }

  fillForm() {
    if (this.jsonStr) {
      if (this.form) {
        try {
          const json = this.jsonStr ? JSON.parse(this.jsonStr) : {};
          this.form.patchValue((JSON.parse(this.jsonStr)));
          this.notiticationService.success('Form values updated.');
        } catch (e) {
          this.notiticationService.warn(e.toString());
        }
      }
    }
  }

  copyValues() {
    this.jsonStr = this.code;
  }

  toggleExpand() {
    this.expanded = !this.expanded;
  }

  getExpandable() {
    return this.expandable;
  }

}
