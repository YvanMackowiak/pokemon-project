import PokemonStatsChart from "@/components/BarChart";
import { usePoekmon } from "@/hooks/usePokemon";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

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
          <Box
            marginTop="auto"
            sx={(t) => ({
              backgroundColor: t.palette.background.paper,
              p: 2,
              borderRadius: 4,
            })}
          >
            <Typography>Taille {pokemon.height}</Typography>
            <Typography>Poids {pokemon.weight}</Typography>
            <Typography display="flex">
              {pokemon.sexe?.female}
              <FemaleIcon /> <MaleIcon />
              {pokemon.sexe?.male}
            </Typography>
            <Typography>Cathégorie {pokemon.category}</Typography>
            <Typography display="flex" gap={0.5}>
              Talent
              {pokemon.talents?.map((t) => (
                <Typography pr={0.5}>{t.name}</Typography>
              ))}
            </Typography>
            {pokemon.talents && pokemon.talents[0].tc && (
              <Typography display="flex" gap={0.5}>
                Talent caché
                {pokemon.talents?.map((t) => (
                  <Typography pr={0.5}>{t.tc}</Typography>
                ))}
              </Typography>
            )}
          </Box>
        </Box>
        <PokemonStatsChart stats={pokemon.stats} />
      </Box>
    )
  );
};

export default PokemonDetail;
