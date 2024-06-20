// components/PokemonList.tsx
"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Pokemon } from "../types/pokemon";

interface Props {
  pokedexId: number;
}

const PokemonList = ({ pokedexId }: Props) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await axios.get<Pokemon>(
          `http://localhost:3001/api/pokemon/${pokedexId}`
        );
        setPokemon(res.data);
        setLoading(false);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred");
        }
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [pokedexId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data: {error}</div>;

  return (
    <ul>
      <>{console.log(pokemon)}</>
    </ul>
  );
};

export default PokemonList;
