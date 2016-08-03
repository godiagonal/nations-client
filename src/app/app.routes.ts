import { provideRouter, RouterConfig } from '@angular/router';

import {
  PageNotFoundComponent,
  NationOverviewComponent,
  NationListComponent
} from './components';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'map/:slug',
    component: NationOverviewComponent
  },
  {
    path: 'list',
    component: NationListComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
