import { Injectable } from '@angular/core';

import { Location } from '../models';
import { locationConfig } from '../config';

@Injectable()
export class LocationService {
  currentLocation: Location = locationConfig.defaultLocation;

  private locationWatcher: any;

  constructor() {
    if ('geolocation' in navigator) {
      this.locationWatcher = navigator.geolocation.watchPosition(location => {
        if (location.coords) {
          this.currentLocation.latitude = location.coords.latitude;
          this.currentLocation.longitude = location.coords.longitude;
        }
      }, err => {
        console.warn('GeoLocation ERROR(' + err.code + '): ' + err.message)
      }, {
        timeout: locationConfig.locationTimeout
      });
    }
  }
}
