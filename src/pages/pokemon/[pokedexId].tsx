import PokemonStatsChart from "@/components/BarChart";
import { PokemonCharacteristics } from "@/components/PokemonCharacteristics";
import PokemonResistances from "@/components/PokemonResistance";
import { usePoekmon } from "@/hooks/usePokemon";
import { Pokemon } from "@/types/pokemon";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

export interface PokemonCharacteristicsProps {
  pokemon: Pokemon;
}

const PokemonDetail = () => {
  const router = useRouter();
  const { pokedexId } = router.query;
  const { error, loading, pokemon } = usePoekmon(Number(pokedexId));

  if (loading) return <></>;
  if (error) return <></>;

  return (
    pokemon && (
      <Box
        display="flex"
        flexDirection="column"
        width="100%"
        alignItems="center"
        pt={2}
      >
        <Typography variant="h2">
          {pokemon.name.fr} N°{pokedexId}
        </Typography>
        <Box display="flex" gap={1}>
          <Box
            sx={{
              width: 300,
              height: 300,
              position: "relative",
            }}
          >
            <Image
              src={pokemon.sprites.regular}
              alt={pokemon.name.fr}
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </Box>
          <PokemonCharacteristics pokemon={pokemon} />
        </Box>
        <PokemonStatsChart stats={pokemon.stats} />
        {pokemon && pokemon.resistances && (
          <Box display="flex" gap={2} pt={2}>
            <PokemonResistances
              resistances={pokemon.resistances}
              name={pokemon.name.fr}
            />
            <PokemonResistances
              resistances={pokemon.resistances}
              name={pokemon.name.fr}
              res
            />
          </Box>
        )}
      </Box>
    )
  );
};

export default PokemonDetail;
