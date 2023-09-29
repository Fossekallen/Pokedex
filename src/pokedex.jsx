import "./pokedex.css";
import "./Mintrener.css";
import { useState, useEffect } from "react";
import jordan from "./jordan.png";

export const Pokedex = () => {
  const [pokemons, setPokemon] = useState([]);
  const [prefix, setPrefix] = useState("");
  const [pokemonStats, setPokemonStats] = useState({ img: jordan });
  // console.log("Pokedex just ran ", pokemons);

  async function searchPokemon() {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`
    ).then((data) => data.json());
    // console.log(res);
    const result = res.results;
    setPokemon(result);
  }
  useEffect(() => {
    searchPokemon();
  }, []);

  const filteredPokemons = pokemons.filter((pokemon) => {
    return pokemon.name.startsWith(prefix);
  });

  async function fetchPokemon(firstPokemon) {
    const pokemonData = await fetch(firstPokemon.url).then((data) =>
      data.json()
    );
    const pokemonStats = {
      img: pokemonData.sprites.front_default,
      height: pokemonData.height,
      weight: pokemonData.weight,
      element: pokemonData.types[0].type.name,
      id: pokemonData.id,
    };

    setPokemonStats(pokemonStats);
  }

  useEffect(() => {
    const firstPokemon = pokemons[0];
    if (!firstPokemon) {
      return;
    }

    fetchPokemon(firstPokemon);
  }, [pokemons]);

  return (
    <div className="middle">
      <div className="left">
        <p className="left-header">Pokemon nummer: {pokemonStats.id}</p>
        {/* <div className="id-style"></div> */}
        <div className="left-box-frame">
          <div className="left-box">
            <div className="circle circle-top">
              <div className="circle-2">?</div>
            </div>
            <img className="insert" src={pokemonStats.img}></img>
            <div className="pokemon-stats">
              <div>Høyde: {pokemonStats.height * 2.54} cm</div>
              <div>Vekt: {(pokemonStats.weight / 2.20462).toFixed(2)} kg</div>
              <div>Element: {pokemonStats.element}</div>
              <button className="fange-knapp">Fanget</button>
            </div>
            <div
              className="circle circle-bottom"
              style={{ alignItems: "center" }}
            >
              <div className="circle-2">?</div>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <label htmlFor="pokemons">
          <div className="pokemon-searchbar">
            <input
              className="search-input"
              placeholder="Søk etter Pokemon"
              onChange={(e) => setPrefix(e.target.value)}
              id="pokemons"
            />
          </div>
          <ul className="list">
            {filteredPokemons.map((pokemon) => {
              const name = pokemon.name;
              const splitUrl = pokemon.url.split("/");
              let id = splitUrl[splitUrl.length - 2];

              if (id < 10) {
                id = "00" + id;
              } else if (id < 100) {
                id = "0" + id;
              }
              return (
                <li
                  onClick={() => {
                    fetchPokemon(pokemon);
                  }}
                  key={name}
                >
                  <span className="list-id">{id}</span>
                  <span>{name}</span>
                </li>
              );
            })}
          </ul>
        </label>
      </div>
    </div>
  );
};
