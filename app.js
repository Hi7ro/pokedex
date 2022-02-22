'use strict'

let currentPokemon;
let pokemonCollection = ['bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'charizard', 'squirtle', 'wartortle', 'blastoise', 'pikachu'];
let pokemonAsJson = [];



async function loadPokemon() {
  for (let i = 0; i < pokemonCollection.length; i++) {
    let collectible = pokemonCollection[i];
    let url = `https://pokeapi.co/api/v2/pokemon/${collectible}`
    let response = await fetch(url);
    currentPokemon = await response.json();
    pokemonAsJson.push(currentPokemon);
    console.log(currentPokemon);
  }
  renderCard();
  renderPokedex();
}

function renderCard() {
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
  }

}

function renderPokedex() {
  let pokedex = document.getElementById('pokedexBox');
  for (let i = 0; i < pokemonCollection.length; i++) {

    pokedex.innerHTML += `
    <div class="pokemonCards" onclick="showPokemon()">
      <div>
        <h2>${pokemonAsJson[i]['name']}</h2>
        <div class="elementBox">${pokemonAsJson[i]['types'][0]['type']['name']}</div>
        <img src="${pokemonAsJson[i]['sprites']['other']['home']['front_default']}">
      </div>
    </div>
    `;

  }

}

function showPokemon(i) {

}

// function skinColors() {
//   //TODO Not Working!
//   let stats = currentPokemon['stats'][i]['base_stat']
//   if (stats < 50) {
//     document.getElementById('skill-bar').style.backgroundColor = 'black'
//   }
//   if (stats > 50) {
//     document.getElementById('skill-bar').style.backgroundColor = 'green'
//   }
// }