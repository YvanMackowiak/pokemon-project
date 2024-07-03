import { Pokemon } from "@/types/pokemon";
import axios from "axios";
import { useEffect, useState } from "react";

export const usePoekmon = (pokedexId: number) => {
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

  return {
    pokemon,
    loading,
    error,
  };
};
