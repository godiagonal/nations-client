export class Hours {
  open: Date;
  close: Date;

  constructor(open: Date = null, close: Date = null) {
    this.open = open;
    this.close = close;
  }

  static fromObject(obj) {
    if (!obj)
      return new Hours();

    return new Hours(
      new Date(obj.open),
      new Date(obj.close));
  }
}
