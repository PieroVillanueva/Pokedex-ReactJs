import React from "react";

export const Header = ({
  setSearch,
  reinicioMostrarTodos,
  realizoBusqueda,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { busqueda } = Object.fromEntries(new FormData(e.target));
    setSearch(busqueda.toLowerCase());
  };
  const handleClick = () => {
    if (realizoBusqueda) reinicioMostrarTodos();
  };

  return (
    <header className="flex items-center flex-col  animate-fade animate-once">
      <h1 className="text-5xl my-5 block text-sky-600 uppercase font-bold">
        Pokedex
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex w-full justify-center gap-x-3 md:gap-x-7"
      >
        <input
          type="text"
          name="busqueda"
          className=" bg-yellow-100 rounded-xl p-3 w-3/5 md:w-2/5 border border-yellow-300 outline-none focus:border-yellow-600"
          placeholder="Charmander, Bulbasaur, Squirtle ..."
        />
        <button
          type="submit"
          className="px-2 md:px-5 bg-yellow-500 text-white rounded-xl  w-1/5 md:w-auto hover:scale-110 hover:-translate-y-1 transition ease-in-out delay-75 "
        >
          Buscar
        </button>
        <button
          onClick={handleClick}
          type="button"
          //
          className="px-1 md:px-5 text bg-yellow-500 text-white rounded-xl w-1/5 md:w-auto hover:scale-110 hover:-translate-y-1 transition ease-in-out delay-75 "
        >
          Mostrar Todos
        </button>
      </form>
    </header>
  );
};
