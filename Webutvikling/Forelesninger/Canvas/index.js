let mittCanvas = document.getElementById('mittCanvas');
let tegnebrett = mittCanvas.getContext("2d");

tegnebrett.moveTo(300,100);
tegnebrett.lineTo(300,250);
tegnebrett.stroke();

tegnebrett.moveTo(300,100);
tegnebrett.lineTo(250,150);
tegnebrett.stroke();

tegnebrett.moveTo(300,100);
tegnebrett.lineTo(350,150);
tegnebrett.stroke();

// tegne sirkler
tegnebrett.beginPath();
tegnebrett.arc(300,75,25,0,2*Math.PI);
tegnebrett.stroke();

// tegne tekst
tegnebrett.font = "30px Roboto";
tegnebrett.fillText("Hangman!",15,30);

setInterval(tegnTilfeldig, 1000);

function tegnTilfeldig() {
  let x1, y1, x2, y2, r, g, b;

  x1 = Math.floor((Math.random() * 600) + 1);
  x2 = Math.floor((Math.random() * 600) + 1);
  y1 = Math.floor((Math.random() * 300) + 1);
  y2 = Math.floor((Math.random() * 300) + 1);

  r = Math.floor(Math.random() * 256);
  g = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);

  tegnebrett.beginPath();
  tegnebrett.moveTo(x1,y1);
  tegnebrett.lineTo(x2,y2);
  tegnebrett.lineWidth = 5;
  tegnebrett.strokeStyle = "rgb(" +r+ "," +g+ "," +b+ ")"
  tegnebrett.stroke();

}
