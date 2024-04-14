import axios from "axios";
import React, { useEffect, useState } from "react";

const Pokemon = () => {
  const [pokemonData, setPokemonData] = useState([]);

  const fetchApi = async () => {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
    );
    setPokemonData(response.data.results);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="flex flex-col justify-center h-screen w-full items-center">
      {pokemonData.map((pokemon, index) => {
        return (
          <div key={index}>
            <p>{pokemon.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Pokemon;
