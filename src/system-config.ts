"use strict";

// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  'socket.io-client': 'vendor/socket.io-client',
  'angular2-google-maps': 'vendor/angular2-google-maps',
  'angular2-onsenui': 'vendor/angular2-onsenui',
  'onsenui': 'vendor/onsenui',
  'angular2-moment': 'vendor/angular2-moment',
  'moment': 'vendor/moment',
};

/** User packages configuration. */
const packages: any = {
  'socket.io-client': { defaultExtension: 'js', main: 'socket.io.js' },
  'angular2-google-maps/core': { defaultExtension: 'js', main: 'index.js' },
  'angular2-onsenui': { defaultExtension: 'js', main: 'dist/src/angular2-onsenui.js' },
  'onsenui': { defaultExtension: 'js', main: 'js/onsenui.js', format: 'cjs' },
  'angular2-moment': { defaultExtension: 'js', main: 'index.js' },
  'moment': { defaultExtension: 'js', main: 'moment.js' },
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/forms',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/config',
  'app/directives',
  'app/services',
  'app/models',
  'app/extensions',
  'app/pipes',
  'app/components',
  'app/components/nations',
  'app/components/nations/nation-list',
  'app/components/nations/nation-map',
  'app/components/nations/nation-details',
  'app/components/nations/nation-map-page',
  'app/components/pub-crawls',
  'app/components/page-not-found',
  'app/components/shared',
  'app/components/test',
  'app/components/test/test-child',
  'app/components/test/test-parent',
  'app/components/shared/ons-back-button-custom',
  'app/components/nations/nation-details-page',
  'app/components/nations/nation-event',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
