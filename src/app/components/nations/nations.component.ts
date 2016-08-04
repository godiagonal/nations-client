import { Component, OnInit, ViewChild } from '@angular/core';

import { ONS_DIRECTIVES, OnsNavigator } from 'angular2-onsenui';

import { NationListComponent, NationOverviewComponent } from './';
import { Nation } from '../../models';

@Component({
  moduleId: module.id,
  selector: 'app-nations',
  templateUrl: 'nations.component.html',
  styleUrls: ['nations.component.css'],
  directives: [
    NationListComponent,
    ONS_DIRECTIVES
  ]
})
export class NationsComponent implements OnInit {
  @ViewChild(OnsNavigator) private navigator: OnsNavigator;
  sideNav: HTMLElement = document.getElementById('side-nav');

  constructor() { }

  ngOnInit() { }

  openMap(nation: Nation) {
    this.navigator.pushComponent(NationOverviewComponent, { animation: 'slide' }, { nation: nation });
  }
}
