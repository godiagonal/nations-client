import { Component, OnInit } from '@angular/core';

import { NationService, Nation } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'nation-list',
  templateUrl: 'nation-list.component.html',
  styleUrls: ['nation-list.component.css']
})
export class NationListComponent implements OnInit {
  nations: Nation[];

  constructor(private nationService: NationService) { }

  ngOnInit() {
    this.nations = this.nationService.nations;
  }

}
