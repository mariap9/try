var socket;

function setup() {
  createCanvas(600, 400);
  background(51);

  socket = io();
  socket = socket.io.connect('http://localhost:3000');
}

function mouseDragged() {
  console.log('sending:' + mouseX + ',' + mouseY);

  var data = {
    x: mouseX,
    y: mouseY
  }
  socket.emit('mouse', data);

  noStroke();
  fill(255);
  ellipse(mouseX, mouseY, 60);
}

function draw() {


}
