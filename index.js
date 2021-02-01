import CarEs6 from "./src/car.es6.js";
import CarEs5 from "./src/car.es5.js";
import CombatCarEs6 from "./src/combat-car.es6.js";
import CombatCarEs5 from "./src/combat-car.es5.js";

const carEs6 = new CarEs6();
carEs6.ride();
carEs6.stop();
carEs6.turnRight();
carEs6.turnLeft();
carEs6.toString();

const carEs5 = new CarEs5();
carEs5.ride();
carEs5.stop();
carEs5.turnRight();
carEs5.turnLeft();
carEs5.toString();

const combatCarEs6 = new CombatCarEs6();
combatCarEs6.fire();
combatCarEs6.toString();

const combatCarEs5 = new CombatCarEs5();
combatCarEs5.fire();
combatCarEs5.toString();

const carEs6CreatedByStaticMethod = CarEs6.create();
const carEs5CreatedBYStaticMethod = CarEs5.create();
