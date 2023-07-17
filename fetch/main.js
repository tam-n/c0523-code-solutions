async function logPokemon(id) {
  try {
    if (typeof id === 'number') {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + id);
      if (response.ok) {
        const pokemon = await response.json();
        console.log(pokemon);
      } else {
        throw new Error('Response failed.');
      }
    } else {
      throw new Error('Please enter a number.');
    }
  } catch (error) {
    console.error(error);
  }
}

logPokemon(1);
