import Profile from "./components/Profile";
import { useEffect, useState } from "react";
import Stats from "./components/Stats";
import Search from "./components/Search";
import { LoadingSpinner } from "./components/Loading";

function App() {
  const [name, setName] = useState("");
  const [id, setId] = useState(1);
  const [error, setError] = useState(false);
  const [pokemon, setPokemon] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let ignore = false;
    setError(false);
    setIsLoading(false);

    const fetchPokemon = async () => {
      setIsLoading(true);
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${name !== "" ? name : id}`
      );

      if (!res.ok) {
        setError(true);
        setIsLoading(false);
      }

      const data = await res.json();
      if (!ignore) {
        setPokemon(data);
        setIsLoading(false);
      }
    };

    fetchPokemon();

    return () => {
      ignore = true;
    };
  }, [id, name]);

  function getInput(name) {
    setName(name);
  }

  if (!pokemon) return null;

  return (
    <div className="mx-auto max-w-[44rem] px-6">
      <Search getInput={getInput} />
      {error && (
        <div className="flex flex-col items-center  ">
          <h1 className="text-center mt-10 font-bold capatalize text-5xl text-teal-400">
            No data found !
          </h1>
          <button
            className="bg-yellow-300 px-4 py-2 rounded-lg mt-6 font-medium"
            onClick={() => setError(false)}
          >
            Go back
          </button>
        </div>
      )}

      {isLoading && (
        <div className="mt-12">
          <LoadingSpinner width={50} height={50} />
        </div>
      )}
      {!error && !isLoading && (
        <>
          <Profile
            name={pokemon.name}
            weight={pokemon.weight}
            height={pokemon.height}
            types={pokemon.types}
            img={pokemon.sprites.other["official-artwork"].front_default}
          />
          <Stats stats={pokemon.stats} />

          <div className="space-x-4 mt-6">
            <button
              className="bg-gray-200 rounded-full p-2"
              onClick={() => {
                setName("");
                if (id == 1) return;
                setId(id - 1);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              className="bg-gray-200 rounded-full p-2"
              onClick={() => {
                setName("");
                setId(id + 1);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;

// https://pokeapi.co/api/v2/pokemon/1
