export class Character {
  constructor() {
    this.health = 100;
    this.level = 1;
  }
}

export class Bowerman extends Character {
  constructor(health, level) {
	super();
    this.type = 'Bowerman';
    this.attack = 25;
    this.defence = 25;
  }
}
export class Swordsman extends Character {
  constructor(health, level) {
	super();
    this.type = 'Swordsman';
    this.attack = 40;
    this.defence = 10;
  }
}
export class Magician extends Character {
  constructor(health, level) {
	super();
    this.type = 'Magician';
    this.attack = 10;
    this.defence = 40;
  }
}
export class Daemon extends Character {
  constructor(health, level) {
	super();
    this.type = 'Daemon';
    this.attack = 10;
    this.defence = 40;
  }
}
export class Undead extends Character {
  constructor(health, level) {
	super();
    this.type = 'Undead';
    this.attack = 25;
    this.defence = 25;
  }
}
export class Zombie extends Character {
  constructor(health, level) {
    super();
    this.type = 'Zombie';
    this.attack = 40;
    this.defence = 10;
  }
}
