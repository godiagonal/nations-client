import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import {
  provideLazyMapsAPILoaderConfig,
  GOOGLE_MAPS_DIRECTIVES,
  GOOGLE_MAPS_PROVIDERS
} from 'angular2-google-maps/core';

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
  ],
  providers: [
    GOOGLE_MAPS_PROVIDERS,
    provideLazyMapsAPILoaderConfig({ apiKey: mapConfig.apiKey })
  ]
})
export class NationMapComponent implements OnInit, OnDestroy {
  selectedNation: Nation;
  nations: Nation[];
  subSelectedNation: any;
  subNations: any;
  currentLocation: Location;
  userMarkerIcon: string = mapConfig.userIconUrl;

  constructor(
    private router: Router,
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
  }

  clickedMarker(nation: Nation) {
    // This will trigger selectedNation to update everywhere in the app
    this.router.navigate(['/map', nation.slug]);
  }
}
