const cardsContainer = document.querySelector("#pokemon-display");

function fetchKanto() {
  fetch("https://pokeapi.co/api/v2/pokemon/?limit=151&?order=1")
    .then((Response) => Response.json())
    .then((allPokemon) => {
      allPokemon.results.forEach((pokemon) => {
        //console.log(pokemon);
        fetchPokemonData(pokemon);
        function fetchPokemonData(pokemon) {
          let url = pokemon.url;
          cardsContainer.innerHTML += `<div class="card" id="${pokemon.name}"></div>`;
          fetch(url)
            .then((Response) => Response.json())
            .then((pokeData) => {
              const card = document.getElementById(`${pokemon.name}`);
              const name = pokeData.name;
              const types = pokeData.types;
              const pokedexNumber = pokeData.id;
              const sprite = pokeData.sprites.front_default;
              card.innerHTML += `<img src="${sprite}" class="sprite"><p class="number">${pokedexNumber}</p><h2 class="name">${name.toUpperCase()}</h2>${
                types.length === 1
                  ? `<span class="type pokemon-type-${
                      types[0].type.name
                    }">${types[0].type.name.toUpperCase()}</span>`
                  : `<span class="type pokemon-type-${
                      types[0].type.name
                    }">${types[0].type.name.toUpperCase()}</span><span class="type pokemon-type-${
                      types[1].type.name
                    }">${types[1].type.name.toUpperCase()}</span>`
              }`;
            });
        }
      });
    });
}
fetchKanto();
