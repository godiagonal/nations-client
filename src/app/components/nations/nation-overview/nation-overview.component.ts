import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NationMapComponent, NationDetailsComponent } from '../'
import { NationService } from '../../../services';
import { Nation } from '../../../models';

@Component({
  moduleId: module.id,
  selector: 'nation-overview',
  templateUrl: 'nation-overview.component.html',
  styleUrls: ['nation-overview.component.css'],
  directives: [
    NationMapComponent,
    NationDetailsComponent
  ]
})
export class NationOverviewComponent implements OnInit, OnDestroy {
  subParams: any;
  subNations: any;
  subSelectedNation: any;
  selectedNation: Nation;
  selectedSlug: string;

  constructor(
    private route: ActivatedRoute,
    private nationService: NationService) { }

  ngOnInit() {
    // Subscribe to global variable selectedNation
    this.subSelectedNation = this.nationService.selectedNationSub.subscribe((nation: Nation) => {
      this.selectedNation = nation;
      //console.log('overview selectedNation sub');
    });

    // Subscribe to global variable nations, this basically triggers
    // a reload every time the nations load or change in some way, so
    // that the nation from url can be selected after the nations are
    // loaded
    this.subNations = this.nationService.nationsSub.subscribe(() => {
      this.nationService.setNationFromSlug(this.selectedSlug);
      //console.log('overview nations sub');
    });

    // Subscribe to changes in url
    this.subParams = this.route.params.subscribe(params => {
      if (params['slug'] !== undefined) {
        this.selectedSlug = params['slug'];
        this.nationService.setNationFromSlug(this.selectedSlug);
        //console.log('overview params sub');
      }
    });
  }

  ngOnDestroy() {
    this.subSelectedNation.unsubscribe();
    this.subNations.unsubscribe();
    this.subParams.unsubscribe();
  }

  checkNation() {
    console.log(this.selectedNation);
  }

}
