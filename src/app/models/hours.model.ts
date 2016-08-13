export class Hours {
  open: Date;
  close: Date;

  get isKnown() {
    return this.open != null || this.close != null;
  }

  constructor(open: Date = null, close: Date = null) {
    this.open = open;
    this.close = close;
  }

  static fromObject(obj) {
    if (!obj)
      return new Hours();

    return new Hours(
      obj.open ? new Date(obj.open) : null,
      obj.close ? new Date(obj.close) : null);
  }
}
