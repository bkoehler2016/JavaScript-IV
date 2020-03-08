/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday
function GameObject(attribute) {
  this.createdAt = attribute.createdAt;
  this.name = attribute.name;
  this.dimensions = attribute.dimensions;
}
GameObject.prototype.destroy = function () {
  return `${this.name} was removed from the game.`;
};

function CharacterStats(stats) {
  GameObject.call(this, stats);
  this.healthPoints = stats.healthPoints;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function () {
  return `${this.name} took damage.`;
};


function Humanoid(profile) {
  CharacterStats.call(this, profile);
  this.team = profile.team;
  this.weapons = profile.weapons;
  this.language = profile.language;
}
Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function () {
  return `${this.name} offers a greeting in ${this.language}.`;
};

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: ['Staff of Shamalama'],
  language: 'Common Tongue'
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: ['Giant Sword', 'Shield'],
  language: 'Common Tongue'
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: ['Bow', 'Dagger'],
  language: 'Elvish'
});

const Jedi = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 25,
  name: 'Luke',
  team: 'Rebel',
  weapons: ['LightSaber'],
  language: 'Common'
});
const Sith = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 40,
  name: 'Darth Vader',
  team: 'Imperial',
  weapons: ['LightSaber', 'Blaster'],
  language: 'Common'
});
2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
class GameObject {
    constructor(attributes) {
        this.createdAt = attributes.createdAt;
        this.name = attributes.name;
        this.dimensions = attributes.dimensions;
    }
    destroy() {
        return `${this.name} was removed from the game.`;
    }
}

class CharacterStats extends GameObject {
    constructor(stats) {
        super(stats);

        this.healthPoints = stats.healthPoints;
    }
    takeDamage() {
        return `${this.name} took damage.`;
    }
}

class Humanoid extends CharacterStats {
    constructor(profile) {
        super(profile);

        this.team = profile.team;
        this.weapons = profile.weapons;
        this.language = profile.language;
    }
    greet() {
        return `${this.name} offers a greeting in ${this.language}.`;
    }
}
const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 1,
        height: 1
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: ['Staff of Shamalama'],
    language: 'Common Tongue'
});

const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 2
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: ['Giant Sword', 'Shield'],
    language: 'Common Tongue'
});

const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: ['Bow', 'Dagger'],
    language: 'Elvish'
});
const Jedi = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4
    },
    healthPoints: 25,
    name: 'Luke',
    team: 'Rebel',
    weapons: ['LightSaber'],
    language: 'Common'
});
const Sith = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4
    },
    healthPoints: 40,
    name: 'Darth Vader',
    team: 'Imperial',
    weapons: ['LightSaber', 'Blaster'],
    language: 'Common'
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(`${Jedi.name} hits ${Sith.name} with ${Jedi.weapons} `);
console.log(Sith.takeDamage());
console.log(`${Sith.name} shoots ${Jedi.name} with ${Sith.weapons[1]}`);
console.log(Jedi.takeDamage());