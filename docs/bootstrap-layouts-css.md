# Using custom element layout

In the previous version application we were using Bootstrap library.

Now it has been removed in favor of FlexLayout module.

## FlexLayout

docs: [github.com/angular/flex-layout](https://github.com/angular/flex-layout)

````
    "@angular/flex-layout": "^12.0.0-beta.34",
````

## Sample two columns, responsive layout

````
<div fxLayout.gt-sm="row" fxLayout="column" fxLayoutGap="16px">

    <mat-card fxFlex.lt-md="100%" fxFlex="50%"  *ngIf="paidList.length">
      <mat-card-title><mat-icon color="primary">check_online</mat-icon> Paid  ({{paidList.length}})</mat-card-title>
      <mat-card-content>
          <p>The following NDIS Managed payment requests have now been marked as PAID:</p>
          <pre><div *ngFor="let item of paidList">{{item}}</div></pre>
        </mat-card-content>
    </mat-card>

    <mat-card fxFlex.lt-md="100%" fxFlex="50%"  *ngIf="unpaidList.length">
      <mat-card-title><mat-icon color="warn">error_outline</mat-icon> Unpaid ({{unpaidList.length}})</mat-card-title>

      <mat-card-content>
        <p>Not SUCCESSFUL NDIS Managed payment requests in the file:</p>
        <pre><div *ngFor="let item of unpaidList">{{item}}</div></pre>
      </mat-card-content>
    </mat-card>

</div>
````
