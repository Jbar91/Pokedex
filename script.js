// const Pokemons = [
//   {
//     name: "Bulbasaur",
//     sprite: "imgs/bulbasaur.png",
//     pokedex_number: 01,
//     type: ["Grass", "Poison"],
//   },
//   {
//     name: "Charmander",
//     sprite: "imgs/charmander.png",
//     pokedex_number: 02,
//     type: ["Fire"],
//   },
//   {
//     name: "Squirtle",
//     sprite: "imgs/squirtle.png",
//     pokedex_number: 03,
//     type: ["Water"],
//   },
//   {
//     name: "Pidgey",
//     sprite: "imgs/pidgey.png",
//     pokedex_number: 04,
//     type: ["Normal", "Flying"],
//   },
//   {
//     name: "Rattata",
//     sprite: "imgs/rattata.png",
//     pokedex_number: 05,
//     type: ["Normal"],
//   },
//   {
//     name: "Ekans",
//     sprite: "imgs/ekans.png",
//     pokedex_number: 06,
//     type: ["Poison"],
//   },
//   {
//     name: "Pikachu",
//     sprite: "imgs/pikachu.png",
//     pokedex_number: 07,
//     type: ["Electric"],
//   },
//   {
//     name: "Clefairy",
//     sprite: "imgs/clefairy.png",
//     pokedex_number: 08,
//     type: ["Fairy"],
//   },
//   {
//     name: "Jigglypuff",
//     sprite: "imgs/jigglypuff.png",
//     pokedex_number: 09,
//     type: ["Normal", "Fairy"],
//   },
//   {
//     name: "Zubat",
//     sprite: "imgs/zubat-f.png",
//     pokedex_number: 10,
//     type: ["Poison", "Flying"],
//   },
//   {
//     name: "Meowth",
//     sprite: "imgs/meowth.png",
//     pokedex_number: 11,
//     type: ["Normal"],
//   },
//   {
//     name: "Psyduck",
//     sprite: "imgs/psyduck.png",
//     pokedex_number: 12,
//     type: ["Water"],
//   },
//   {
//     name: "Growlithe",
//     sprite: "imgs/growlithe.png",
//     pokedex_number: 13,
//     type: ["Fire"],
//   },
//   {
//     name: "Gengar",
//     sprite: "imgs/gengar.png",
//     pokedex_number: 14,
//     type: ["Ghost", "Poison"],
//   },
//   {
//     name: "Voltorb",
//     sprite: "imgs/voltorb.png",
//     pokedex_number: 15,
//     type: ["Electric"],
//   },
//   {
//     name: "Cubone",
//     sprite: "imgs/cubone.png",
//     pokedex_number: 16,
//     type: ["Ground"],
//   },
//   {
//     name: "Kangaskhan",
//     sprite: "imgs/kangaskhan.png",
//     pokedex_number: 17,
//     type: ["Normal"],
//   },
//   {
//     name: "Gyarados",
//     sprite: "imgs/gyarados-f.png",
//     pokedex_number: 18,
//     type: ["Water", "Flying"],
//   },
//   {
//     name: "Eevee",
//     sprite: "imgs/eevee.png",
//     pokedex_number: 19,
//     type: ["Normal"],
//   },
//   {
//     name: "Dragonite",
//     sprite: "imgs/dragonite.png",
//     pokedex_number: 20,
//     type: ["Dragon", "Flying"],
//   },
//   {
//     name: "Mewtwo",
//     sprite: "imgs/mewtwo.png",
//     pokedex_number: 21,
//     type: ["Psychic"],
//   },
// ];

const cardsContainer = document.querySelector("#pokemon-display");
const createCards = document.createElement("div");
const addClass = createCards.classList.add("card");

// for (let i = 0; i < Pokemons.length; i++) {
//   const type1 = `<span class="type pokemon-type-${Pokemons[i].type[0]}">${Pokemons[i].type[0]}<span>`;
//   const type2 = `<span class="type pokemon-type-${Pokemons[i].type[0]}">${Pokemons[i].type[0]}</span> <span class="type pokemon-type-${Pokemons[i].type[1]}">${Pokemons[i].type[1]}</span>`;
//   cardsContainer.innerHTML += `<div class="card"><img src="${
//     Pokemons[i].sprite
//   }" class="sprite">
//   <p class="number">${Pokemons[i].pokedex_number}</p><h2 class="name">${
//     Pokemons[i].name
//   }</h2>${Pokemons[i].type.length === 1 ? type1 : type2}</div>`;
//   // console.log(Pokemons[i].name);
//   // console.log(i);
// }
function fetchKanto() {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((Response) => Response.json())
    .then((allPokemon) => {
      allPokemon.results.forEach((pokemon) => {
        fetchPokemonData(pokemon);
        function fetchPokemonData(pokemon) {
          let url = pokemon.url;
          fetch(url)
            .then((Response) => Response.json())
            .then((pokeData) => console.log(pokeData));
        }
      });
    });
}
fetchKanto();
