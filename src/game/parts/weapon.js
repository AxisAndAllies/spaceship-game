export class Weapon {
  constructor() {}
  initializeState() {
    this.state = {
      target: null,
      ...this.baseStat,
    };
  }

  // defaults
  baseStat = {};

  get readyToFire() {
    return this.state.reload == 0;
  }

  tick(ms) {
    this.state.reload = Math.max(this.state.reload - ms, 0);
  }
  _fire() {
    // reset reload
    this.state.reload = this.baseStat.reload;

    let total = 0;
    this.state.numShots.forEach((e) => {
      if (Math.random() > this.state.accuracy) {
        console.log('missed.');
        return;
      }
      total += this.state.damage;
    });

    // returns damage
    return total;
  }
}

export class Laser extends Weapon {
  // continuous firing
  baseStat = {
    damage: 10,
    reload: 0, // doesn't matter
    range: 10,
    accuracy: 1.0,
    numShots: 1,
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
    numShots: 1,
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
    numShots: 1,
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
    numShots: 1,
  };
  fire() {}
}

export class RocketLauncher extends Weapon {
  // unguided, can fire volley?
  // maybe save up for burst volley
  baseStat = {
    damage: 7,
    reload: 15,
    range: 6,
    accuracy: 0.6,
    numShots: 12,
  };
  fire() {}
}
