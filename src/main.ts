import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import {
  provideLazyMapsAPILoaderConfig,
  GOOGLE_MAPS_PROVIDERS,
} from 'angular2-google-maps/core';

import {
  AppComponent,
  NationService,
  LocationService,
  appRouterProviders,
  environment,
  googleConfig
} from './app';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  NationService,
  LocationService,
  appRouterProviders,
  { provide: LocationStrategy, useClass: HashLocationStrategy },
  HTTP_PROVIDERS,
  GOOGLE_MAPS_PROVIDERS,
  provideLazyMapsAPILoaderConfig(googleConfig.apiConfig)
]);
