import { Pokemon } from "@/types/pokemon";
import { Avatar, Box, CircularProgress, Typography } from "@mui/material";
import { useRouter } from "next/dist/client/components/navigation";
import Image from "next/image";
import Female from "../../public/assets/Female.png";
import Male from "../../public/assets/Male.png";

interface Props {
  pokemon: Pokemon | null;
  loading?: boolean;
  error: string | null;
}

const PokemonList = ({ pokemon, error, loading }: Props) => {
  const router = useRouter();

  if (loading) return <CircularProgress />;
  if (error)
    return <Typography color="error">Error fetching data: {error}</Typography>;
  if (!pokemon) return <Typography>No data</Typography>;

  const handleBoxClick = () => {
    router.push(`/pokemon/${pokemon.pokedex_id}`);
  };

  return (
    <Box
      onClick={handleBoxClick}
      sx={(t) => ({
        border: 1,
        borderColor: "grey.500",
        borderRadius: 4,
        width: 200,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 2,
        backgroundColor: t.palette.background.paper,
        ":hover": {
          cursor: "pointer",
          backgroundColor: t.palette.background.default,
        },
      })}
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
          fill
          style={{ objectFit: "contain" }}
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
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
              fill
              style={{ objectFit: "contain" }}
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Box>
        ))}
      </Box>
      {pokemon.sexe && (
        <Box sx={{ display: "flex", gap: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              sx={{ width: 15, height: 15 }}
              src={Female.src}
              alt="femme"
            />
            <Typography variant="body2">{pokemon.sexe?.female}</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar sx={{ width: 15, height: 15 }} src={Male.src} alt="homme" />
            <Typography variant="body2">{pokemon.sexe?.male}</Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default PokemonList;
