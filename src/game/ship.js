class Ship {
  equipment = [];
  modifiers = [];
}

export class Fighter extends Ship {
  baseStat = {
    move: 14,
    health: 300,
    dodge: 0.8,
    equipmentSlots: 3,
    modifierSlots: 3,
  };
}
export class Gunship extends Ship {
  baseStat = {
    move: 10,
    health: 600,
    dodge: 0.5,
    equipmentSlots: 5,
    modifierSlots: 3,
  };
}
export class Frigate extends Ship {
  baseStat = {
    move: 8,
    health: 900,
    dodge: 0.3,
    equipmentSlots: 6,
    modifierSlots: 4,
  };
}

export class Destroyer extends Ship {
  baseStat = {
    move: 6,
    health: 1200,
    dodge: 0.2,
    equipmentSlots: 8,
    modifierSlots: 4,
  };
}

export class Cruiser extends Ship {
  baseStat = {
    move: 4,
    health: 1600,
    dodge: 0.1,
    equipmentSlots: 10,
    modifierSlots: 5,
  };
}

export class BattleShip extends Ship {
  baseStat = {
    move: 3,
    health: 2000,
    dodge: 0.05,
    equipmentSlots: 12,
    modifierSlots: 6,
  };
}
