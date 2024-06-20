// components/PokemonList.tsx
"use client";

import { useEffect, useState } from "react";
import axios from "axios";

// types/pokemon.ts
export interface Pokemon {
  name: string;
}

const PokemonList = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await axios.get<Pokemon[]>(
          "http://localhost:3001/api/pokemon"
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
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data: {error}</div>;

  return (
    <ul>
      {pokemon.map((p) => (
        <li key={p.name}>{p.name}</li>
      ))}
    </ul>
  );
};

export default PokemonList;
