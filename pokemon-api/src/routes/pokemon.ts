// src/routes/pokemon.ts
import { Router } from "express";
import fs from "fs";
import path from "path";

const router = Router();

router.get("/:pokedex_id", (req, res) => {
  const filePath = path.resolve(__dirname, "..", "data", "pokemon.json");
  console.log(`Attempting to read file at: ${filePath}`);
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.error(`Failed to read file at ${filePath}:`, err);
      return res.status(500).json({ error: "Failed to read data" });
    }
    try {
      const pokemonArray = JSON.parse(data);
      const pokedexId = parseInt(req.params.pokedex_id, 10);
      const pokemon = pokemonArray.find((p: any) => p.pokedex_id === pokedexId);
      if (pokemon) {
        res.json(pokemon);
      } else {
        res.status(404).json({ error: "Pokémon not found" });
      }
    } catch (parseError) {
      console.error(`Failed to parse JSON data:`, parseError);
      res.status(500).json({ error: "Failed to parse data" });
    }
  });
});

export default router;
