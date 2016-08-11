import { Component, OnInit, Input } from '@angular/core';

import { DateFormatPipe } from 'angular2-moment';

import { Nation, Location } from '../../../models';
import { LocationService } from '../../../services';

@Component({
  moduleId: module.id,
  selector: 'nation-details',
  templateUrl: 'nation-details.component.html',
  styleUrls: ['nation-details.component.css'],
  pipes: [DateFormatPipe]
})
export class NationDetailsComponent implements OnInit {
  @Input() nation: Nation;
  @Input() showBorder: boolean = true;
  @Input() showVisitors: boolean = true;
  @Input() showEvent: boolean = true;
  @Input() showDistance: boolean = true;
  @Input() showContactInfo: boolean = true;
  currentLocation: Location;

  constructor(private locationService: LocationService) { }

  ngOnInit() {
    this.currentLocation = this.locationService.currentLocation;
  }
}
