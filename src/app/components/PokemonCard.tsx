// components/PokemonList.tsx
"use client";

import { Avatar, Box, CircularProgress, Typography } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import Female from "../../../public/assets/Female.png";
import Male from "../../../public/assets/Male.png";
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

  if (loading) return <CircularProgress />;
  if (error)
    return <Typography color="error">Error fetching data: {error}</Typography>;
  if (!pokemon) return <Typography>No data</Typography>;

  return (
    <Box
      sx={{
        border: 1,
        borderRadius: 4,
        borderColor: "grey.500",
        width: 200,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 2,
      }}
    >
      <Box
        sx={{
          width: 200,
          height: 200,
          position: "relative",
        }}
      >
        <Image
          src={pokemon.sprites.regular}
          alt={pokemon.name.fr}
          layout="fill"
          objectFit="contain"
        />
      </Box>
      <Typography variant="body1">
        N°{pokemon.pokedex_id} {pokemon.name.fr}
      </Typography>
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <Typography>Types :</Typography>
        {pokemon.types?.map((type) => (
          <Box
            key={type.name}
            sx={{ width: 20, height: 20, position: "relative" }}
          >
            <Image
              src={type.image}
              alt={type.name}
              layout="fill"
              objectFit="contain"
            />
          </Box>
        ))}
      </Box>
      <Box sx={{ display: "flex", gap: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar sx={{ width: 15, height: 15 }} src={Female.src} alt="femme" />
          <Typography variant="body2">{pokemon.sexe?.female}</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar sx={{ width: 15, height: 15 }} src={Male.src} alt="homme" />
          <Typography variant="body2">{pokemon.sexe?.male}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PokemonList;
