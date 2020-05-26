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

/**
 * TP Calculatrice
 */

import Calculator from './Calculator';
let calculator = new Calculator();

// 1ère étape : Déclarer un événement au clic sur les button
// querySelector, getElementsBy... addEventListener, onclick
// 2ème étape : Récupérer la valeur du button cliqué
// 3ème étape : Modifier un objet existant dans Calculator avec
// l'événement du clic
// 4ème étape : Distinguer les opérateurs des chiffres.
// Si c'est un chiffre, on l'ajoute au chiffre précédent pour faire
// un nombre sino, on stocke l'opérateur.

calculator.init();
