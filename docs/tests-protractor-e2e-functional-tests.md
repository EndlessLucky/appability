# End to end functional tests using Protractor

We're using the default setup for Angular applications provided by Angular Cli.

## Configuration

Configuration files:

- `e2e\protractor.conf.ts`
- `e2e\tsconfig.json`

## Headless browser

We're running headless browser to run the tests.

By default it's Chromium (open source Chrome clone for Linux), installed in `/usr/local/chromium-browser`.

## Running the tests

````
# run the tests on the default 4200 port
ng e2e

# run the tests on custom port
ng e2e --port=4201
````

