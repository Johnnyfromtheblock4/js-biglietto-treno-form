const km = document.getElementById(`km`);
const eta = document.getElementById(`eta`);
const button = document.getElementById(`send`);

button.addEventListener(`click`, function (event) {
  //tolgo il refresh della pagina
  event.preventDefault();

  //dati calcolo costo al km
  let euroKm = document.getElementById(`km`).value * 0.21;
  let prezzo = `${euroKm} €`
  console.log(prezzo);

  
});
