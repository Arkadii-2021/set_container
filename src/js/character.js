export default class Team {
  constructor() {
    this.characterType = new Set();
  }

  add(character) {
    if (!this.characterType.has(character)) {
      this.characterType.add(character);
    } else {
      throw new Error();
    }
  }

  addAll(...characters) {
    characters.forEach((character) => this.characterType.add(character));
  }

  toArray() {
    return [...this.characterType];
  }
}
