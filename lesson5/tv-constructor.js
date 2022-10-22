function TV(name) {
  this.name = name;
  this.channel = 1;
  this.volume = 50;
}

TV.prototype.increase = function () {
  if (this.volume < 100) {
    this.volume++;
  }
};

TV.prototype.decrease = function () {
  if (this.volume > 0) {
    this.volume--;
  }
};

TV.prototype.setChannel = function (channel) {
  if (channel >= 1 && channel <= 50) {
    this.channel = channel;
  }
};

TV.prototype.resetTV = function () {
  this.channel = 1;
  this.volume = 50;
};

TV.prototype.status = function () {
  return `${this.name} at channel ${this.channel}, volume ${this.volume}`;
};

const sony = new TV("sony hd");

console.log(sony.status());

sony.increase();
sony.increase();
sony.increase();
sony.increase();
sony.increase();
sony.decrease();
sony.decrease();
sony.decrease();
sony.decrease();
sony.decrease();
sony.increase();
sony.increase();
sony.increase();
sony.increase();
sony.increase();

console.log(sony.status());

sony.setChannel(35);
console.log(sony.status());

sony.setChannel(65);
console.log(sony.status());
