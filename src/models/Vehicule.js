export default class Vehicule {
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
