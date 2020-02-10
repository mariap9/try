
// Keep track of our socket connection
var socket;
var canvas;

function setup() {
  createDiv(map);
  map = createCanvas(windowWidth, windowHeight);
  // canvas = createCanvas(windowWidth, windowHeight);
  // Start a socket connection to the server
  // Some day we would run this server somewhere else
  socket = io.connect('http://localhost:3000');
  // We make a named event called 'mouse' and write an
  // anonymous callback function
   socket.on('mouse', newDrawing);
    // When we receive data
    function newDrawing(data) {
      console.log("Got: " + data.x + " " + data.y);
      // Draw a blue circle
      fill(255);
      noStroke();
      ellipse(data.x, data.y, 20, 20);
    }
}

function draw() {
  // Nothing
}

function mouseMoved() {
  // Draw some white circles
  fill(255);
  noStroke();
  ellipse(mouseX,mouseY,20,20);
  // Send the mouse coordinates
  sendmouse(mouseX,mouseY);
}

// Function for sending to the socket
function sendmouse(xpos, ypos) {
  // We are sending!
  console.log("sendmouse: " + xpos + " " + ypos);

  // Make a little object with  and y
  var data = {
    x: xpos,
    y: ypos
  };

  // Send that object to the socket
  socket.emit('mouse',data);
}
