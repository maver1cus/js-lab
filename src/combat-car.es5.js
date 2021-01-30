import Car from './car.es5.js'

export default function CombatCar() {
  Car.apply(this);
}

CombatCar.prototype = Object.create(Car.prototype);
CombatCar.prototype.constructor = CombatCar;

CombatCar.prototype.fire = function() {
  console.log(`fire`);
}

CombatCar.prototype.toString = function() {
  console.log(`combat car`);
}
