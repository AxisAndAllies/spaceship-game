class Shield {
  baseStat = {
    delay: 3, // num secs to wait since last hit before starting regen
  };
}

export class LightShield extends Shield {
  baseStat = {
    amount: 100,
    recharge: 20,
  };
}
export class MediumShield extends Shield {
  baseStat = {
    amount: 300,
    recharge: 30,
  };
}

export class HeavyShield extends Shield {
  baseStat = {
    amount: 500,
    recharge: 40,
  };
}

export class UberShield extends Shield {
  baseStat = {
    amount: 1000,
    recharge: 50,
  };
}
