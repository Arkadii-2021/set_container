export default class Team {
  constructor() {
    this.name = new Set();
  }

  add(character) {
    const charactersName = [];
    const { name } = character;
    this.name.forEach((c) => {
      charactersName.push(c.name);
    });
    if (!this.name.has(character) && !charactersName.includes(name)) {
      this.name.add(character);
    } else {
      throw new Error();
    }
  }

  addAll(...characters) {
    characters.forEach((character) => this.name.add(character));
  }

  toArray() {
    const charactersArr = [...this.name];
    return charactersArr;
  }
}
