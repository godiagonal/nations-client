import { Component, OnInit } from '@angular/core';

import { GOOGLE_MAPS_DIRECTIVES, GOOGLE_MAPS_PROVIDERS } from 'angular2-google-maps/core';

import { NationService, Nation, Location, mapConfig } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'nation-map',
  templateUrl: 'nation-map.component.html',
  styleUrls: ['nation-map.component.css'],
  directives: [GOOGLE_MAPS_DIRECTIVES],
  providers: [GOOGLE_MAPS_PROVIDERS]
})
export class NationMapComponent implements OnInit {
  nations: Nation[];
  selectedNation: Nation;
  locationWatcher: any;
  currentLocation: Location = mapConfig.defaultLocation;
  userMarkerIcon: string = mapConfig.userIconUrl;
  zoom: number = mapConfig.zoom;

  constructor(private nationService: NationService) { }

  ngOnInit() {
    this.nations = this.nationService.nations;

    if ('geolocation' in navigator) {

      this.locationWatcher = navigator.geolocation.watchPosition(location => {
        if (location.coords) {
          this.currentLocation = new Location(location.coords.latitude, location.coords.longitude);
        }
      }, err => {
        console.warn('GeoLocation ERROR(' + err.code + '): ' + err.message)
      }, {
        timeout: mapConfig.locationTimeout
      });

    }
  }

  clickedMarker(nation: Nation) {
    this.selectedNation = nation;

    console.log(nation.location.distanceTo(this.currentLocation));
    console.log(nation);
  }
}
