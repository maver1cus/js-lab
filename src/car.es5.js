export default function Car() {}

Car.prototype.ride = function() {
  console.log(`ride`);
}

Car.prototype.stop = function() {
  console.log(`stop`);
}

Car.prototype.turnRight = function() {
  console.log(`turnRight`);
}

Car.prototype.turnLeft = function() {
  console.log(`turnLeft`);
}

Car.prototype.toString = function() {
  console.log(`car`);
}
