import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

window['ons'] = System.import('onsenui');
import { ONS_DIRECTIVES } from 'angular2-onsenui';

import { NationListComponent, NationMapComponent } from './nations';
import { NavComponent } from './shared';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: [
    '../../style/app-theme.css',
    'app.component.css'
  ],
  directives: [
    NationListComponent,
    NationMapComponent,
    NavComponent,
    ROUTER_DIRECTIVES,
    ONS_DIRECTIVES
  ]
})
export class AppComponent implements OnInit {
  title = 'Nations';

  constructor() { }

  ngOnInit() {

  }
}
