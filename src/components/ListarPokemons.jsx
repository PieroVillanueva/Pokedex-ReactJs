import { useState } from "react";
import ListarTipos from "./ListarTipos";
import { convertirNombre, agregarCerosIzquierda } from "../js/utility";
import { coloresTipos } from "./ListarTipos";

export function ListarPokemons({ pokemons, handleMostrarModal }) {
  return pokemons.map((poke) => (
    <div
      className="animate-fade animate-once animate-duration-[1300ms] animate-ease-linear"
      key={poke.id}
    >
      <div
        className="py-3 bg-[#f0f4f0] rounded-xl cursor-pointer hover:animate-pulse hover:animate-infinite border-[1.7px] border-[#b5cab3]
          "
        onClick={() => {
          handleMostrarModal(poke);
        }}
      >
        <h3 className="text-[#a8baa8] px-3">{`N°.${agregarCerosIzquierda(
          poke.id
        )}`}</h3>
        <img
          className="px-3"
          src={
            poke.sprites.other["official-artwork"].front_default ||
            "/pokemonDefault.png"
          }
          alt={`Imagen de ${poke.name}`}
        />
        <h3
          style={{
            backgroundColor: `${coloresTipos[poke.types[0].type.name]}`,
          }}
          className="w-full  text-center text-white xl:text-xl"
        >
          {convertirNombre(poke.name)}
        </h3>

        <div className="flex gap-x-[0.25rem] xl:gap-x-2 px-3 pt-2 justify-center">
          {<ListarTipos tipos={poke.types} />}
        </div>
      </div>
    </div>
  ));
}
