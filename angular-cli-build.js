// Angular-CLI build configuration
// This file lists all the node_modules files that will be used in a build
// Also see https://github.com/angular/angular-cli/wiki/3rd-party-libs

/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');
var compileStylus = require('broccoli-stylus-single');
var mergeTrees = require('broccoli-merge-trees');

module.exports = function (defaults) {
  var appTree = new Angular2App(defaults, {
    stylusCompiler: {
      // Compile all files in app folder (this seems to be ignored by angular-cli atm...)
      include: ['src/app/**/*.styl']
    },
    vendorNpmFiles: [
      'systemjs/dist/system-polyfills.js',
      'systemjs/dist/system.src.js',
      'zone.js/dist/**/*.+(js|js.map)',
      'es6-shim/es6-shim.js',
      'reflect-metadata/**/*.+(ts|js|js.map)',
      'rxjs/**/*.+(js|js.map)',
      '@angular/**/*.+(js|js.map)',
      'socket.io-client/socket.io.js',
      'angular2-google-maps/**/*.+(js|js.map)',
      'angular2-onsenui/dist/**/*',
      'onsenui/**'
    ]
  });

  // todo: angular cli generatus .stylus files, it should be .styl (see angular-cli.json)
  // Compile onsenui theme separately to allow for use of @import
  var stylusTree = compileStylus(['src/style'], 'app-theme.styl', 'style/app-theme.css', {});

  return mergeTrees([appTree, stylusTree], {overwrite: true});
};
