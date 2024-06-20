// src/server.ts
import express from "express";
import cors from "cors";
import pokemonRoutes from "./routes/pokemon";
import pokemonAllRoutes from "./routes/pokemonAll";

const app = express();
const port = 3001;

app.use(cors());

// Utiliser les routes
app.use("/api/pokemon", pokemonRoutes);
app.use("/api/pokemonAll", pokemonAllRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
