import { nationConfig, nationStatus } from '../config';
import { ArrayExtensions } from '../extensions';
import { Location } from './location.model';
import { Event } from './event.model';
import { Hours } from './hours.model';

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
  todaysHours: Hours;
  todaysEvent: string;
  events: Event[];

  get isOpenToday() {
    return this.todaysHours ? true : false;
  }

  get isOpenNow() {
    if (!this.isOpenToday || !this.todaysHours.isKnown) {
      return false;
    }

    let now = Date.now();
    let open = this.todaysHours.open.getTime();
    let close = this.todaysHours.close.getTime();

    return now >= open && now <= close;
  }

  get visitorStatus() {
    return this.statusObj ? this.statusObj.text : '';
  }

  get markerIcon() {
    return this.statusObj ? this.statusObj.iconUrl : '';
  }

  get cssClass() {
    return this.statusObj ? this.statusObj.cssClass : '';
  }

  get visitorQuota() {
    if (this.maxVisitors === 0) { return 0; }
    return this.currentVisitors / this.maxVisitors;
  }

  get statusObj() {
    let status = this.status;
    for (let i = 0; i < nationConfig.statuses.length; i++) {
      if (nationConfig.statuses[i].status === status) { return nationConfig.statuses[i]; }
    }

    return null;
  }

  get status() {
    let s = nationStatus.closed;
    if (this.isOpenToday) {
      if (this.isOpenNow) {
        if (this.visitorQuota < nationConfig.crowdedThreshold) {
          s = nationStatus.open;
        }
        else {
          s = nationStatus.openCrowded;
        }
      }
      else {
        s = nationStatus.openLater;
      }
    }

    return s;
  }

  sortEvents(args) {
    this.events.sort(ArrayExtensions.dynamicSortMultiple(args));
  }

  constructor(
    id: number = 0,
    name: string = '',
    currentVisitors: number = 0,
    maxVisitors: number = 0,
    logo: string = '',
    todaysHours: Hours = null,
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
    this.todaysHours = todaysHours;
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
      obj.todaysHours ? Hours.fromObject(obj.todaysHours) : null,
      obj.todaysEvent,
      obj.place ? obj.place.address : '',
      obj.place ? obj.place.phone : '',
      obj.place ? obj.place.website : '',
      obj.photos ? obj.photos : [],
      obj.place ? Location.fromObject(obj.place.location) : new Location(),
      obj.events ? obj.events.map(ev => Event.fromObject(ev)) : []);
  }
}
