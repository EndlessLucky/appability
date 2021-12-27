#Appability Application Architecture

##Modules

The app consists of three main parts:

- Core module
- Shared module
- Feature modules

Each Angular module has the following folder structure:

- components
- - data-sources
- directives
- guards
- models
- interceptors
- pipes
- services

Each module folder also contains routing module, which is lazy loaded forChild in app-routing.module.ts

###Core module

src/app/core/

This is the main module, included only once in application (in app-module).
In this module put all stuff without the application can’t live (used in every component, on every page).


###Shared module

src/app/shared/

This is a common module, included by all feature modules.
Include here all components, pipes, directives used in many places in the application.

*Important*: Shared module should not have any providers! Nor import modules having providers.

https://angular.io/guide/sharing-ngmodules

###Feature modules

src/app/features/ (and below)

Lazy loaded modules with different features.  
Those modules are not loaded on application start (eagerly), but loaded when particular route is requested.

https://angular.io/guide/lazy-loading-ngmodules


## Speed and performance

Options to consider:


A) Load all the required components (import modules) when the app starts

pros:

- Faster navigation between pages

cons:

- Long application startup
- Harder to maintain
- Higher memory usage


B) Load required components only when they are required (lazy loading)

pros: 

- Lower memory usage
- Easy to maintain, smaller modules
- Fast application startup

cons: 

- Slower navigation between pages (when the page is loaded for the first time)



##Post scriptum

Good alternative architectures:

https://stackoverflow.com/questions/42779871/angular-core-feature-shared-modules-what-goes-where

https://www.intertech.com/Blog/angular-module-tutorial-application-structure-using-modules/

