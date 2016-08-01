import {
  Location,
  mapConfig
} from './';

export class Nation {
  id: number;
  name: string;
  currentVisitors: number;
  maxVisitors: number;
  location: Location;
  image: string;

  get visitorQuota() {
    if (this.maxVisitors === 0) { return 0; }
    return this.currentVisitors / this.maxVisitors;
  }

  get markerIcon() {
    mapConfig.icons.forEach(icon => {
      if (this.visitorQuota >= icon.threshold) { return icon.iconUrl; }
    });
    return mapConfig.icons[mapConfig.icons.length - 1].iconUrl;
  }

  constructor(
    id: number = 0,
    name: string = '',
    currentVisitors: number = 0,
    maxVisitors: number = 0,
    location: Location = new Location(),
    image: string = '') {
    this.id = id;
    this.name = name;
    this.currentVisitors = currentVisitors;
    this.maxVisitors = maxVisitors;
    this.location = location;
    this.image = image;
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
      obj.image);
  }
}
