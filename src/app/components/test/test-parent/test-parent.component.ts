import { Component, OnInit, ViewChild } from '@angular/core';

window['ons'] = System.import('onsenui');
import { ONS_DIRECTIVES, OnsNavigator } from 'angular2-onsenui';

import { TestChildComponent } from '../';
import { GoogleService } from '../../../services';

@Component({
  moduleId: module.id,
  selector: 'test-parent',
  templateUrl: 'test-parent.component.html',
  styleUrls: ['test-parent.component.css'],
  directives: [
    ONS_DIRECTIVES
  ],
  providers: [
    GoogleService
  ]
})
export class TestParentComponent implements OnInit {
  @ViewChild(OnsNavigator) private _navigator: OnsNavigator;

  constructor(private placesService: GoogleService) { }

  ngOnInit() {
    this.placesService.getPlaceDetails('ChIJ8eAWwPbLX0YRom1gca2Xcrs');
  }

  goto(id: number) {
    this._navigator.pushComponent(TestChildComponent, { animation: 'slide' }, { key: 'value' });
  }
}
