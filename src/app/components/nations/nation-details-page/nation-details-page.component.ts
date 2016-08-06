import { Component, OnInit, OnDestroy } from '@angular/core';

import { ONS_DIRECTIVES, OnsNavigator, PageParams } from 'angular2-onsenui';

import { NationDetailsComponent } from '../';
import { OnsBackButtonCustomComponent } from '../../shared';
import { NationService, GoogleService } from '../../../services';
import { Nation, Place } from '../../../models';
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
  selectedNationPlace: Place;
  photoPlaceholder: string = nationConfig.photoPlaceholder;

  constructor(
    private nationService: NationService,
    private navigator: OnsNavigator,
    private params: PageParams,
    private googleService: GoogleService) { }

  ngOnInit() {
    let nationParam = this.params.data['nation'];
    if (nationParam instanceof Nation) {
      this.nationService.selectedNation = nationParam;
    }

    // Subscribe to global variable selectedNation
    this.subSelectedNation = this.nationService.selectedNationSub.subscribe((nation: Nation) => {
      this.selectedNation = nation;

      // Get place details for the nation
      this.googleService.getPlace(nation)
        .then(place => {
          this.selectedNationPlace = place;
        }, err => {
          console.error(err);
        });
    });
  }

  ngOnDestroy() {
    this.subSelectedNation.unsubscribe();
  }
}
