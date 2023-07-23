import React from "react";
import ListarTipos from "./ListarTipos";
import Barra from "./Barra";
import { convertirNombre } from "../js/utility";

export default function Modal({ poke, handleCerrarModal }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center  ">
      <div className=" bg-slate-200 p-10 rounded-3xl max-w-[90%]">
        <div className="flex justify-end">
          <button
            className="px-4 py-2 bg-red-400 rounded-full  object-right mt-[-2rem] mr-[-2rem]  text-white"
            onClick={handleCerrarModal}
          >
            X
          </button>
        </div>
        <h3 className="text-center">{`${convertirNombre(poke.name)} #${
          poke.id
        }`}</h3>
        <img
          src={poke.sprites.other["official-artwork"].front_default}
          alt={`Imagen de ${poke.name}`}
        />
        <div className="flex gap-3">{<ListarTipos tipos={poke.types} />}</div>
        <p>
          Altura: <span>{`${poke.height / 10} m`}</span>
        </p>
        <p>
          Peso: <span>{`${poke.weight / 10} kg`}</span>
        </p>
        <p>
          Vida: <span>{poke.stats[0].base_stat}</span>
        </p>
        <Barra valor={poke.stats[0].base_stat} stat={"vida"} />
        <p>
          Ataque: <span>{poke.stats[1].base_stat}</span>
        </p>
        <Barra valor={poke.stats[1].base_stat} stat={"ataque"} />
        <p>
          Defensa: <span>{poke.stats[2].base_stat}</span>
        </p>
        <Barra valor={poke.stats[2].base_stat} stat={"defensa"} />
      </div>
    </div>
  );
}
