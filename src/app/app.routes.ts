import { provideRouter, RouterConfig } from '@angular/router';

import {
  NationOverviewComponent,
  NationListComponent
} from './components/nations';

import { PageNotFoundComponent } from './components/page-not-found';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: 'map/0',
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
