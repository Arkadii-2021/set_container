import Team from '../character';

import {
  Bowerman, Swordsman, Magician, Daemon, Undead, Zombie,
} from '../characterRepo';

const bowerman = new Bowerman().type;
const swordsman = new Swordsman().type;
const magician = new Magician().type;
const daemon = new Daemon().type;
const undead = new Undead().type;
const zombie = new Zombie().type;

const teamHeroes = new Team();

teamHeroes.add(bowerman);
teamHeroes.add(swordsman);
teamHeroes.add(magician);

teamHeroes.addAll(daemon, undead, zombie);
teamHeroes.addAll(daemon, undead, zombie);


test('set Team to Array', () => {
  expect(teamHeroes.toArray()).toEqual(expect.arrayContaining(teamHeroes.toArray()));
});

test('Size in Set', () => {
  expect(teamHeroes.toArray().length).toBe(6);
});
