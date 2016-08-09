import { Component, OnInit, ViewChild } from '@angular/core';

window['ons'] = System.import('onsenui');
import { ONS_DIRECTIVES, OnsNavigator } from 'angular2-onsenui';

import { TestChildComponent } from '../';
import { NationService } from '../../../services';
import { Nation } from '../../../models';

@Component({
  moduleId: module.id,
  selector: 'test-parent',
  templateUrl: 'test-parent.component.html',
  styleUrls: ['test-parent.component.css'],
  directives: [
    ONS_DIRECTIVES
  ]
})
export class TestParentComponent implements OnInit {
  title = 'Test';
  nations: Nation[];
  subNations: any;

  constructor(private nationService: NationService) { }

  ngOnInit() {
    // Subscribe to global variable nations
    this.subNations = this.nationService.nationsSub.subscribe((nations: Nation[]) => {
      this.nations = nations;
      console.log(nations);
    });
  }
}
