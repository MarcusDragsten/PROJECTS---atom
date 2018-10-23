function sjekkpassord() {

  var passord1 = document.getElementById('passord1')
  var passord2 = document.getElementById('passord2');

  var melding = document.getElementById('bekreftpassord');

  var brafarge = "#66cc66";
  var darligfarge = "#ff6666";

  if (passord1.value == passord2.value) {
    passord2.style.backgroundColor = brafarge;
    melding.style.color = brafarge;
    melding.innerText = "Passordene er like"
  } else {
    passord2.style.backgroundColor = darligfarge;
    melding.style.color = darligfarge;
    melding.innerText = "Passordene stemmer ikke overens!"
  }
}
