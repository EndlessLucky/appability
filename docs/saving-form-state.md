# Persisting form values between routes

When switching the routes components are destroyed and rebuilt = all data entered to forms are lost.

We have to persist the data somehow.

## FormStateGuard - automatic saving of form values

`FormStateGuard` is executed when the route is deactivated (user leaving to some other route) 
and when the component attached to the route has `this.form` it saves the form values to the local storage using `FormStateService`.

`FormStateGuard` has an optional feature to display the confirmation dialog when form values are not saved yet, 
which is disabled by default (`FormStateGuard.displayDialog = false`)

This confirmation helps users to make sure they won't forget to hit [Save] button when they want the form to be saved.

## FormStateResolve data resolver

This component is executed _before_ the route is activated (after the component is created).  
It checks whether there are any data present in the local storage for the current component's form.
If yes - the form is pre-populated with the values from the local storage

## Sample usage

To enable the above features, you need to set up the resolver and `canDeactivate` guard in the module routing, eg.

````
...
  {
    path: 'create',
    component: FormComponent,
    canActivate: [AuthGuard],
    resolve: [FormStateResolve],
    canDeactivate: [FormStateGuard],
    data: {
      title: 'Create new data',
      roles: RoleManager.allExcept(Role.Guest)
    },
  },
  {
    path: 'update/:id',
    component: FormComponent,
    canActivate: [AuthGuard],
    resolve: [FormStateResolve],
    canDeactivate: [FormStateGuard],
    data: {
      title: 'Edit data',
      roles: RoleManager.allExcept(Role.Guest)
    }
  },
...
```` 
