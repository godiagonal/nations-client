import { MathExtensions } from '../extensions';

export class Location {
  latitude: number;
  longitude: number;

  constructor(lat: number = 0, lon: number = 0) {
    this.latitude = lat;
    this.longitude = lon;
  }

  distanceTo(location: Location) {
    let distance = MathExtensions.calcDistance(this, location);
    let unit = 'm';

    if (distance > 1000) {
      distance = Math.round(distance / 1000);
      unit = 'km';
    }

    return { distance: distance, unit: unit };
  }

  static fromObject(obj) {
    if (!obj)
      return new Location();

    return new Location(
      obj.latitude,
      obj.longitude);
  }
}
