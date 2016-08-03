import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';

import { GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core';

import { NationService, LocationService } from '../../../services';
import { Nation, Location } from '../../../models';
import { mapConfig } from '../../../config';
import { StyledMapDirective } from '../../../directives';

@Component({
  moduleId: module.id,
  selector: 'nation-map',
  templateUrl: 'nation-map.component.html',
  styleUrls: ['nation-map.component.css'],
  directives: [
    GOOGLE_MAPS_DIRECTIVES,
    StyledMapDirective
  ]
})
export class NationMapComponent implements OnInit, OnDestroy {
  @Output() select = new EventEmitter();
  selectedNation: Nation;
  nations: Nation[];
  subSelectedNation: any;
  subNations: any;
  currentLocation: Location;
  userMarkerIcon: string = mapConfig.userIconUrl;

  constructor(
    private nationService: NationService,
    private locationService: LocationService) { }

  ngOnInit() {
    this.currentLocation = this.locationService.currentLocation;

    // Subscribe to global variable nations
    this.subNations = this.nationService.nationsSub.subscribe((nations: Nation[]) => {
      this.nations = nations;
    });

    // Subscribe to global variable selectedNation
    this.subSelectedNation = this.nationService.selectedNationSub.subscribe((nation: Nation) => {
      this.selectedNation = nation;
    });
  }

  ngOnDestroy() {
    this.subSelectedNation.unsubscribe();
    this.subNations.unsubscribe();
  }

  clickedMarker(nation: Nation) {
    this.select.emit(nation);
  }
}
