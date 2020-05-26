// let test = require('./test');
import { test } from './test';

class Vehicule {
    constructor(color) {
        this._color = color;
    }

    get color() {
        console.log('Getter');
        return `<div>
            La voiture est ${this._color}
        </div>`;
    }

    set color(color) {
        console.log('Setter');
        this._color = color;
    }
}

class Car extends Vehicule {

}

let car = new Car('red');
car.color = 'blue';

console.log(car.color);
