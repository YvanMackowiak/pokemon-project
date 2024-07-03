import { Box } from "@mui/material";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Stats } from "../types/pokemon";

interface PokemonStatsChartProps {
  stats?: Stats;
}

// Fonction pour convertir les statistiques en un format que recharts peut utiliser
const convertStatsToData = (stats: Stats) => {
  return [
    { name: "Spé Attack", value: stats.spe_atk },
    { name: "HP", value: stats.hp },
    { name: "Attack", value: stats.atk },
    { name: "Defense", value: stats.def },
    { name: "Spé Defense", value: stats.spe_def },
    { name: "Speed", value: stats.vit },
  ];
};

const PokemonStatsChart = ({ stats }: PokemonStatsChartProps) => {
  const data = stats && convertStatsToData(stats);

  return (
    <Box sx={{ width: "50%", height: 200 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default PokemonStatsChart;
