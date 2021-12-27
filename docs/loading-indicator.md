# Application loading indicator feature

Shows animated circle rotating around logo during application loading time.

This is done using CSS.

Inline styles are in `index.html` file.
(They have to be inline to be able to display the spinner prior to all other components being loaded)

Additional styles are in `/src/styles/loading-indicator.scss`.

This additional stylesheet is added in `/angular.json` file:

````
 ...
 "styles": [
              "src/styles/app-loading.scss",
              "src/styles/styles.scss"
 ],
 ... 
````

The logo is hardcoded as data/image in: `styles/loading-indicator.scss`. 

The original one is in `/assets/img/logo.png`


To test the styles, uncomment a dialog box in `app/app.components.ts:ngOnInit()` function.


TODO: use SVG logo instead PNG, improve graphics.