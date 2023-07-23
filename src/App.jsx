import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { getPokemones, getAllPokemones } from "./data/getPokemons";
import { ListarPokemons } from "./components/ListarPokemons";
import "./loader.css";

function App() {
  const [search, setSearch] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [existeSiguiente, setExisteSiguiente] = useState(true);
  const [realizoBusqueda, setRealizoBusqueda] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSiguiente = () => {
    setOffset((prevState) => prevState + 20);
  };
  const reinicioMostrarTodos = () => {
    setPokemons((prevState) => (prevState.length <= 1 ? [] : prevState));
    setSearch("");
    setOffset(0);
    setRealizoBusqueda(false);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      handleSiguiente();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

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
      getAllPokemones({ search, setPokemons, setIsLoading });
    }
  }, [search]);

  return (
    <>
      <Header
        setSearch={setSearch}
        reinicioMostrarTodos={reinicioMostrarTodos}
        realizoBusqueda={realizoBusqueda}
      ></Header>

      {pokemons.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  xl:grid-cols-5 gap-3 max-w-[85%] m-auto mb-8">
          <ListarPokemons pokemons={pokemons} />
        </div>
      ) : isLoading ? (
        <div className="m-auto flex justify-center mt-10">
          <span className="loader"></span>
        </div>
      ) : (
        <h1 className=" m-auto text-center text-xl mt-10">
          No se encontraron pokemons con ese nombre
        </h1>
      )}

      {/*<footer className="flex justify-center my-8">
        <button
          className="bg-yellow-500 text-white rounded-xl px-5 py-3 w-1/5 md:w-auto"
          onClick={handleSiguiente}
        >
          Cargar más
        </button>
      </footer>*/}
    </>
  );
}

export default App;