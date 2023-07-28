import React from "react";
export const coloresTipos = {
  bug: "#879921",
  dark: "#4a3a3a",
  dragon: "#4f5ad8",
  electric: "#edb21a",
  fairy: "#e966ea",
  fighting: "#f77213",
  fire: "#d81420",
  flying: "#7bb3ec",
  ghost: "#6b426c",
  grass: "#43992e",
  ground: "#84401b",
  ice: "#53d4fe",
  normal: "#979797",
  poison: "#873bc2",
  psychic: "#e73370",
  rock: "#a69f75",
  steel: "#5e97b2",
  water: "#327be4",
};
export const nombresTipos = {
  bug: "Bicho",
  dark: "Siniestro",
  dragon: "Dragón",
  electric: "Eléctrico",
  fairy: "Hada",
  fighting: "Lucha",
  fire: "Fuego",
  flying: "Volador",
  ghost: "Fantasma",
  grass: "Planta",
  ground: "Tierra",
  ice: "Hielo",
  normal: "Normal",
  poison: "Veneno",
  psychic: "Psíquico",
  rock: "Roca",
  steel: "Acero",
  water: "Agua",
};

export default function ListarTipos({ tipos, pokeModal }) {
  return (
    <>
      {tipos.map((tipo) => (
        <div key={tipo.slot} className="flex gap-x-1 ">
          <div
            style={{ backgroundColor: `${coloresTipos[tipo.type.name]}` }}
            className={`rounded-full w-3 h-3 m-auto ${pokeModal && "mr-0.5"}`}
          ></div>
          <p
            //style={{ backgroundColor: `${coloresTipos[tipo.type.name]}` }}
            className={
              `rounded-xl  m-auto text-xs ${
                pokeModal ? "md:text-base" : "xl:text-base"
              } mr-2` /*p-1 xl:p-2 */
            }
          >
            {nombresTipos[tipo.type.name]}
          </p>
        </div>
      ))}
    </>
  );
}
