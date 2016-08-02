import { Component, OnInit, Input } from '@angular/core';

import { Nation, Location } from '../../../models';
import { LocationService } from '../../../services';

@Component({
  moduleId: module.id,
  selector: 'nation-details',
  templateUrl: 'nation-details.component.html',
  styleUrls: ['nation-details.component.css']
})
export class NationDetailsComponent implements OnInit {
  @Input() nation: Nation;
  currentLocation: Location;

  constructor(private locationService: LocationService) { }

  ngOnInit() {
    this.currentLocation = this.locationService.currentLocation;
  }
}
