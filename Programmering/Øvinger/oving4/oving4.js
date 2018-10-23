function tenaring() {
  let alder = document.getElementById('alder').value;
  let tekst;

  if ((alder <= 19) && (alder >= 13)) {
    tekst = "Du er tenåring"
  } else {
    tekst = "Du er ikke tenåring"
  }
  document.getElementById('utdata1').innerHTML = tekst;
}


function finnstorstetall() {
  let tall1 = Number(document.getElementById('tall1').value);
  let tall2 = Number(document.getElementById('tall2').value);
  let svar;

  if (tall1 > tall2) {
    svar = tall1 + " er større enn " + tall2;

  } else {
    svar = tall2 + " er større enn " + tall1;
  }
  document.getElementById('utdata2').innerHTML = svar;
}


function kvadratareal() {
  let lengde = document.getElementById('kvadratlengde').value;
  let areal;

  areal = lengde * lengde

  document.getElementById('utdata3').innerHTML =
    "Arealet av kvadratet er " + areal;
}


  var ting = [];

function addingitems() {
  ting.push(" " + document.getElementById('array').value);
  document.getElementById('array').value = "";
  visListe();
}

function visliste() {
  document.getElementById('utdata4').innerHTML = ting;
}


function leggetil() {
  ting.push(" " + document.getElementById('array2').value);
  document.getElementById('array2').value = "";
  document.getElementById('utdata5').innerHTML = ting;
}

function vissiste() {
  var sisteting = ting.pop();
  alert(sisteting);
}
