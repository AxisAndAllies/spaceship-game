import { Weapon, Laser } from './parts/weapon';
import { Shield } from './parts/shield';

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
  takeHit(dmg, isAvoidable) {
    if (isAvoidable && Math.random() < this.state.target.state.dodge) {
      console.log('ship dodged.');
      return;
    }
    // random shield, if any, takes damage
    const shields = this.equipment.filter((e) => e instanceof Shield);
    const dmgTaken = 0;
    if (shields.length) {
      const randomShield = shields[Math.floor(Math.random() * shields.length)];
      dmgTaken = randomShield.takeHit(dmg);
    }
    if (dmg > dmgTaken) {
      // remaining damage is dealt to ship
      this.state.health = Math.max(this.state.health - (dmg - dmgTaken), 0);
    }
  }
  fire() {
    if (!e.state.target) {
      console.log('no target selected.');
      return;
    }
    this.equipment
      .filter((e) => e instanceof Weapon)
      .forEach((e) => {
        let isAvoidable = e instanceof Laser; // lasers can't be dodged
        this.state.target.takeHit(e.fire(), isAvoidable);
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
