import { Weapon, Laser } from './parts/weapon';
class Ship {
  equipment = [];
  modifiers = [];
  baseStat = {};
  state = {};

  constructor() {}
  initializeState() {
    this.state = {
      target: null,
      ...this.baseStat,
    };
  }
  setTarget(ship) {
    this.state.target = ship;
  }
  addEquipment(equipment) {
    if (this.state.equipmentSlots > this.equipment.length)
      this.equipment.push(equipment);
  }
  addModifier(mod) {
    if (this.state.modifierSlots > this.modifiers.length)
      this.modifiers.push(this.modifiers);
  }
  takeHit(dmg) {
    // TODO: use shields to take hit first?
    this.state.health = Math.max(this.state.health - dmg, 0);
  }
  fire() {
    if (!e.state.target) {
      console.log('no target selected.');
      return;
    }
    this.equipment.forEach((e) => {
      if (e instanceof Weapon) {
        if (Math.random() > e.state.accuracy) {
          console.log('missed.');
          return;
        }
        if (
          !(e instanceof Laser) && // lasers can't be dodged
          Math.random() < this.state.target.state.dodge
        ) {
          console.log('ship dodged.');
          return;
        }
        this.state.target.takeHit(e.fire());
      }
    });
  }
}

export class Fighter extends Ship {
  constructor() {
    super();
    this.initializeState();
  }
  baseStat = {
    speed: 14,
    health: 300,
    dodge: 0.8,
    equipmentSlots: 3,
    modifierSlots: 2,
  };
}
export class Gunship extends Ship {
  constructor() {
    super();
    this.initializeState();
  }
  baseStat = {
    speed: 10,
    health: 600,
    dodge: 0.5,
    equipmentSlots: 5,
    modifierSlots: 2,
  };
}
export class Frigate extends Ship {
  constructor() {
    super();
    this.initializeState();
  }
  baseStat = {
    speed: 8,
    health: 900,
    dodge: 0.3,
    equipmentSlots: 6,
    modifierSlots: 3,
  };
}

export class Destroyer extends Ship {
  constructor() {
    super();
    this.initializeState();
  }
  baseStat = {
    speed: 6,
    health: 1200,
    dodge: 0.2,
    equipmentSlots: 8,
    modifierSlots: 3,
  };
}

export class Cruiser extends Ship {
  constructor() {
    super();
    this.initializeState();
  }
  baseStat = {
    speed: 4,
    health: 1600,
    dodge: 0.1,
    equipmentSlots: 10,
    modifierSlots: 4,
  };
}

export class BattleShip extends Ship {
  constructor() {
    super();
    this.initializeState();
  }
  baseStat = {
    speed: 3,
    health: 2000,
    dodge: 0.05,
    equipmentSlots: 12,
    modifierSlots: 5,
  };
}
