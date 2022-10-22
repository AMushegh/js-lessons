function Airplane(name) {
  this.name = name;
  this.isFlying = false;

  this.takeOff = function () {
    this.isFlying = true;
  };
}

Airplane.prototype.land = function () {
  this.isFlying = false;
};

const airbus = new Airplane("a320");
console.log(airbus);

airbus.takeOff();
console.log(airbus);

airbus.land();
console.log(airbus);
