# NPM Scripts

We have some handy scripts (command aliases) which can be used in the command line.

They are defined in the `package.json` file:


````
"scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "docker-compose up angular_karma",
    "tests": "docker-compose up angular_karma",
    "test-headless": "ng test --watch=false --browsers=CustomChromiumHeadless",
    "lint": "ng lint",
    "e2e": "docker-compose up angular_e2e",
    "e2ep": "ng e2e --port=4201",
    "compodoc": "npx compodoc -p tsconfig.app.json",
    "generate-api-classes": "ng-swagger-gen -i src/api/schema.json -o src/api/generated",
    "download-api-schema": "./bin/swagger-api-json.sh"
````


To run the script, you need to prefix the actual command with:

````
npm run
````

## Examples:

````
npm run start
# alias for "ng serve"
# starts serving the project on localhost 4200
````


```
npm run test
## run tests inside Docker container
```

```
npm run e2e
## run e2e tests inside Docker container
```

```
npm run compodoc
# generate Compodoc documentation in the "documentation" directory
```
