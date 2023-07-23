import React from "react";
const coloresTipos = {
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
const nombresTipos = {
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

export default function ListarTipos({ tipos }) {
  return (
    <>
      {tipos.map((tipo) => (
        <p
          key={tipo.slot}
          style={{ backgroundColor: `${coloresTipos[tipo.type.name]}` }}
          className={`p-2 rounded-xl text-white`}
        >
          {nombresTipos[tipo.type.name]}
        </p>
      ))}
    </>
  );
}
