import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppComponent, appRouterProviders } from './app';
import { environment } from './app';
import { NationService, LocationService } from './app/services';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  NationService,
  LocationService,
  appRouterProviders
]);
