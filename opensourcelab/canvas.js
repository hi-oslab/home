var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
console.log(canvas);
var mousex = event.clientX; // Get the horizontal coordinate
var mousey = event.clientY; // Get the vertical coordinate
function dist(x1, y1, x2, y2) {
  var dis_x = x1 - x2;
  var dis_y = y1 - y2;
  return Math.sqrt(Math.abs(dis_x * dis_x) + Math.abs(dix_y * dix_y));
}
var max = dist(0, 0, innerWidth, innerHeight);
for (var i = 0; i < innerWidth; i += 20) {
  for (var j = 0; j < innerHeight; j += 20) {
    var size = dist(mousex, mousey, i, j);
    console.log(size);
    size = size / max * 100;
    c.beginPath();
    c.arc(i, j, size, 0, Math.PI * 2, false);
    c.fillStyle = 'rgb(255,0,255)';
    c.fill();
  }
}