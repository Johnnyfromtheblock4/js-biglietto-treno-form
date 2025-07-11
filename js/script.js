const button = document.getElementById(`btn`);
//geneto 5 numeri per codiceCP
function generateCP(cplength) {
  let number = [];
  for (let i = 0; i < cplength; i++) {
    let casualNumber = parseInt(Math.random() * 9);
    number.push(casualNumber);
  }

  return number.join(``);
}

button.addEventListener(`click`, function (event) {
  //tolgo il refresh della pagina
  event.preventDefault();

  //dati calcolo costo al km
  const basePrice = parseInt(document.getElementById(`km`).value) * 0.21;

  //dati calcolo sconto
  const eta = document.getElementById(`eta`).value;
  let prezzo = 0;

  if (eta === `minorenne`) {
    prezzo = basePrice * 0.8;
  } else if (eta === `over-65`) {
    prezzo = basePrice * 0.6;
  } else {
    prezzo = basePrice;
  }

  //calcolo tipologia biglietto
  if (eta === `minorenne`) {
    offerta = `Biglietto under`;
  } else if (eta === `over-65`) {
    offerta = `Biglietto over`;
  } else {
    offerta = `Biglietto standard`;
  }

  const grifondoro = `img/grifondoro.png`;
  const tassorosso = `img/tassorosso.png`;
  const serpeverde = `img/serpeverde.png`;
  const corvonero = `img/corvonero.png`;
  let casaImage;

  if (casa === `grifondoro`) {
    casaImage = grifondoro;
  } else if (casa === `tassorosso`) {
    casaImage = tassorosso;
  } else if (casa === `serpeverde`) {
    casaImage = serpeverde;
  } else {
    casaImage = corvonero;
  }

  //recupero i campi della form
  const name = document.getElementById(`name`).value;
  const biglietto = offerta;
  const carrozza = parseInt(Math.random() * 30);
  const costo = `${prezzo.toFixed(2)} €`;
  const codiceCP = generateCP(5);
  // const casa = casaImage;

  //stampo risultati
  document.getElementById(`show-name`).innerText = name;
  document.getElementById(`show-offerta`).innerText = biglietto;
  document.getElementById(`show-carrozza`).innerText = carrozza;
  document.getElementById(`show-costo`).innerText = costo;
  document.getElementById(`show-codice`).innerText = codiceCP;
  document.getElementById(`show-casa`).innerHTML = `<img src="${casaImage}"`;
});

//creare offerta randomica usando function
