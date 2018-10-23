// Retrieve the needed HTML elements:
let colorSelection = document.getElementById('colorSelection');
let drawingBoard = document.getElementById('drawingBoard');

// Associate color names to RGB values
let colors = {
  Red: 'rgb(255, 0, 0)',
  White: 'rgb(255, 255, 255)',
  Black: 'rgb(0, 0, 0)',
  Pink: 'rgb(255, 192, 203)'
};

// The drawingBoard squares will be stored in this table:
let divs = [];

// Create the drawingBoard squares:
for (let i = 0; i < 600; i++) {
  let div = document.createElement('div');

  div.style.height = '20px';
  div.style.width = '20px';
  div.style.float = 'left';
  div.style.backgroundColor = colors['White'];

  div.onclick = event => {
    div.style.backgroundColor = colors[colorSelection.value];
  }
  div.onmousemove = event => {
    if (event.buttons == 1) {
          div.style.backgroundColor = colors[colorSelection.value];
    }
  };

  drawingBoard.appendChild(div);
  divs.push(div);
}

function viskeUt() {

  for (let i = 0; i < 600; i++) {
      divs[i].style.backgroundColor = colors.White;
  }
}

function fyllFarge() {
  for (let i = 0; i < 600; i++) {
      divs[i].style.backgroundColor = colorSelection.value;
  }
}

let vitser = ['Ka sa den ene tørr fesken te den andre? Long time no sea',
'Hva er likheten mellom Plantasjen og Galtvort? Finner harry potter begge steder',
'Et eple kom seg ikke inn i en bar, fordi i døra sto det en eplenektar'];

document.getElementById('vitser').innerText = vitser[Math.floor((Math.random() * 3) )];
