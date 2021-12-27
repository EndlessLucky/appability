How to generate new angular modules

# Generate new Angular module

cd appa

## update the config

vi ./bin/new-module.sh

## generate

./bin/new-module.sh


# Generate entity


$ cd appability-api 

$ cd app

````
mkdir module/Appability/src/Appability/V1/Rest/Adjective
sudo chmod 777 module/Appability/src/Appability/V1/Rest/Adjective/
````

## Generate entity based on Adjective table

````
php public/index.php orm:entity:from-table --table "Adjective" --namespace "Appability\V1\Rest\Adjective\\" -d module/Appability/src/Appability/V1/Rest/Adjective/
````

> Entity saved to: module/Appability/src/Appability/V1/Rest/Adjective/Adjective.php

Check if the entity classname is correct ()


# Update config


Add the above directory to config:

```
app/module/Appability/config/module.config.php


'doctrine' => array(
        'driver' => array(
            'Appability_driver' => array(
            ...
               99 => __DIR__ . '/../src/Appability/V1/Rest/Adjective/',
```

# Create new API Service using UI

http://localhost:8083/apigility/ui#/

## 4. Options

Configure the options (authorization etc.)

Page size parameter: page_size



# Generate angular model fields

````
php public/index.php orm:entity:fields --entity "Appability\\V1\\Rest\\Adjective\\Adjective"

````

Paste the output to:

````
features/adjective/models/adjective.model.ts
````

fields in the array format:

```
php public/index.php orm:entity:fields --entity "Appability\\V1\\Rest\\Adjective\\Adjective" -f array
```


```
'id',                // for column: "id"
'lastmodified',                // for column: "LastModified"
'lastmodifiedby',                // for column: "LastModifiedBy"
'client',                // for column: "Client"
'person',                // for column: "Person"
'relationshipOfPersonToClient',                // for column: "Relationship of Person to Client"
'active',                // for column: "Active"
'feedback',                // for column: "Feedback"
```

Paste the above also to 

- data-sources/adjective.data-source.ts
- components/view/view.component.ts
- components/index/calculated.component.ts

## In the form format

````
$ php public/index.php orm:entity:fields --entity "Appability\\V1\\Rest\\Adjective\\Adjective" -f form
````

``` 
id: ['', []],                // for column: "id"
lastmodified: ['', []],                // for column: "LastModified"
lastmodifiedby: ['', []],                // for column: "LastModifiedBy"
client: ['', []],                // for column: "Client"
person: ['', []],                // for column: "Person"
relationshipOfPersonToClient: ['', []],                // for column: "Relationship of Person to Client"
active: ['', []],                // for column: "Active"
feedback: ['', []],                // for column: "Feedback"
```

Paste this to components/form/form.component.ts

## Generate Angular form template

````
php public/index.php orm:entity:to-angular-form-template --table "Adjective"
````

paste to `compontents/form/form.component.html`

# Include module in app-routing.module.ts


````
  {
    path: 'adjective',
    component: LayoutSidebarComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./features/adjective/adjective.module').then(mod => mod.AdjectiveModule)
      }
    ]
  },
````



