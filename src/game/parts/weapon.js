class Weapon {
  // defaults
  baseStat = {
    numShots: 1,
  };
  fire() {}
}

export class Laser extends Weapon {
  // continuous firing
  baseStat = {
    damage: 10,
    reload: 0, // doesn't matter
    range: 10,
    accuracy: 1.0,
  };
  fire() {}
}

export class Railgun extends Weapon {
  // ultra long range
  baseStat = {
    damage: 12,
    reload: 5,
    range: 15,
    accuracy: 0.8,
  };
  fire() {}
}

export class Cannon extends Weapon {
  // ignores shield
  baseStat = {
    damage: 8,
    reload: 1,
    range: 10,
    accuracy: 0.5,
  };
  fire() {}
}

export class MissileLauncher extends Weapon {
  // guided missile
  baseStat = {
    damage: 18,
    reload: 2,
    range: 15,
    accuracy: 0.9,
  };
  fire() {}
}

export class RocketLauncher extends Weapon {
  // unguided, can fire volley?
  // maybe save up for burst volley
  baseStat = {
    damage: 7,
    numShots: 12,
    reload: 15,
    range: 10,
    accuracy: 0.3,
  };
  fire() {}
}
