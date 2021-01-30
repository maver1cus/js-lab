import Car from './car.es6.js';

export default class CombatCar extends Car {
  fire() {
    console.log(`fire`);
  }

  toString() {
    console.log(`combat car`);
  }
}
