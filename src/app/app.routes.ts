import { provideRouter, RouterConfig } from '@angular/router';

import {
  PageNotFoundComponent,
  NationsComponent,
  PubCrawlsComponent
} from './components';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: 'nations',
    pathMatch: 'full'
  },
  {
    path: 'nations',
    component: NationsComponent
  },
  {
    path: 'pub-crawls',
    component: PubCrawlsComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
