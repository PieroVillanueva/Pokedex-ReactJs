import React from "react";
export const Header = ({
  setSearch,
  reinicioMostrarTodos,
  //realizoBusqueda,
  handleMostrarModalFiltro,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { busqueda } = Object.fromEntries(new FormData(e.target));
    setSearch(busqueda.toLowerCase());
  };

  const handleClick = () => {
    /*if (realizoBusqueda) */
    reinicioMostrarTodos();
  };

  return (
    <header className="flex items-center flex-col animate-fade animate-once sticky top-0 z-10 bg-white pb-5 px-2 shadow-xl">
      <div className="flex gap-x-3">
        <img src="/pokebola.png" className="my-auto" alt="ImagenLogo" />
        <h1 className="text-5xl my-5 block  uppercase font-black font-berlin">
          Pokedex
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex w-full justify-center gap-x-3 md:gap-x-7"
      >
        <input
          type="text"
          name="busqueda"
          className="  rounded-xl p-3 w-3/5 md:w-2/5 border border-[#a60529] outline-none "
          placeholder="Charmander, Bulbasaur, Squirtle ..."
        />
        <button
          type="submit"
          className=" md:px-5 bg-[#a60529] text-white font-lato md:font-bold rounded-xl  w-1/5 md:w-auto hover:scale-110 hover:-translate-y-1 transition ease-in-out delay-75 "
        >
          <img src="/buscador.png" className="m-auto" alt="" />
        </button>
        <button
          onClick={handleClick}
          type="button"
          //
          className="px-1 md:px-5 text bg-[#a60529] text-white font-lato md:font-bold rounded-xl w-1/5 md:w-auto hover:scale-110 hover:-translate-y-1 transition ease-in-out delay-75 "
        >
          Mostrar Todos
        </button>
        <button
          onClick={handleMostrarModalFiltro}
          type="button"
          className="flex justify-center items-center md:px-5 text bg-[#a60529] text-white font-lato md:font-bold rounded-xl w-1/5 md:w-auto hover:scale-110 hover:-translate-y-1 transition ease-in-out delay-75 "
        >
          <img src="/filtro.png" className="max-w-[27px] invert " alt="" />
        </button>
      </form>
    </header>
  );
};
