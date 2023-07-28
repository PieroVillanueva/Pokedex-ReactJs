export const getPokemones = async ({
  setPokemons, setIsLoading
}) => {
  setIsLoading(true);
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`
  );
  const data = await response.json();

  const promises = data.results.map(async (poke) => {
    const result = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${poke.name}`
    );
    const pokemon = await result.json();
    return pokemon;
  });

  const resultadoFinal = await Promise.all(promises);

  setPokemons(resultadoFinal);
  setIsLoading(false);
};
/*
export const getPokemonByNameOrNumber = async ({ search, setPokemons, setIsLoading }) => {
  try {
    setIsLoading(true);
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${search}`
    );
    if (!response.ok) { setIsLoading(false); return }
    const data = await response.json();
    setPokemons([data]);
    setIsLoading(false);
  }
  catch (er) {
    setIsLoading(false);
    console.log(er)
  }

};*/
export const getAllPokemon = async ({ setTodosPokemons, setSeCargoTodos, setIsLoading }) => {
  try {

    setIsLoading(true);
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`
    );
    const data = await response.json();

    const promises = data.results.map(async (poke) => {
      const result = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${poke.name}`
      );
      const pokemon = await result.json();
      return pokemon;
    });

    const resultadoFinal = await Promise.all(promises);

    setTodosPokemons(resultadoFinal);
    setSeCargoTodos(true);
    setIsLoading(false);
  } catch (e) {
    console.log(e)
  }
};
