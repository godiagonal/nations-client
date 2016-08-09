import { nationConfig } from '../config';
import { Location } from './location.model';
import { Event } from './event.model';

export class Nation {
  id: number;
  name: string;
  currentVisitors: number;
  maxVisitors: number;
  logo: string;
  address: string;
  phone: string;
  website: string;
  photos: string[];
  location: Location;
  todaysOpenHours: string;
  todaysEvent: string;
  events: Event[];

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
    logo: string = '',
    todaysOpenHours: string = '',
    todaysEvent: string = '',
    address: string = '',
    phone: string = '',
    website: string = '',
    photos: string[] = [],
    location: Location = new Location,
    events: Event[] = []) {
    this.id = id;
    this.name = name;
    this.currentVisitors = currentVisitors;
    this.maxVisitors = maxVisitors;
    this.logo = logo;
    this.todaysOpenHours = todaysOpenHours;
    this.todaysEvent = todaysEvent;
    this.address = address;
    this.phone = phone;
    this.website = website;
    this.photos = photos;
    this.location = location;
    this.events = events;
  }

  static fromObject(obj) {
    if (!obj)
      return new Nation();

    return new Nation(
      obj._id,
      obj.name,
      obj.currentVisitors,
      obj.maxVisitors,
      obj.logo,
      obj.todaysOpenHours,
      obj.todaysEvent,
      obj.place ? obj.place.address : '',
      obj.place ? obj.place.phone : '',
      obj.place ? obj.place.website : '',
      obj.place ? obj.place.photos : [],
      obj.place ? Location.fromObject(obj.place.location) : new Location(),
      obj.events ? obj.events.map(ev => Event.fromObject(ev)) : []);
  }
}
