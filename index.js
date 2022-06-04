//Создать класс RangeValidator, со следующими свойствами:
//■ from (number);
//■ to (number);
//Реализовать getter'ы и setter'ы для обоих свойств
//Реализовать getter range, который будет возвращать массив с двумя числами диапазона
//Реализовать метод validate, который будет принимать число и проверить входит ли число в указанный диапазон. Метод возвращает значение, если значение валидно. И кинет ошибку, если нет.

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
    } else if (number === "" || number === undefined) {
      throw new Error("type a number, not empty string");
    } else {
      return `range includes ${number}`;
    }
  }
}
const range = new RangeValidator(5, 10);

//Создать класс Figure3D
//Создать классы-потомки для Шара, Цилиндра и Куба.
//У всех классов должен быть метод для рассчета объема.

class Figure3D {
  constructor(name) {
    this.name = name;
  }
  getVolume() {
    return 0;
  }
}

class Sphere extends Figure3D {
  constructor(name, radius) {
    super("sphere");
    this.radius = radius;
  }

  getVolume() {
    return (4 / 3) * Math.PI * (this.radius * this.radius * this.radius);
  }
}

class Cylinder extends Sphere {
  constructor(name, radius, height) {
    super("cylinder", radius);
    this.height = height;
  }
  getVolume() {
    return Math.PI * (this.radius * this.radius) * this.height;
  }
}

class Cube extends Figure3D {
  constructor(name, height) {
    super("cube");
    this.height = height;
  }

  getVolume() {
    return this.height * this.height * this.height;
  }
}

const sphere = new Sphere("sphere", 10);
const cylinder = new Cylinder("cylinder", 10, 10);
const cube = new Cube("cube", 10);

console.log(sphere.getVolume(10));
console.log(cylinder.getVolume(10, 10));
console.log(cube.getVolume(10));
