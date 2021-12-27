# CopyClipboardDirective - Directive to copy to clipboard

Sample usage:

````
// displays form values in JSON format, only for admins

<app-code-sample *appHasRole="'Admin'" [code]="form.value | json"></app-code-sample>
````


