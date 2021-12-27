# Theme Switcher Feature

The application implements basic theme switcher

You may see it in action at:

- http://localhost:4200/user/preferences

## Creating New Themes

The themes are located in the `src/styles/*.scss` files.  
Then compiled to css to the `src/assets/` directory.

*Make sure to configure your compiler properly or copy the output files manually.*

Theme switcher options are defined in: `src/assets/themes.json`


## @TODO

- move `themes.json` to a separate class or to API side, remove from `assets` dir
- store the setting in the local storage
- make the changes permanent
