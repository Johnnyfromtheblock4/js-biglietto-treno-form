const button = document.getElementById(`btn`);

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
  const euroKm = parseInt(document.getElementById(`km`).value) * 0.21;

  //dati calcolo sconto
  const eta = document.getElementById(`eta`).value;
  let prezzo = 0;

  if (eta === `minorenne`) {
    prezzo = euroKm * 0.8;
  } else if (eta === `over-65`) {
    prezzo = euroKm * 0.6;
  } else {
    prezzo = euroKm;
  }

  if (eta === `minorenne`) {
    offerta = `Biglietto under`;
  } else if (eta === `over-65`) {
    offerta = `Biglietto over`;
  } else {
    offerta = `Biglietto standard`;
  }

  //recupero i campi della form
  const name = document.getElementById(`name`).value;
  const biglietto = offerta;
  const carrozza = parseInt(Math.random() * 30);
  const costo = `${prezzo.toFixed(2)} €`;
  const codiceCP = generateCP(5);

  //stampo risultati
  document.getElementById(`show-name`).innerText = name;
  document.getElementById(`show-offerta`).innerText = biglietto;
  document.getElementById(`show-carrozza`).innerText = carrozza;
  document.getElementById(`show-costo`).innerText = costo;
  document.getElementById(`show-codice`).innerText = codiceCP;
});

//creare offerta randomica usando function
