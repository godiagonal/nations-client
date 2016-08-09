export class Event {
  name: string;
  description: string;
  startTime: Date;
  endTime: Date;
  attending: number;
  url: string;
  image: string;

  constructor(
    name: string = '',
    description: string = '',
    startTime: Date = null,
    endTime: Date = null,
    attending: number = 0,
    url: string = '',
    image: string = '') {
    this.name = name;
    this.description = description;
    this.startTime = startTime;
    this.endTime = endTime;
    this.attending = attending;
    this.url = url;
    this.image = image;
  }

  static fromObject(obj) {
    if (!obj)
      return new Event();

    return new Event(
      obj.name,
      obj.description,
      new Date(obj.startTime),
      new Date(obj.endTime),
      obj.attending,
      obj.url,
      obj.image);
  }
}
