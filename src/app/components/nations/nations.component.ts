import { Component, OnInit, ViewChild } from '@angular/core';

import { ONS_DIRECTIVES, OnsNavigator } from 'angular2-onsenui';

import { NationListComponent, NationMapPageComponent } from './';
import { NationService } from '../../services';
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

  constructor(private nationService: NationService) { }

  ngOnInit() {
    // Nations are reloaded every time this component is loaded,
    // e.g. when opening the app or navigating from another route.
    this.nationService.loadNations()
      .then(() => {
        console.log('Nations loaded.');
      }, err => {
        console.error(err);
      });
  }

  openMap(nation: Nation) {
    this.navigator.pushComponent(NationMapPageComponent, { animation: 'slide' }, { nation: nation });
  }
}
