import { useEffect, useState } from "react";

import { Header } from "./components/Header";
import { Loading } from "./components/Loading";
import { ListarPokemons } from "./components/ListarPokemons";
import Modal from "./components/Modal";
import ModalFiltro from "./components/ModalFiltro";

import { filtradoMixto } from "./data/filtrarPokemons";
import { getPokemones, getAllPokemon } from "./data/getPokemons";

import "./loader.css";

function App() {
  const [search, setSearch] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsFiltrados, setPokemonsFiltrados] = useState([]);
  //const [realizoBusqueda, setRealizoBusqueda] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [seCargoTodos, setSeCargoTodos] = useState(false);

  const [mostrarModal, setMostrarModal] = useState(false);
  const [pokeModal, setPokeModal] = useState({});

  const [mostrarModalFiltro, setMostrarModalFiltro] = useState(false);

  const [filtro, setFiltro] = useState({
    minVida: 0,
    maxVida: 300,

    minAtaque: 0,
    maxAtaque: 300,
    minDefensa: 0,
    maxDefensa: 300,

    elemento1: "all",
    elemento2: "none",

    ordenamiento: "all",
  });

  useEffect(() => {
    getPokemones({
      setPokemons: setPokemonsFiltrados,
      setIsLoading,
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      getAllPokemon({
        setTodosPokemons: setPokemons,
        setSeCargoTodos,
        setIsLoading,
      });
    }, 1000);
  }, []);

  useEffect(() => {
    aplicarFiltrosEnData();
  }, [seCargoTodos, pokemons]);

  const aplicarFiltrosEnData = () => {
    if (seCargoTodos) {
      setPokemonsFiltrados(
        filtradoMixto({
          pokemons,
          filtro,
          nombre: search,
        })
      );
    }
  };

  const handleAplicarFiltros = () => {
    aplicarFiltrosEnData();
  };

  useEffect(() => {
    if (search && search != "" && seCargoTodos) {
      setPokemonsFiltrados(filtradoMixto({ pokemons, nombre: search, filtro }));
    }
  }, [search, seCargoTodos]);

  const reinicioMostrarTodos = () => {
    if (seCargoTodos) {
      setSearch("");
      handleResetearFiltros();
      setPokemonsFiltrados(pokemons);
    }
  };

  const handleMostrarModal = (poke) => {
    setMostrarModal(true);

    setPokeModal(poke);
  };
  const handleCerrarModal = () => {
    setMostrarModal(false);
    setPokeModal({});
  };
  const handleMostrarModalFiltro = () => {
    setMostrarModalFiltro(true);
  };
  const handleCerrarModalFiltro = () => {
    setMostrarModalFiltro(false);
  };
  const handleResetearFiltros = () => {
    setFiltro({
      minVida: 0,
      maxVida: 300,

      minAtaque: 0,
      maxAtaque: 300,
      minDefensa: 0,
      maxDefensa: 300,

      elemento1: "all",
      elemento2: "none",

      ordenamiento: "all",
    });
    handleCerrarModalFiltro();
    setPokemonsFiltrados(pokemons);
  };

  return (
    <div className="font-lato ">
      <Header
        setSearch={setSearch}
        reinicioMostrarTodos={reinicioMostrarTodos}
        handleMostrarModalFiltro={handleMostrarModalFiltro}
      ></Header>

      {pokemonsFiltrados.length > 0 ? (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  xl:grid-cols-5 gap-3 max-w-[85%] m-auto mb-8 pt-5">
            <ListarPokemons
              pokemons={pokemonsFiltrados}
              handleMostrarModal={handleMostrarModal}
            />
          </div>
          {isLoading && <Loading />}
        </>
      ) : isLoading ? (
        <Loading />
      ) : (
        <h1 className=" m-auto text-center text-xl mt-10">
          No se encontraron pokemons con ese nombre
        </h1>
      )}
      {mostrarModal && (
        <Modal poke={pokeModal} handleCerrarModal={handleCerrarModal}></Modal>
      )}
      {mostrarModalFiltro && (
        <ModalFiltro
          handleCerrarModalFiltro={handleCerrarModalFiltro}
          filtro={filtro}
          setFiltro={setFiltro}
          handleAplicarFiltros={handleAplicarFiltros}
          handleResetearFiltros={handleResetearFiltros}
        />
      )}
    </div>
  );
}

export default App;
