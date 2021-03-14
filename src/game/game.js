import { LightShield, MediumShield } from './parts/shield';
import { Cannon, MissileLauncher } from './parts/weapon';
import { Destroyer, Gunship } from './ship';
import { LightShield, MediumShield } from './parts/shield';

class Game {
  constructor() {
    this.ships = [];
  }
  init() {
    let a = new Destroyer();
    a.addEquipment(new MissileLauncher());
    a.addEquipment(new LightShield());

    let b = new Gunship();
    b.addEquipment(new Cannon());
    b.addEquipment(new MediumShield());

    this.ships.push(a);
    this.ships.push(b);

    this.lastUpdated = Date.now();
    this.timer = this.setInterval(() => {
      let now = Date.now();
      this.loop(now - this.lastUpdated);
      this.lastUpdated = now;
    }, 100);
  }

  loop(elapsedMs) {
    this.ships.forEach((s) => {
      s.tick(elapsedMs);
    });
    // remove dead ships
    this.ships = this.ships.filter((s) => s.state.health > 0);
  }

  exit() {
    this.timer.clearInterval();
  }
}

export default { run };
