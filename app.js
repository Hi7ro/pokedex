'use strict'
let currentPokemon;

async function loadPokemon() {
  let url = `https://pokeapi.co/api/v2/pokemon/charmander`
  let response = await fetch(url);
  currentPokemon = await response.json();
  console.log(currentPokemon);
  renderCards();
}

function renderCards() {
  let pokedex = document.getElementById('pokedex');
  let pokeInfo = document.getElementById('pokemonInfo');

  pokedex.innerHTML = `
      <h1>${currentPokemon['name']}</h1>
      <div class="elementBox">${currentPokemon['types'][0]['type']['name']}</div>
      <img src="${currentPokemon['sprites']['other']['home']['front_default']}">
      `

  for (let i = 0; i <= 5; i++) {
    pokeInfo.innerHTML += `
        <li>${currentPokemon['stats'][i]['stat']['name']}: ${currentPokemon['stats'][i]['base_stat']} <span class="skill-bar"></li>
        `
  }
}

function skillBar() {

}