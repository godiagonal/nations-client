import { Component, OnInit } from '@angular/core';

import { ONS_DIRECTIVES, OnsNavigator, PageParams } from 'angular2-onsenui';

@Component({
  moduleId: module.id,
  selector: 'ons-page',
  templateUrl: 'test-child.component.html',
  styleUrls: ['test-child.component.css'],
  directives: [ONS_DIRECTIVES]
})
export class TestChildComponent implements OnInit {

  constructor(private _navigator: OnsNavigator, private _params: PageParams) {
    console.log('parameters:', _params.data);
  }

  ngOnInit() {
  }

  push() {
    this._navigator.pushComponent(TestChildComponent, { animation: 'slide' }, { random: Math.random() });
  }

  pop() {
    this._navigator.popComponent();
  }

}
