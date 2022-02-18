'use strict'

let currentPokemon;
let pokemonCollections = ['bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'charizard', 'squirtle', 'wartortle', 'blastoise', 'pikachu'];
let pokemonJson = [];

async function loadPokemon() {
  for (let i = 0; i < pokemonCollections.length; i++) {
    const collection = pokemonCollections[i];
    let url = `https://pokeapi.co/api/v2/pokemon/squirtle`
    let response = await fetch(url);
    currentPokemon = await response.json();
    pokemonJson.push(currentPokemon);
    console.log(currentPokemon);
  }

  renderCards();
  renderPokedex();
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
        `;
    skillChangeColor();
  }

}

function renderPokedex(i) {
  let pokedex = document.getElementById('pokedexBox');

  pokedex.innerHTML = `
  <div class="pokemonCards"></div>
  `;
}

function skillChangeColor() {
  //TODO Not working!!
  for (let i = 0; i <= 5; i++) {
    if (currentPokemon['stats'][i]['base_stat'] < 50) {
      document.getElementById('skill-bar').style = 'background-color: black;'
    }
    if (currentPokemon['stats'][i]['base_stat'] > 50) {
      document.getElementById('skill-bar').style = 'background-color: green;'
    }
  }


}