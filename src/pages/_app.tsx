import { Footer } from "@/components/Footer";
import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import type { AppProps } from "next/app";
import Header from "../components/Header";

const theme = createTheme({
  palette: {
    primary: {
      main: "#393057", // Couleur principale
      light: "#EFDDFF",
    },
    secondary: {
      main: "#EFDDFF", // Couleur secondaire
    },
    error: {
      main: "#FF3B30", // Couleur d'erreur
    },
    background: {
      default: "#23272a", // Couleur de fond par défaut
      paper: "#2C2F31",
    },
    text: { primary: "#FFFFFF" },
  },
  typography: {
    fontFamily:
      "Baskerville, Baskerville Old Face, Garamond, Times New Roman, serif",
    fontSize: 15,
  },
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
