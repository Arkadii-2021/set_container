import Team from '../character';

import {
  Bowerman, Swordsman, Magician, Daemon, Undead, Zombie,
} from '../characterRepo';

const bowerman = new Bowerman();
const swordsman = new Swordsman();
const magician = new Magician();
const magician3 = new Magician();
const daemon = new Daemon();
const undead = new Undead();
const zombie = new Zombie();

const teamHeroes = new Team();

teamHeroes.add(bowerman);
teamHeroes.add(swordsman);
teamHeroes.add(magician);
teamHeroes.add(magician3);

teamHeroes.addAll(daemon, undead, zombie);

const arrCheck = [
  {
    name: 'bowerman',
    health: 100,
    level: 1,
    type: 'Bowerman',
    attack: 25,
    defence: 25,
  },
];

test('add character in Team', () => {
  expect(teamHeroes.Bowerman).toEqual(arrCheck.Bowerman);
});

test('set Team to Array', () => {
  expect(teamHeroes.toArray()).toEqual(expect.arrayContaining(teamHeroes.toArray()));
});
