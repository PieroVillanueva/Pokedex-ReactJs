import React from "react";
import { MultiRangeSlider } from "./MultiSlider";
import { useRef, useState } from "react";
import OptionsPokemons from "./OptionsPokemons";

function ModalFiltro({
  handleCerrarModalFiltro,
  filtro,
  setFiltro,
  handleAplicarFiltros,
  handleResetearFiltros,
}) {
  const ordenamientoFiltroId = useRef();
  const elemento1Id = useRef();
  const elemento2Id = useRef();

  const handleCambioOrdenamiento = (e) => {
    setFiltro((prevState) => ({
      ...prevState,
      ordenamiento: e.target.value,
    }));
  };
  const handleCambioElemento1 = (e) => {
    setFiltro((prevState) => ({
      ...prevState,
      elemento1: e.target.value,
    }));
  };
  const handleCambioElemento2 = (e) => {
    setFiltro((prevState) => ({
      ...prevState,
      elemento2: e.target.value,
    }));
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50 "
      //
    >
      <div className=" bg-white rounded-3xl max-w-[90%] max-h-[90%] border-[3px] border-[#b5cab3] flex  flex-col">
        <div className="flex justify-end">
          <button
            className="px-4 py-2  rounded-full mr-2 mt-2 object-right z-50 text-[#b1bfae] font-black"
            onClick={handleCerrarModalFiltro}
          >
            X
          </button>
        </div>
        <div className="px-10 pb-10 pt-2 font-bold text-lg">
          <h1 className="mr-auto">Vida</h1>
          <div className="pt-3 pb-7 px-1 flex items-center justify-center  w-full mb-3">
            <MultiRangeSlider
              min={0}
              max={300}
              minInicial={filtro.minVida}
              maxInicial={filtro.maxVida}
              filtro={filtro}
              setFiltro={setFiltro}
              name={"Vida"}
            />
          </div>
          <h1 className="mr-auto">Ataque</h1>
          <div className="pt-3 pb-7 px-1 flex items-center justify-center  w-full mb-3">
            <MultiRangeSlider
              min={0}
              max={300}
              minInicial={filtro.minAtaque}
              maxInicial={filtro.maxAtaque}
              filtro={filtro}
              setFiltro={setFiltro}
              name={"Ataque"}
            />
          </div>
          <h1 className="mr-auto">Defensa</h1>
          <div className="pt-3 pb-7 px-1 flex items-center justify-center  w-full mb-4">
            <MultiRangeSlider
              min={0}
              max={300}
              minInicial={filtro.minDefensa}
              maxInicial={filtro.maxDefensa}
              filtro={filtro}
              setFiltro={setFiltro}
              name={"Defensa"}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor={elemento1Id}>Elemento 1</label>
            <select
              id={elemento1Id}
              onChange={handleCambioElemento1}
              value={filtro.elemento1}
              className="p-2 bg-[#e8efe8] rounded-xl font-normal mb-4"
            >
              <option value="all">Todos</option>
              <OptionsPokemons />
            </select>

            <label htmlFor={elemento2Id}>Elemento 2</label>
            <select
              id={elemento2Id}
              onChange={handleCambioElemento2}
              value={filtro.elemento2}
              className="p-2 bg-[#e8efe8] rounded-xl font-normal mb-4"
            >
              <option value="none">No requerido</option>
              <option value="all">Todos</option>
              <OptionsPokemons />
            </select>

            <label htmlFor={ordenamientoFiltroId}>Orden</label>
            <select
              id={ordenamientoFiltroId}
              onChange={handleCambioOrdenamiento}
              value={filtro.ordenamiento}
              className="p-2 bg-[#e8efe8] rounded-xl font-normal mb-4"
            >
              <option value="all">Ninguno</option>
              <option value="ascNumero">Número: Menor a Mayor</option>
              <option value="descNumero">Número: Mayor a Menor</option>
              <option value="ascNombre">Nombre: A - Z</option>
              <option value="descNombre">Nombre: Z - A</option>
            </select>

            <button
              className=" p-2 mt-3 bg-[#9a0e0d] text-white rounded-xl font-bold object-righttext-white"
              onClick={handleResetearFiltros}
            >
              Eliminar Filtros
            </button>
            <button
              className=" p-2 mt-2 bg-[#84a61e] text-white font-bold rounded-xl object-righttext-white"
              onClick={() => {
                handleCerrarModalFiltro();
                handleAplicarFiltros();
              }}
            >
              Aplicar Filtros
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalFiltro;
