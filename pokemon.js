let index = 0;

setInterval(() => {
    document.startViewTransition(() => {
        pokimg.src = pokemons[index].image;
        pokname.textContent = pokemons[index].name;
        pokpower.textContent = pokemons[index].power;

        index++;

        if (index === pokemons.length) {
            index = 0;
        }
    });
}, 1000);

var pokemons = [
  {
    "name": "Bulbasaur",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png",
    "power": "Grass/Poison"
  },
  {
    "name": "Ivysaur",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/2.png",
    "power": "Grass/Poison"
  },
  {
    "name": "Venusaur",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/3.png",
    "power": "Grass/Poison"
  },
  {
    "name": "Charmander",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/4.png",
    "power": "Fire"
  },
  {
    "name": "Charmeleon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/5.png",
    "power": "Fire"
  },
  {
    "name": "Charizard",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/6.png",
    "power": "Fire/Flying"
  },
  {
    "name": "Squirtle",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/7.png",
    "power": "Water"
  },
  {
    "name": "Wartortle",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/8.png",
    "power": "Water"
  },
  {
    "name": "Blastoise",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/9.png",
    "power": "Water"
  },
  {
    "name": "Caterpie",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10.png",
    "power": "Bug"
  }
];
