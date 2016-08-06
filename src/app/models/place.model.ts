import { googleConfig } from '../config';

export class Place {
  address: string;
  phone: string;
  website: string;
  openHours: string[];
  photos: string[];

  constructor(
    address: string = '',
    phone: string = '',
    website: string = '',
    openHours: string[] = [],
    photos: string[] = []) {
    this.address = address;
    this.phone = phone;
    this.website = website;
    this.openHours = openHours;
    this.photos = photos;
  }

  static fromObject(obj) {
    if (!obj)
      return new Place();

    return new Place(
      obj.formatted_address,
      obj.formatted_phone_number,
      obj.website,
      obj.opening_hours ? obj.opening_hours.weekday_text : [],
      obj.photos ? obj.photos.map(photo => photo.getUrl(googleConfig.imageDimensions)) : []);
  }
}
