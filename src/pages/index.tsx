"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import pokemonImage from "../../public/assets/evolution.jpg";
import PokemonList from "../components/PokemonCard";
import { useRandomPokemonId } from "../hooks/useRandomPokemonId";

export default function Home() {
  const randomNumber = useRandomPokemonId();
  const randomNumberTwo = useRandomPokemonId();

  return (
    <Box sx={{}}>
      <Box
        sx={{
          width: "100%",
          height: 200,
          position: "relative",
          backgroundColor: "black",
          paddingBottom: 1,
        }}
      >
        <Image
          src={pokemonImage}
          alt={"ok"}
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        gap={1}
        textAlign="justify"
        p={2}
      >
        <Typography
          variant="h1"
          sx={{ fontSize: "2rem", fontWeight: "bold", mb: 2 }}
        >
          Bienvenue sur votre site Pokémon, jeune dresseur en quête d'aventures
          !
        </Typography>
        <Typography>
          Plonge au cœur de l'univers Pokémon avec nous, où l'art de créer des
          équipes d'exception devient réalité. Que tu sois un stratège ambitieux
          visant l'équipe ultime en attaque, un défenseur acharné désireux de
          résister à toute adversité, ou même un dresseur téméraire en quête
          d'originalité, tu es au bon endroit !
        </Typography>
        <Typography>
          Explorer votre site et découvre des outils puissants qui te
          permettront de concevoir des équipes Pokémon inoubliables. Fais preuve
          de créativité pour élaborer des stratégies uniques, que ce soit pour
          surprendre tes rivaux avec une équipe atypique, garantir une défense
          impénétrable, ou tout simplement régner en maître sur tous les
          terrains.
        </Typography>
        <Typography>
          Que tu ambitionnes le titre de Champion de la Ligue Pokémon ou que tu
          souhaites simplement t'amuser avec des équipes hors du commun, votre
          site est là pour t'accompagner dans chaque étape de ton aventure.
          Prépare-toi à explorer l'infini de l'univers Pokémon et à créer des
          équipes qui entreront dans la légende !
        </Typography>
        <Typography>
          Attrape-les tous, jeune dresseur, et que ton voyage sur votre site
          soit aussi grandiose qu'un combat entre deux Pokémon légendaires !
        </Typography>
        <Typography>
          Maintenant, va de l'avant, jeune dresseur ! Crée ta première équipe et
          commence ton périple vers la victoire !
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        width="500px"
        alignItems="center"
        m="auto"
      >
        <PokemonList pokedexId={randomNumber} />
        <PokemonList pokedexId={randomNumberTwo} />
      </Box>
    </Box>
  );
}
