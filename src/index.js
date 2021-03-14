// import confetti from 'canvas-confetti';
import { fabric } from 'fabric';
import { Game } from './game/game';

// confetti.create(document.getElementById('canvas'), {
//   resize: true,
//   useWorker: true,
// })({ particleCount: 200, spread: 200 });

let canvas = new fabric.Canvas('canvas');

let rect = new fabric.Rect({
  top: 100,
  left: 100,
  width: 60,
  height: 70,
  fill: '#eeeeee',
});

canvas.add(rect);
console.log('init');

let game = new Game();
game.start();
