export class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.level = 1;
    if (name === null || typeof name !== 'string' || (name.length <= 2 || name.length > 10)) throw new Error();
  }
}

export class Bowerman extends Character {
  constructor(name, health, level) {
    super(name);
    this.type = 'Bowerman';
    this.attack = 25;
    this.defence = 25;
  }
}
export class Swordsman extends Character {
  constructor(name, health, level) {
    super(name);
    this.type = 'Swordsman';
    this.attack = 40;
    this.defence = 10;
  }
}
export class Magician extends Character {
  constructor(name, health, level) {
    super(name);
    this.type = 'Magician';
    this.attack = 10;
    this.defence = 40;
  }
}
export class Daemon extends Character {
  constructor(name, health, level) {
    super(name);
    this.type = 'Daemon';
    this.attack = 10;
    this.defence = 40;
  }
}
export class Undead extends Character {
  constructor(name, health, level) {
    super(name);
    this.type = 'Undead';
    this.attack = 25;
    this.defence = 25;
  }
}
export class Zombie extends Character {
  constructor(name, health, level) {
    super(name);
    this.type = 'Zombie';
    this.attack = 40;
    this.defence = 10;
  }
}
