# Application layouts

The application may use multiple layouts, depending on route.

The layouts are just regular components in the core module.

````
/src/app/core/layouts/
/src/app/core/layouts/layout-centered/
/src/app/core/layouts/layout-sidebar/
...
````

## Switching (choosing) layouts

To switch the layout per particular route:

````
app-routing.module.ts
...
  // Data module
  {
    path: 'data', // <-- module name
    component: LayoutSidebarComponent, // <-- layout component
    children: [
      {
        path: '',
        loadChildren: () => import('./features/data/data.module').then(mod => mod.DataModule)
      }
    ]
  },
... 
````

## Creating new layouts

Just generate new component and import it Core module.

````
ng g c core/layouts/my-layout
````
