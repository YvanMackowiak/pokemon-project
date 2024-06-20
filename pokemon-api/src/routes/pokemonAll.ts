// src/routes/pokemon.ts
import { Router } from "express";
import fs from "fs";
import path from "path";

const router = Router();

router.get("/", (req, res) => {
  const filePath = path.resolve(__dirname, "..", "data", "pokemon.json");
  console.log(`Attempting to read file at: ${filePath}`);
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.error(`Failed to read file at ${filePath}:`, err);
      return res.status(500).json({ error: "Failed to read data" });
    }
    try {
      const pokemon = JSON.parse(data);
      res.json(pokemon);
    } catch (parseError) {
      console.error(`Failed to parse JSON data:`, parseError);
      res.status(500).json({ error: "Failed to parse data" });
    }
  });
});

export default router;
