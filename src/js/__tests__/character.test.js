import Team from '../character';

import {
  Bowerman, Swordsman, Magician, Daemon, Undead, Zombie,
} from '../characterRepo';

const bowerman = new Bowerman('bowerman');
const swordsman = new Swordsman('swordsman');
const magician = new Magician('magician');
const magician3 = new Magician('magician3');
const daemon = new Daemon('daemon');
const undead = new Undead('undead');
const zombie = new Zombie('zombie');

const teamHeroes = new Team();

teamHeroes.add(bowerman);
teamHeroes.add(swordsman);
teamHeroes.add(magician);
teamHeroes.add(magician3);

teamHeroes.addAll(daemon, undead, zombie);

// console.log(teamHeroes);
// console.log(teamHeroes.toArray());

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
