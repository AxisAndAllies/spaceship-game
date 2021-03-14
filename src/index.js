// import confetti from 'canvas-confetti';
import { fabric } from 'fabric';
import { Game } from './game/game';

// confetti.create(document.getElementById('canvas'), {
//   resize: true,
//   useWorker: true,
// })({ particleCount: 200, spread: 200 });

let canvas = new fabric.Canvas('canvas');
canvas.selection = false;
let rect = new fabric.Rect({
  top: 100,
  left: 100,
  width: 90,
  height: 40,
  fill: '#a3e',
  selectable: false,
});
let r2 = new fabric.Rect({
  top: 400,
  left: 400,
  width: 90,
  height: 40,
  fill: '#4ea',
  selectable: false,
});

console.log(rect.originX, rect.originY);
let line = new fabric.Line(
  [
    rect.getCenterPoint().x,
    rect.getCenterPoint().y,
    r2.getCenterPoint().x,
    r2.getCenterPoint().y,
  ],
  {
    fill: 'red',
    stroke: 'red',
    strokeWidth: 2,
    selectable: false,
    evented: false,
  },
);
let gradient = new fabric.Gradient({
  type: 'linear',
  gradientUnits: 'percentage', // or 'percentage'
  coords: { x1: 0, y1: 0, x2: 0, y2: 2 },
  colorStops: [
    { offset: 0, color: 'yellow' },
    { offset: 0.5, color: 'red' },
  ],
});
line.set('stroke', gradient);

let text = new fabric.Text('Hello world', {
  left: 100,
  top: 200,
  fill: '#f55',
  fontFamily: 'Ubuntu',
  fontWeight: 'bold',
  fontStyle: 'italic',
  fontSize: 12,
  // angle: 15,
  selectable: false,
});
canvas.add(text);

canvas.add(rect);
canvas.add(r2);
canvas.add(line);
canvas.backgroundColor = '#333';
console.log('init');

let game = new Game();
game.start();
