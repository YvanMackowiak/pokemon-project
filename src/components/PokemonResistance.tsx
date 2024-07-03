import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import Image from "next/image";
import { Resistances } from "../types/pokemon";

interface PokemonResistancesProps {
  resistances: Resistances[];
  name: string;
}

const PokemonResistances = ({ resistances, name }: PokemonResistancesProps) => {
  // Filtrer les résistances où le multiplicateur est supérieur à 1
  const filteredResistances = resistances.filter(
    (resistance) => resistance.multiplier > 1
  );

  const getLogoPath = (name: string) => {
    switch (name.toLowerCase()) {
      case "normal":
        return "/assets/logoType/normal.png";
      case "plante":
        return "/assets/logoType/plante.png";
      case "feu":
        return "/assets/logoType/feu.png";
      case "eau":
        return "/assets/logoType/eau.png";
      case "électrik":
        return "/assets/logoType/electrik.png";
      case "glace":
        return "/assets/logoType/glace.png";
      case "combat":
        return "/assets/logoType/combat.png";
      case "poison":
        return "/assets/logoType/poison.png";
      case "sol":
        return "/assets/logoType/sol.png";
      case "vol":
        return "/assets/logoType/vol.png";
      case "psy":
        return "/assets/logoType/psy.png";
      case "insecte":
        return "/assets/logoType/insecte.png";
      case "roche":
        return "/assets/logoType/roche.png";
      case "spectre":
        return "/assets/logoType/spectre.png";
      case "dragon":
        return "/assets/logoType/dragon.png";
      case "ténèbres":
        return "/assets/logoType/tenebres.png";
      case "acier":
        return "/assets/logoType/acier.png";
      case "fée":
        return "/assets/logoType/fee.png";
      default:
        return "";
    }
  };

  return (
    <Box
      sx={(t) => ({
        p: 2,
        borderRadius: 4,
        backgroundColor: t.palette.background.paper,
      })}
    >
      <Typography variant="h6" gutterBottom>
        Faiblesses de {name}
      </Typography>
      <List sx={{ display: "flex" }}>
        {filteredResistances.map((resistance, index) => (
          <ListItem key={index} sx={{ display: "flex", alignItems: "center" }}>
            <Image
              src={getLogoPath(resistance.name)}
              alt={resistance.name}
              width={32}
              height={32}
            />
            <ListItemText
              primary={resistance.name}
              secondary={`Multiplicateur: ${resistance.multiplier}`}
              sx={{
                ml: 2,
                "& .MuiListItemText-secondary": {
                  color: "red",
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default PokemonResistances;
