import { BehaviorSubject } from 'rxjs/Rx';

import { GoogleService } from '../services';
import { nationConfig } from '../config';
import { Location } from './location.model';
import { Place } from './place.model';

export class Nation {
  id: number;
  name: string;
  currentVisitors: number;
  maxVisitors: number;
  location: Location;
  image: string;
  slug: string;
  googlePlaceId: string;
  cachedPlace: Place;

  get visitorQuota() {
    if (this.maxVisitors === 0) { return 0; }
    return this.currentVisitors / this.maxVisitors;
  }

  get markerIcon() {
    for (let i = 0; i < nationConfig.visitorStatuses.length; i++) {
      let visitorStatus = nationConfig.visitorStatuses[i];
      if (this.visitorQuota >= visitorStatus.threshold) { return visitorStatus.iconUrl; }
    }
    return nationConfig.visitorStatuses[nationConfig.visitorStatuses.length - 1].iconUrl;
  }

  get statusClass() {
    for (let i = 0; i < nationConfig.visitorStatuses.length; i++) {
      let visitorStatus = nationConfig.visitorStatuses[i];
      if (this.visitorQuota >= visitorStatus.threshold) { return visitorStatus.cssClass; }
    }
    return nationConfig.visitorStatuses[nationConfig.visitorStatuses.length - 1].cssClass;
  }

  constructor(
    id: number = 0,
    name: string = '',
    currentVisitors: number = 0,
    maxVisitors: number = 0,
    location: Location = new Location(),
    image: string = '',
    slug: string = '',
    googlePlaceId: string = '') {
    this.id = id;
    this.name = name;
    this.currentVisitors = currentVisitors;
    this.maxVisitors = maxVisitors;
    this.location = location;
    this.image = image;
    this.slug = slug;
    this.googlePlaceId = googlePlaceId;
  }

  static fromObject(obj) {
    if (!obj)
      return new Nation();

    return new Nation(
      obj.id,
      obj.name,
      obj.currentVisitors,
      obj.maxVisitors,
      Location.fromObject(obj.location),
      obj.image,
      obj.slug,
      obj.googlePlaceId);
  }
}
