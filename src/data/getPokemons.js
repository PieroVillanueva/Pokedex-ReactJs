export const getPokemones = async ({
  newOffset,
  existeSiguiente,
  setExisteSiguiente,
  setPokemons, setIsLoading
}) => {

  if (!existeSiguiente) return;
  setIsLoading(true);
  console.log("consulte", newOffset)
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=${newOffset}&limit=20`
  );
  const data = await response.json();

  if (data.next == null) {
    setExisteSiguiente(false);
    return;
  }

  const promises = data.results.map(async (poke) => {
    const result = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${poke.name}`
    );
    const pokemon = await result.json();
    return pokemon;
  });

  const resultadoFinal = await Promise.all(promises);

  setPokemons((prevState) => [...prevState, ...resultadoFinal]);
  setIsLoading(false);
};
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

};
export const getAllPokemon = async ({ setTodosPokemons, setExisteSiguiente }) => {
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
  setExisteSiguiente(false);
};