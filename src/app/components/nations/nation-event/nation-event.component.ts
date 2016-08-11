import { Component, OnInit, Input } from '@angular/core';

import { DateFormatPipe } from 'angular2-moment';

import { Event } from '../../../models';

@Component({
  moduleId: module.id,
  selector: 'nation-event',
  templateUrl: 'nation-event.component.html',
  styleUrls: ['nation-event.component.css'],
  pipes: [DateFormatPipe]
})
export class NationEventComponent implements OnInit {
  @Input() event: Event;

  constructor() { }

  ngOnInit() { }
}
