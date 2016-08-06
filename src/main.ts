import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import {
  provideLazyMapsAPILoaderConfig,
  GOOGLE_MAPS_PROVIDERS,
} from 'angular2-google-maps/core';

import {
  AppComponent,
  NationService,
  LocationService,
  GoogleService,
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
  GoogleService,
  appRouterProviders,
  GOOGLE_MAPS_PROVIDERS,
  provideLazyMapsAPILoaderConfig(googleConfig.apiConfig)
]);
