import { Injectable } from '@angular/core';

import { Place, Nation } from '../models';

declare var google: any;

@Injectable()
export class GoogleService {
  private placesService: any;

  constructor() {
    this.tryInitServices();
  }

  private tryInitServices(): boolean {
    if (google && google.maps) {
      this.placesService = new google.maps.places.PlacesService(document.createElement('div'));
      return true;
    }
    return false;
  }

  getPlace(nation: Nation): Promise<Place> {
    return new Promise((resolve, reject) => {
      // Use cached place if it exists to reduce amount of API calls
      if (nation.cachedPlace) {
        resolve(nation.cachedPlace);
      }
      else {
        // Get place from API
        if (!this.placesService && !this.tryInitServices()) {
          reject(new Error('placesService is not initiated.'));
        }
        else {
          this.placesService.getDetails({ placeId: nation.googlePlaceId }, (placeObj, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
              // Cache the found place for later use
              let place = Place.fromObject(placeObj);
              nation.cachedPlace = place;
              resolve(place);
            }
            else {
              reject(status);
            }
          });
        }
      }
    });
  }
}
