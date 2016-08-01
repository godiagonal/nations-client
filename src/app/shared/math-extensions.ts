import { Location } from '../nations/shared/location.model';

export class MathExtensions {
  static calcDistance(fromLocation: Location, toLocation: Location) {
    var R = 6371e3; // metres
    var φ1 = this.toRadians(fromLocation.latitude);
    var φ2 = this.toRadians(toLocation.latitude);
    var Δφ = this.toRadians(toLocation.latitude - fromLocation.latitude);
    var Δλ = this.toRadians(toLocation.longitude - fromLocation.longitude);

    var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) *
      Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    var d = R * c;

    return d;

  }

  static toRadians(deg) {
    return deg * (Math.PI/180);
  }
}
