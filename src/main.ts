import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppComponent } from './app';
import { environment } from './app/config';
import { NationService } from './app/nations/shared/nation.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  NationService
]);
