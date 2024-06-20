// src/routes/pokemon.ts
import { Router } from "express";

const router = Router();

const pokemon = [
  { name: "bulbasaur" },
  { name: "ivysaur" },
  { name: "venusaur" },
  { name: "charmander" },
  { name: "charmeleon" },
  { name: "charizard" },
  { name: "squirtle" },
  { name: "wartortle" },
  { name: "blastoise" },
  { name: "caterpie" },
];

router.get("/", (req, res) => {
  res.json(pokemon);
});

export default router;
