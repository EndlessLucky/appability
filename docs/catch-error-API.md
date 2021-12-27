# Catch all http request errors

There are two types of errors - client, server error

We have a good solution for catching all http request server error using error.incercept.ts file.

````
/src/app/core/incerceptors/error.interceptor.ts
...
````

To send the error to the backend using API, you have to run this command.

this.restService?.sendGlobalHttpError(err).subscribe(res => console.log('http request error', res));

Also, when http request error happenes, GlobalErrorHandler is called also.

````
/src/app/core/errors/global-error-handler.ts
````

This file is for catching all errors including server/client and automatically runs sendGlobalError function of rest-api.service.ts

## Prevent calling twice of http request error API

To prevent calling twice of http request error API, there are two functions in rest-api.service.ts

````
rest-api.service.ts
...
  //called to send http request error
  sendGlobalHttpError(error) {
  }
... 

...
  //called to send client error
  sendGlobalError(error) {
  }
...

sendGlobalHttpError is called when http request error happens, sendGlobalError
````

## How to check if error API is working properly

When http request errors happen, sendGlobalHttpError function of rest-api.service.ts is automatically called.

Http request errors are concerned with backend issue, so if any backend is not working properly, you can see it.

e.g
```
Visit this url : http://localhost:4200/client-person/list

It's currently not working with backend, you can see console errors which says like this.

...
http request error http global response
...


Visit this url : http://localhost:4200/client-relationship/list and try to type some letters to search records and also says same errors.

```

To see client server error, you can try to change the frontend code to have bugs

e.g

```
src/features/client/components/form/form.component.html


...
<mat-error *ngIf="form,get('referralDate').getError('required')">
  Referral Date is required
</mat-error>
...

It has syntax error, and you can see console error which says like this.

res error global error response

To manually trigger error in component.ts file, you can simply add this command where errors happen.

error => {
  //bla bla 
  throw new Error(error);
}

```
