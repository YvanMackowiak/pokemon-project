"use client";

import { useEffect, useState } from "react";
import PokemonList from "./components/PokemonCard";
import { useRandomPokemonId } from "./hooks/useRandomPokemonId";

export default function Home() {
  const randomNumber = useRandomPokemonId();
  const [currentNumber, setCurrentNumber] = useState<number>(0);

  useEffect(() => {
    if (randomNumber !== 0) {
      setCurrentNumber(randomNumber);
    }
  }, [randomNumber]);

  return (
    <div>
      <PokemonList pokedexId={currentNumber} />
    </div>
  );
}
