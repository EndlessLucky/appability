# Karma unit testing

Karma allows to easily test components, services and other classes in browser.

The test files have `.spec.ts` extension.

Note these are _unit_ tests, not functional (e2e) tests. 

## Headless browser

We're using headless Chromium browser to run the unit tests.  
Chromium is an open source clone of Chrome browser for Linux platforms.

Alternative is to use eg. PhantomJS, but it's discontinued.

## Dependencies

Chromium can be installed by running `apt-get install chromium-browser`.  

Unfortunately, it has a lot of dependencies:

````
 adwaita-icon-theme chromium-codecs-ffmpeg-extra dconf-gsettings-backend dconf-service fontconfig glib-networking glib-networking-common glib-networking-services
  gsettings-desktop-schemas gtk-update-icon-cache hicolor-icon-theme humanity-icon-theme libasound2 libasound2-data libatk-bridge2.0-0 libatk1.0-0 libatk1.0-data libatspi2.0-0
  libavahi-client3 libavahi-common-data libavahi-common3 libcairo-gobject2 libcairo2 libcolord2 libcroco3 libcups2 libdatrie1 libdconf1 libepoxy0 libgdk-pixbuf2.0-0
  libgdk-pixbuf2.0-common libgraphite2-3 libgtk-3-0 libgtk-3-common libharfbuzz0b libjson-glib-1.0-0 libjson-glib-1.0-common liblcms2-2 libnspr4 libnss3 libpango-1.0-0
  libpangocairo-1.0-0 libpangoft2-1.0-0 libpixman-1-0 libproxy1v5 librest-0.7-0 librsvg2-2 librsvg2-common libsoup-gnome2.4-1 libsoup2.4-1 libthai-data libthai0 libwayland-client0
  libwayland-cursor0 libwayland-egl1 libx11-xcb1 libxcb-render0 libxcb-shm0 libxcomposite1 libxcursor1 libxdamage1 libxfixes3 libxi6 libxinerama1 libxkbcommon0 libxrandr2
  libxrender1 libxss1 libxtst6 ubuntu-mono x11-common xdg-utils
````

## Karma config

See `karma.config.ts`:

We're using custom extension of ChromiumHeadless (`CustomChromiumHeadless`) which disables translations, disables extensions and uses custom debug port.  
It also uses `--no-sandbox` option which allows it to run as root (on production server).

## Running the test suite

````
ng test --watch=false --browsers=CustomChromiumHeadless
```` 


## Running single tests or exclude some

By default all test methods are called `describe`.

When you prefix the test function name with `f` (`fdescribe`), it will only run just this one test.  
(`f` stands for _focus_).

When you prefix the test function name wit `x` (`xdescribe`), it will exclude (skip) this test from the test set.

## Creating unit tests

Unit tests files stubs are added automatically when you use `angular-cli` tool to generate components, services etc.

````
ng generate component core/component/mycomponent
````


### Unit tests for existing components

Angular CLI does not have a feature to generate the tests for existing components.

But this can be done with [angular-spec-generator](https://github.com/ZouYouShun/angular-spec-generator)

````
# install the tool:
npm install -g angular-spec-generator

# generate the tests for all classes in this directory and below:
angular-spec-generator 'C:\Users\Alan\Desktop\test'
```


