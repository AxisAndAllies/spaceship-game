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
  fire() {
    // reset reload
    this.state.reload = this.baseStat.reload;

    let total = 0;
    for (let i = 0; i < this.state.numShots; i++) {
      if (Math.random() > this.state.accuracy) {
        console.log('missed.');
        return;
      }
      total += this.state.damage;
    }
    console.log(total, 'hit');
    // returns damage
    return total;
  }
}

export class Laser extends Weapon {
  constructor() {
    super();
    this.initializeState();
  }
  // continuous firing
  baseStat = {
    damage: 10,
    reload: 1, // in reality fires every 1 sec lol
    range: 10,
    accuracy: 1.0,
    numShots: 1,
  };
}

export class Railgun extends Weapon {
  constructor() {
    super();
    this.initializeState();
  }
  // ultra long range
  baseStat = {
    damage: 12,
    reload: 5000,
    range: 15,
    accuracy: 0.8,
    numShots: 1,
  };
}

export class Cannon extends Weapon {
  constructor() {
    super();
    this.initializeState();
  }
  // ignores shield
  baseStat = {
    damage: 8,
    reload: 1000,
    range: 10,
    accuracy: 0.5,
    numShots: 1,
  };
}

export class MissileLauncher extends Weapon {
  constructor() {
    super();
    this.initializeState();
  }
  // guided missile
  baseStat = {
    damage: 18,
    reload: 2000,
    range: 15,
    accuracy: 0.9,
    numShots: 1,
  };
}

export class RocketLauncher extends Weapon {
  constructor() {
    super();
    this.initializeState();
  }
  // unguided, can fire volley?
  // maybe save up for burst volley
  baseStat = {
    damage: 7,
    reload: 15000,
    range: 6,
    accuracy: 0.6,
    numShots: 12,
  };
}
