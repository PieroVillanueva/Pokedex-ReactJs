import React from "react";
import ListarTipos from "./ListarTipos";
import Barra from "./Barra";
import { convertirNombre, agregarCerosIzquierda } from "../js/utility";
import { coloresTipos } from "./ListarTipos";

export default function Modal({ poke, handleCerrarModal }) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50 "
      onClick={handleCerrarModal}
    >
      <div className=" bg-white rounded-3xl max-w-[90%] max-h-[90%] border-[3px] border-[#b5cab3] flex tall:block">
        <div className="bg-[#f0f5ef] rounded-l-3xl tall:rounded-t-3xl h-full p-4">
          <h3 className="text-[#a8baa8] text-xl">{`N°.${agregarCerosIzquierda(
            poke.id
          )}`}</h3>
          <img
            className="max-w-[70%] tall:max-w-[80%]  m-auto"
            src={
              poke.sprites.other["official-artwork"].front_default ||
              "/pokemonDefault.png"
            }
            alt={`Imagen de ${poke.name}`}
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3
            style={{
              backgroundColor: `${coloresTipos[poke.types[0].type.name]}`,
            }}
            className="w-full  text-center text-white text-xl px-0 font-bold"
          >
            {convertirNombre(poke.name)}
          </h3>
          <div className="p-5 font-bold text-xs md:text-base">
            <div className="grid grid-cols-2 mb-2">
              <div
                style={{
                  borderColor: `${coloresTipos[poke.types[0].type.name]}`,
                }}
                className="flex gap-3  tall:border-r-[2px] justify-evenly font-normal"
              >
                {<ListarTipos tipos={poke.types} pokeModal={true} />}
              </div>
              <div className="flex gap-x-2 justify-evenly text-center">
                <p>
                  Altura:{" "}
                  <span className="font-normal">{`${poke.height / 10} m`}</span>
                </p>
                <p>
                  Peso:{" "}
                  <span className="font-normal">{`${
                    poke.weight / 10
                  } kg`}</span>
                </p>
              </div>
            </div>
            <div className="flex mb-1">
              <p className="w-2/6">
                Vida:{" "}
                <span className="font-normal ">{poke.stats[0].base_stat}</span>
              </p>
              <Barra valor={poke.stats[0].base_stat} stat={"vida"} />
            </div>
            <div className="flex mb-1">
              <p className="w-2/6">
                Ataque:{" "}
                <span className="font-normal">{poke.stats[1].base_stat}</span>
              </p>
              <Barra valor={poke.stats[1].base_stat} stat={"ataque"} />
            </div>
            <div className="flex mb-1">
              <p className="w-2/6">
                Defensa:{" "}
                <span className="font-normal">{poke.stats[2].base_stat}</span>
              </p>
              <Barra valor={poke.stats[2].base_stat} stat={"defensa"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
