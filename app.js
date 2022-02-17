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
  pokeInfo.innerHTML = '<ul id="stat-list"></ul>';
  for (let i = 0; i <= 5; i++) {
    document.getElementById('stat-list').innerHTML += `
        <li>${currentPokemon['stats'][i]['stat']['name']}: <b>${currentPokemon['stats'][i]['base_stat']}</b> <div class="skill-bar" id="skill-bar" style="width: ${currentPokemon['stats'][i]['base_stat']}%"></div></li>
        `
  }
  skillColors();
}

function skillColors(i) {
  let skill = currentPokemon['stats'][i]['base_stat'];
  if (skill > 50) {
    dokument.getElementById('skill-bar').style = 'background-color: green;'
  }
}