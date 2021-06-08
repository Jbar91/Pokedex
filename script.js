const cardsContainer = document.querySelector("#pokemon-display");

function fetchKanto() {
  //Fetch pokemon data from api with a limit of 151
  fetch("https://pokeapi.co/api/v2/pokemon/?limit=151&?order=1")
    .then((Response) => Response.json())
    .then((allPokemon) => {
      //Iteration for each pokemon to bring the data and create a display
      allPokemon.results.forEach((pokemon) => {
        fetchPokemonData(pokemon);
        function fetchPokemonData(pokemon) {
          //Specific pokemon data
          let url = pokemon.url;
          //Creates the card of each pokemon and sets an ID with its name
          cardsContainer.innerHTML += `<div class="card" id="${pokemon.name}"></div>`;
          fetch(url)
            .then((Response) => Response.json())
            .then((pokeData) => {
              //Destructuring to create the variables to be used
              const [card, name, types, pokedexNumber, sprite] = [
                document.getElementById(`${pokemon.name}`),
                pokeData.name,
                pokeData.types,
                pokeData.id,
                pokeData.sprites.front_default,
              ];
              //Adding the name, pokedex number, type(s) and sprites to the cards
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
//Invoking the main function
fetchKanto();
