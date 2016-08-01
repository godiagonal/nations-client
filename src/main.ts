import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppComponent, environment } from './app/';
import { NationService } from './app/nations/shared/nation.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  NationService
]);
