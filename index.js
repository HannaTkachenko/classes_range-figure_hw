class RangeValidator {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
  get from() {
    return this._from;
  }
  set from(from) {
    if (typeof from !== "number") {
      throw new TypeError("must be number");
    }
    if (from <= 0 || Number.isInteger(from) === false) {
      throw new RangeError("range includes only positive integer number");
    }
    this._from = from;
  }

  get to() {
    return this._to;
  }
  set to(to) {
    if (this.from > to) {
      throw new RangeError("start of range must be less than it`s end");
    }
    if (to <= 0 || Number.isInteger(to) === false) {
      throw new RangeError("range includes only positive integer number");
    }
    if (typeof to !== "number") {
      throw new TypeError("must be number");
    }
    this._to = to;
  }

  get range() {
    return [this.from, this.to];
  }

  validate(number) {
    if (number < this.from || number > this.to) {
      throw new Error("range NOT includes your number");
    } else {
      return `range includes ${number}`;
    }
  }
}
const range = new RangeValidator(5, 10);
