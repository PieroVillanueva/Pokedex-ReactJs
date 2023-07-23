import { useState } from "react";
import ListarTipos from "./ListarTipos";

export function ListarPokemons({ pokemons, handleMostrarModal }) {
  return pokemons.map((poke) => (
    <div
      key={poke.id}
      className="p-3 bg-yellow-400 rounded-xl cursor-pointer 
          "
      onClick={() => {
        handleMostrarModal(poke);
      }}
    >
      <h3 className="text-center">{`${poke.name} #${poke.id}`}</h3>
      <img
        src={poke.sprites.other["official-artwork"].front_default}
        alt={`Imagen de ${poke.name}`}
      />
      <div className="flex gap-3">
        {/*poke.types.map((tipo) => (
          <p key={tipo.slot}>{tipo.type.name}</p>
        ))*/}
        {<ListarTipos tipos={poke.types} />}
      </div>
    </div>
  ));
}
