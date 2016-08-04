import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, ROUTER_DIRECTIVES } from '@angular/router';

window['ons'] = System.import('onsenui');
import { ONS_DIRECTIVES, OnsNavigator } from 'angular2-onsenui';

import { TestChildComponent } from '../';

@Component({
  moduleId: module.id,
  selector: 'test-parent',
  templateUrl: 'test-parent.component.html',
  styleUrls: ['test-child-parent.component.css'],
  directives: [
    ONS_DIRECTIVES,
    ROUTER_DIRECTIVES
  ]
})
export class TestParentComponent implements OnInit {
  @ViewChild(OnsNavigator) private _navigator: OnsNavigator;
  subParams: any;
  title = 'Nations Test Page';

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {

  }

  goto(id: number) {
    this._navigator.pushComponent(TestChildComponent, { animation: 'slide' }, { key: 'value' });
  }

}
