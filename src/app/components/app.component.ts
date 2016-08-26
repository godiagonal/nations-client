import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
//import * as ons from 'onsenui';

// the above stopped working for some reason?
window['ons'] = System.import('onsenui');

import { NationsComponent } from './nations';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    NationsComponent,
    ROUTER_DIRECTIVES
  ]
})
export class AppComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }

  navigate(route: any[]) {
    this.router.navigate(route);
  }
}
