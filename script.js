//pokemones
async function loadPokemon() {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=20');
      const data = await response.json();
  
      const container = document.getElementById('pokemon-container');
      data.results.forEach(async (pokemon) => {
        const res = await fetch(pokemon.url);
        const pokeData = await res.json();
  
        //creando tarjetas de pokemones
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <img src="${pokeData.sprites.front_default}" alt="${pokeData.name}">
          <h3>${pokeData.name}</h3>
        `;
        container.appendChild(card);
      });
    } catch (error) {
      console.error('Error:', error);
      const container = document.getElementById('pokemon-container');
      container.innerHTML = '<p>Ocurrió un error al cargar los Pokémon.</p>';
    }
  }
  
  //llamar a la función
  loadPokemon();
  