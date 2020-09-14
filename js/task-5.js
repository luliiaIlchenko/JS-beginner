// Ex 1
/*// Write code under this line
const Account = function Account(login, email) {
  this.login = login;
  this.email = email;
};

Account.prototype.getInfo = function () {
  return `login : ${this.login}, email: ${this.email}`;
};

console.log(typeof Account.prototype.getInfo);
// 'function'

const mango = new Account("Mangozedog", "mango@dog.woof");
//console.log(mango.getInfo());
// 'login : Mangozedog, email: mango@dog.woof'

// const poly = new Account( 'Poly', 'poly@mail.com');
//console.log(poly.getInfo());
// 'login : Poly, email: poly@mail.com'
*/

//Ex 2
// Write code under this line
/*"use strict";
class User {
    constructor(name, age, followers) {
        this.name = name;
        this.age = age;
        this.followers = followers;
    }

    getInfo() {
        return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
            ;
    }
}


// console.log(typeof User);
// 'function'

// const mango = new User('Mango', 2, 20);
// console.log(mango.getInfo()); 
// 'User Mango is 2 years old and has 20 followers'

// console.log(typeof mango.getInfo); 
// 'function'  

// const poly = new User( 'Poly', 3, 17);
// console.log(poly.getInfo());
// 'User Poly is 3 years old and has 17 followers'
*/

//Ex 3
// Write code under this line
/*class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    if (index != -1) {
      this.items.splice(index, 1);
    }
  }
}

// console.log(typeof Storage);
// 'function'

const goods = ["Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор"];

// const storage = new Storage(goods);

// console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор'
] */

// storage.addItem('Дроид');
// console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */

// storage.removeItem('Пролонгер');
// console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */

//Ex 4
// Write code under this line
/*class StringBuilder {
    constructor(str) {
        this._value = str;
    }

    get value() {
        return this._value;
    }

    append(str) {
        this._value += str;
    }

    prepend(str) {
        this._value = str + this._value;
    }

    pad(str) {
        this.prepend(str);
        this.append(str);
    }
}

// console.log(typeof StringBuilder);
// 'function'


// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='
*/

//Ex 5
/*class Car {
  // Write code under this line
  getSpecs(car) {
    return `maxSpeed: ${car._maxSpeed}, speed: ${car._speed}, 
        isOn: ${car._isOn}, distance: ${car._distance}, price: ${car._price}`;
  }
  constructor(car) {
    this._speed = 0;
    this._price = car.price;
    this._maxSpeed = car.maxSpeed;
    this._isOn = false;
    this._distance = 0;
  }
  get price() {
    return this._price;
  }
  set price(price) {
    this._price = _price;
  }
  turnOn() {
    this._isOn = true;
  }
  turnOff() {
    this._isOn = false;
  }
  accelerate(value) {
    let newSpeed = this._speed + value;
    if (newSpeed <= this._maxSpeed) {
      this._speed = newSpeed;
    }
  }
  decelerate(value) {
    let newSpeed = this._speed - value;
    if (newSpeed > 0) {
      this._speed = newSpeed;
    }
  }
  drive(hours) {
    if (this._isOn) {
      this._distance += hours * this._speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

// console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

// console.log(mustang.price); // 2000
mustang.price = 4000;
// console.log(mustang.price); // 4000
*/
/*
class Car {
  // Write code under this line
  getSpecs(car) {
    console.log(
      `maxSpeed: ${car._maxSpeed}, speed: ${car._speed}, isOn: ${car._isOn}, distance: ${car._distance}, price: ${car._price}`
    );
  }
  constructor(car) {
    this._speed = 0;
    this._price = car.price;
    this._maxSpeed = car.maxSpeed;
    this._isOn = false;
    this._distance = 0;
  }
  get price() {
    return this._price;
  }
  set price(price) {
    this._price = price;
  }
  turnOn() {
    this._isOn = true;
  }
  turnOff() {
    this._isOn = false;
  }
  accelerate(value) {
    let newSpeed = this._speed + value;
    if (newSpeed <= this._maxSpeed) {
      this._speed = newSpeed;
    }
  }
  decelerate(value) {
    let newSpeed = this._speed - value;
    if (newSpeed > 0) {
      this._speed = newSpeed;
    }
  }
  drive(hours) {
    if (this._isOn) {
      this._distance += hours * this._speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

// console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

// console.log(mustang.price); // 2000
mustang.price = 4000;
// console.log(mustang.price); // 4000
*/

/*class Car {
  // Write code under this line
  static getSpecs(car) {
    return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`;
  }
  constructor(car) {
    this.maxSpeed = car.maxSpeed;
    this.speed = 0;
    this.isOn = false;
    this.distance = 0;
    this._price = car.price;
  }
  get price() {
    return this._price;
  }
  set price(value) {
    this._price = value;
  }
  turnOn() {
    this.isOn = true;
  }
  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }
  accelerate(value) {
    let newSpeed = this.speed + value;
    if (newSpeed <= this.maxSpeed) {
      this.speed = newSpeed;
    } else {
      this.speed = this.maxSpeed;
    }
  }
  decelerate(value) {
    let newSpeed = this.speed - value;
    if (newSpeed > 0) {
      this.speed = newSpeed;
    } else {
      this.speed = 0;
    }
  }
  drive(hours) {
    if (this.isOn) {
      this.distance += hours * this.speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
*/
