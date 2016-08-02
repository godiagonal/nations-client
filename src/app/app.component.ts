import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { NationListComponent, NationMapComponent } from './components';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    NationListComponent,
    NationMapComponent,
    ROUTER_DIRECTIVES
  ]
})
export class AppComponent implements OnInit {
  title = 'Nationsapp!';

  constructor() { }

  ngOnInit() {

  }
}
