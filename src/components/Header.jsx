import React from "react";

export const Header = ({
  setSearch,
  reinicioMostrarTodos,
  realizoBusqueda,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { busqueda } = Object.fromEntries(new FormData(e.target));
    setSearch(busqueda);
  };
  const handleClick = () => {
    if (realizoBusqueda) reinicioMostrarTodos();
  };

  return (
    <header className="flex items-center flex-col mb-5">
      <h1 className="text-5xl my-5 block text-sky-600 uppercase font-bold">
        Pokedex
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex w-full justify-center gap-x-7"
      >
        <input
          type="text"
          name="busqueda"
          className=" bg-yellow-100 rounded-xl p-3 w-3/5 md:w-2/5 border border-yellow-300 outline-none focus:border-yellow-600"
          placeholder="Charmander, Bulbasaur, Squirtle ..."
        />
        <button
          type="submit"
          className="bg-yellow-500 text-white rounded-xl px-5 w-1/5 md:w-auto hover:scale-110 hover:-translate-y-1 transition ease-in-out delay-75 "
        >
          Buscar
        </button>
        <button
          onClick={handleClick}
          type="button"
          //
          className="bg-yellow-500 text-white rounded-xl px-5 w-1/5 md:w-auto hover:scale-110 hover:-translate-y-1 transition ease-in-out delay-75 "
        >
          Mostrar Todos
        </button>
      </form>
    </header>
  );
};
