import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import {
  getPokemones,
  getPokemonByNameOrNumber,
  getAllPokemon,
} from "./data/getPokemons";
import { ListarPokemons } from "./components/ListarPokemons";
import Modal from "./components/Modal";
import "./loader.css";
import InfiniteScroll from "react-infinite-scroll-component";

function App() {
  const [search, setSearch] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [existeSiguiente, setExisteSiguiente] = useState(true);
  const [realizoBusqueda, setRealizoBusqueda] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [pokeModal, setPokeModal] = useState({});
  const [todosPokemons, setTodosPokemons] = useState([]);

  const handleSiguiente = () => {
    setOffset((prevState) => prevState + 20);
  };

  const reinicioMostrarTodos = () => {
    setPokemons((prevState) => (prevState.length <= 1 ? [] : prevState));
    setSearch("");
    setOffset(0);
    setRealizoBusqueda(false);
  };

  /*
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      handleSiguiente();
    }
  };

  useEffect(() => {
    //window.addEventListener("scroll", handleScroll);
  }, []);*/

  useEffect(() => {
    if (offset < 0) return;

    getPokemones({
      newOffset: offset,
      existeSiguiente,
      setExisteSiguiente,
      setPokemons,
      setIsLoading,
    });
  }, [offset]);

  useEffect(() => {
    if (search) {
      setRealizoBusqueda(true);
      setPokemons([]);
      setOffset(-1);
      setExisteSiguiente(true);
      getPokemonByNameOrNumber({ search, setPokemons, setIsLoading });
    }
  }, [search]);

  /*
  useEffect(() => {
    setTimeout(() => {
      getAllPokemon({ setTodosPokemons: setPokemons, setExisteSiguiente });
    }, 5000);
  }, []);*/

  const handleMostrarModal = (poke) => {
    setMostrarModal(true);
    setPokeModal(poke);
  };
  const handleCerrarModal = () => {
    setMostrarModal(false);
    setPokeModal({});
  };

  return (
    <>
      <Header
        setSearch={setSearch}
        reinicioMostrarTodos={reinicioMostrarTodos}
        realizoBusqueda={realizoBusqueda}
      ></Header>

      {pokemons.length > 0 ? (
        <InfiniteScroll
          dataLength={pokemons.length}
          next={handleSiguiente}
          hasMore={existeSiguiente}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  xl:grid-cols-5 gap-3 max-w-[85%] m-auto mb-8 pt-5">
            <ListarPokemons
              pokemons={pokemons}
              handleMostrarModal={handleMostrarModal}
            />
          </div>
        </InfiniteScroll>
      ) : isLoading ? (
        <div className="m-auto flex justify-center mt-10">
          <span className="loader"></span>
        </div>
      ) : (
        <h1 className=" m-auto text-center text-xl mt-10">
          No se encontraron pokemons con ese nombre
        </h1>
      )}
      {mostrarModal && (
        <Modal poke={pokeModal} handleCerrarModal={handleCerrarModal}></Modal>
      )}
    </>
  );
}

export default App;
