// let test = require('./test');
import helpers from './helpers';
import Vehicule from './models/Vehicule';

helpers.fn1();
helpers.fn2();

/* class Car extends Vehicule {

} */

let Car = function (color) {
    this.color = color;

    return this;
}

let car = new Car('red');
car.color = 'blue';

console.log(car.color);
