const button = document.getElementById(`btn`);

button.addEventListener(`click`, function (event) {
  //tolgo il refresh della pagina
  event.preventDefault();

  //dati calcolo costo al km
  const km = document.getElementById(`km`);
  const euroKm = document.getElementById(`km`).value * 0.21;
  const prezzo = `${euroKm} €`;
  console.log(prezzo);

  //dati calcolo sconto
  const eta = document.getElementById(`eta`);
  const scontoMinorenne = prezzo * 0.2;
  const scontoOver65 = prezzo * 0.4;

  if (eta === `minorenne`) {
    scontoMinorenne;
  } else if (eta === `over-65`) scontoOver65;
  else {
    prezzo;
  }
});
