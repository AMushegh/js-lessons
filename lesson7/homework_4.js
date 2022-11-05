const characterTypes = {
  bowman: "Bowman",
  swordsman: "Swordsman",
  magician: "Magician",
  daemon: "Daemon",
  undead: "Undead",
  zombie: "Zombie",
};

class Character {
  constructor(name, type, attack, defense) {
    if (typeof name === "string" && name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error("Name must have min 2 and max 10 characters");
    }
    if (Object.values(characterTypes).includes(type)) {
      this.type = type;
    } else {
      throw new Error(`Type must be one of the ${characterTypes}`);
    }
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defense = defense;
    this.alive = true;
  }

  levelUp() {
    if (this.alive) {
      this.level++;
      this.health = 100;
      this.attack *= 1.2;
      this.defense *= 1.2;
    } else {
      throw new Error("You cannot increase the level of the deceased");
    }
  }

  damage(points) {
    this.health -= points * (1 - this.defense / 100);
    if (this.health <= 0) {
      this.alive = false;
    }
  }
}

class Bowman extends Character {
  constructor(name) {
    super(name, characterTypes.bowman, 25, 25);
  }
}

class Swordsman extends Character {
  constructor(name) {
    super(name, characterTypes.swordsman, 40, 10);
  }
}

class Magician extends Character {
  constructor(name) {
    super(name, characterTypes.magician, 10, 40);
  }
}

class Daemon extends Character {
  constructor(name) {
    super(name, characterTypes.daemon, 10, 40);
  }
}

class Undead extends Character {
  constructor(name) {
    super(name, characterTypes.undead, 25, 25);
  }
}

class Zombie extends Character {
  constructor(name) {
    super(name, characterTypes.zombie, 40, 10);
  }
}

const B1 = new Bowman("Ashe");
// let B2 = new Bowman("Varus", "Bowman");

// let S1 = new Swordsman("Yasuo", "Swordsman");
// let S2 = new Swordsman("Ione", "Swordsman");

// let M1 = new Magician("Ahri", "Magician");
// let M2 = new Magician("Nami", "Magician");

// let D1 = new Daemon("K.zix", "Daemon");
// let D2 = new Daemon("Evelynn", "Daemon");

// let U1 = new Undead("Trinda", "Undead");
// let U2 = new Undead("Mundo", "Undead");

// let Z1 = new Zombie("Sion", "Zombie");
// let Z2 = new Zombie("Teemo", "Zombie");

console.log(B1);
B1.damage(25);
B1.damage(25);
B1.damage(25);
B1.damage(25);
console.log(B1);
// S1.damage(25);
B1.levelUp();
console.log(B1);
