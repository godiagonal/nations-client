import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';

import { Nation, Location } from '../../../models';
import { NationService, LocationService } from '../../../services';

@Component({
  moduleId: module.id,
  selector: 'nation-list',
  templateUrl: 'nation-list.component.html',
  styleUrls: ['nation-list.component.css']
})
export class NationListComponent implements OnInit, OnDestroy {
  @Output() select = new EventEmitter();
  selectedNation: Nation;
  nations: Nation[];
  subSelectedNation: any;
  subNations: any;
  currentLocation: Location;

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

  clickedNation(nation: Nation) {
    this.select.emit(nation);
  }

  checkNation() {
    console.log(this.selectedNation);
  }
}
