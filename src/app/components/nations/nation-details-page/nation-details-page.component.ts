import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { ONS_DIRECTIVES, OnsNavigator, PageParams } from 'angular2-onsenui';

import { NationDetailsComponent } from '../';
import { OnsBackButtonCustomComponent } from '../../shared';
import { NationService } from '../../../services';
import { Nation } from '../../../models';
import { nationConfig } from '../../../config';

@Component({
  moduleId: module.id,
  selector: 'ons-page',
  templateUrl: 'nation-details-page.component.html',
  styleUrls: ['nation-details-page.component.css'],
  directives: [
    NationDetailsComponent,
    OnsBackButtonCustomComponent,
    ONS_DIRECTIVES
  ]
})
export class NationDetailsPageComponent implements OnInit, OnDestroy {
  subSelectedNation: any;
  selectedNation: Nation;
  photoPlaceholder: string = nationConfig.photoPlaceholder;

  constructor(
    private nationService: NationService,
    private navigator: OnsNavigator,
    private params: PageParams) { }

  ngOnInit() {
    let nationParam = this.params.data['nation'];
    if (nationParam instanceof Nation) {
      // Refresh the selected nation from API, this will update the
      // data for this nation app-wide (where there's a subscription)
      this.nationService.loadNation(nationParam.id)
        .then((nation) => {
          console.log('Nation loaded.');
          this.nationService.selectedNation = nation;
        }, err => {
          console.error(err);
        });
    }

    // Subscribe to global variable selectedNation
    this.subSelectedNation = this.nationService.selectedNationSub.subscribe((nation: Nation) => {
      this.selectedNation = nation;
    });
  }

  ngOnDestroy() {
    this.subSelectedNation.unsubscribe();
  }
}
