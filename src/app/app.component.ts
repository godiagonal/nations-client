import { Component, OnInit } from '@angular/core';

import {
  NationListComponent,
  NationMapComponent
} from './nations/';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    NationListComponent,
    NationMapComponent
  ]
})
export class AppComponent implements OnInit {
  title = 'Nationsapp!';

  constructor() { }

  ngOnInit() {

  }
}
