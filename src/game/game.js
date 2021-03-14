import { RocketLauncher } from './parts/weapon';
import { Destroyer } from './ship';
function run() {
  let w = new RocketLauncher();
  console.log(w.baseStat);

  let s = new Destroyer();
  console.log(s);
}

export default { run };
