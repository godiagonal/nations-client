import { MathExtensions } from '../extensions';

export class Location {
  latitude: number;
  longitude: number;

  constructor(lat: number = 0, lon: number = 0) {
    this.latitude = lat;
    this.longitude = lon;
  }

  distanceTo(location: Location) {
    return MathExtensions.calcDistance(this, location);
  }

  static fromObject(obj) {
    if (!obj)
      return new Location();

    return new Location(
      obj.latitude,
      obj.longitude);
  }
}
