import { Pokemon } from "@/types/pokemon";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import Box from "@mui/material/Box/Box";
import Typography from "@mui/material/Typography/Typography";

export interface PokemonCharacteristicsProps {
  pokemon: Pokemon;
}

export const PokemonCharacteristics = ({
  pokemon,
}: PokemonCharacteristicsProps) => {
  return (
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
  );
};
