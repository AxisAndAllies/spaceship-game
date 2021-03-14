export class Shield {
  baseStat = {
    delay: 3000, // num millis to wait until shield starts recharging after hit
  };
  constructor() {}
  initializeState() {
    this.state = {
      ...this.baseStat,
    };
  }
  tick(ms) {
    if (this.state.delay > 0) {
      this.state.delay = Math.max(this.state.delay - ms, 0);
      return;
    }
    this.state.amount = Math.min(
      (this.baseStat.recharge * ms) / 1000,
      this.baseStat.amount,
    );
  }
  takeHit(dmg) {
    // returns damage actually taken by shield
    this.state.delay = this.baseStat.delay;
    const dmgTaken = Math.min(this.state.amount, dmg);
    this.state.amount -= dmgTaken;
    return dmgTaken;
  }
}

export class LightShield extends Shield {
  constructor() {
    super();
    this.initializeState();
  }
  baseStat = {
    amount: 100,
    recharge: 20,
    delay: 3000,
  };
}
export class MediumShield extends Shield {
  constructor() {
    super();
    this.initializeState();
  }
  baseStat = {
    amount: 300,
    recharge: 30,
    delay: 3000,
  };
}

export class HeavyShield extends Shield {
  constructor() {
    super();
    this.initializeState();
  }
  baseStat = {
    amount: 500,
    recharge: 40,
    delay: 3000,
  };
}

export class UberShield extends Shield {
  constructor() {
    super();
    this.initializeState();
  }
  baseStat = {
    amount: 1000,
    recharge: 50,
    delay: 3000,
  };
}
