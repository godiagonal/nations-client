import { Component, OnInit, OnDestroy } from '@angular/core';

import { ONS_DIRECTIVES, OnsNavigator, PageParams } from 'angular2-onsenui';

import { NationMapComponent, NationDetailsComponent } from '../'
import { OnsBackButtonCustomComponent } from '../../shared'
import { NationService } from '../../../services';
import { Nation } from '../../../models';

@Component({
  moduleId: module.id,
  selector: 'ons-page',
  templateUrl: 'nation-overview.component.html',
  styleUrls: ['nation-overview.component.css'],
  directives: [
    NationMapComponent,
    NationDetailsComponent,
    OnsBackButtonCustomComponent,
    ONS_DIRECTIVES
  ]
})
export class NationOverviewComponent implements OnInit, OnDestroy {
  subSelectedNation: any;
  selectedNation: Nation;

  constructor(
    private nationService: NationService,
    private navigator: OnsNavigator,
    private params: PageParams) { }

  ngOnInit() {
    let nationParam = this.params.data['nation'];
    if (nationParam instanceof Nation || !nationParam) {
      this.nationService.selectedNation = nationParam;
    }

    // Subscribe to global variable selectedNation
    this.subSelectedNation = this.nationService.selectedNationSub.subscribe((nation: Nation) => {
      this.selectedNation = nation;
      //console.log('overview selectedNation sub');
    });
  }

  ngOnDestroy() {
    this.subSelectedNation.unsubscribe();
  }

  select(nation: Nation) {
    this.nationService.selectedNation = nation;
  }
}
