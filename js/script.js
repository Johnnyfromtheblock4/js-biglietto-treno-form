const button = document.getElementById(`btn`);

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

  //recupero i campi della form
  const name = document.getElementById(`name`).value;

  const costo = `${prezzo.toFixed(2)} €`;


  //stampo risultati
  document.getElementById(`show-name`).innerText = name;
  
  document.getElementById(`show-costo`).innerText = costo;
});
