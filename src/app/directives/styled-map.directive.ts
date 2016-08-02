import { Directive } from '@angular/core';

import { GoogleMapsAPIWrapper } from 'angular2-google-maps/core';
import { MapOptions } from 'angular2-google-maps/core/services/google-maps-types';

@Directive({
  selector: 'styled-map'
})
export class StyledMapDirective {

  constructor(private wrapper: GoogleMapsAPIWrapper) {
    this.wrapper.getNativeMap().then((m) => {
      let options: MapOptions = {
        zoom: 15,
        disableDefaultUI: true,
        disableDoubleClickZoom: true,
        zoomControl: false,
        streetViewControl: false,
        keyboardShortcuts: false,
        styles: [
          {
            featureType: 'all',
            elementType: 'all',
            stylers: [
              { saturation: -25 }
            ]
          }, {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [
              { visibility: 'simplified' }
            ]
          }, {
            featureType: 'road',
            elementType: 'labels',
            stylers: [
              { visibility: 'off' }
            ]
          }, {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [
              { visibility: 'off' }
            ]
          }
        ]
      };
      m.setOptions(options);
    });
  }
}
