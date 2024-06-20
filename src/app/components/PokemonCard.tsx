// components/PokemonList.tsx
"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Pokemon, Stats } from "../types/pokemon";
import Image from "next/image";
import Male from "../../../public/assets/Male.png";
import Femela from "../../../public/assets/Female.png";

interface Props {
  pokedexId: number;
}

interface StatsProps {
  stats?: Stats;
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

  //TODO composant chargement
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data: {error}</div>;
  if (!pokemon) return <div>No data</div>;
  console.log(pokemon);

  return (
    <div
      style={{
        border: "1px solid grey",
        width: "200px",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "200px",
          height: "200px",
          position: "relative",
        }}
      >
        <Image
          src={pokemon.sprites.regular}
          alt={pokemon.name.fr}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <p>
        N°{pokemon.pokedex_id} {pokemon.name.fr}
      </p>
      <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
        <p>Types :</p>
        {pokemon.types?.map((type) => (
          <div
            key={type.name}
            style={{ width: "20px", height: "20px", position: "relative" }}
          >
            <Image
              src={type.image}
              alt={type.name}
              layout="fill"
              objectFit="contain"
            />
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: "4px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: "15px", height: "15px", position: "relative" }}>
            <Image
              src={Femela}
              alt={"femme"}
              layout="fill"
              objectFit="contain"
            />
          </div>
          {pokemon.sexe?.female}
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: "15px", height: "15px", position: "relative" }}>
            <Image src={Male} alt={"homme"} layout="fill" objectFit="contain" />
          </div>
          {pokemon.sexe?.male}
        </div>
      </div>
    </div>
  );
};

export default PokemonList;
