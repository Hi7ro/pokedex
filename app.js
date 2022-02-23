'use strict'

let currentPokemon;
let pokemonCollection = ['bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'charizard', 'squirtle', 'wartortle', 'blastoise', 'pikachu'];
let pokemonAsJson = [];

async function loadPokemon() {
  for (let i = 0; i < pokemonCollection.length; i++) {
    let pokemon = pokemonCollection[i];
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    let response = await fetch(url);
    currentPokemon = await response.json();
    pokemonAsJson.push(currentPokemon);
    console.log(currentPokemon);
    renderPokemonInfo(i);
    colors(i);
  }
  renderCard();
  renderPokedex();
}

function renderCard() {
  let pokedex = document.getElementById('pokedex');
  pokedex.innerHTML = `
      <h1 id="title">${currentPokemon['name']}</h1>
      <div id="element" class="elementBox">${currentPokemon['types'][0]['type']['name']}</div>
      <img id="mainCardImg" src="${currentPokemon['sprites']['other']['home']['front_default']}">
      `
}

function renderPokemonInfo(i) {
  let pokeInfo = document.getElementById('pokemonInfo');
  pokeInfo.innerHTML = '<ul id="stat-list"></ul>';
  for (let j = 0; j <= 5; j++) {
    document.getElementById('stat-list').innerHTML += `
        <li>${pokemonAsJson[i]['stats'][j]['stat']['name']}: 
        <b>${pokemonAsJson[i]['stats'][j]['base_stat']}</b> 
        <div class="skill-bar" id="skill-bar" style="width: 
        ${pokemonAsJson[i]['stats'][j]['base_stat']}%"></div></li>
        `;
  }
}

function renderPokedex() {
  let pokedex = document.getElementById('pokedexBox');
  for (let i = 0; i < pokemonCollection.length; i++) {
    pokedex.innerHTML += `
    <div class="pokemonCards color-${i}" onclick="showPokemonCard(${i})">
      <div>
        <h2>${pokemonAsJson[i]['name']}</h2>
        <div class="elementBox">${pokemonAsJson[i]['types'][0]['type']['name']}</div>
        <img src="${pokemonAsJson[i]['sprites']['other']['home']['front_default']}">
      </div>
    </div>
    `;
  }
}

function showPokemonCard(i) {
  let h1 = document.getElementById('title');
  let element = document.getElementById('element');
  let cardImg = document.getElementById('mainCardImg');
  h1.innerHTML = `${pokemonAsJson[i]['name']}`
  element.innerHTML = `${pokemonAsJson[i]['types'][0]['type']['name']}`
  cardImg.src = `${pokemonAsJson[i]['sprites']['other']['home']['front_default']}`

  document.getElementById('pokedex').classList.add = `color-${i}`;

  renderPokemonInfo(i)
}

function colors(i) {



}