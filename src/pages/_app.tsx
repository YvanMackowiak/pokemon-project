import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import type { AppProps } from "next/app";

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
    },
  },
  typography: {
    fontFamily:
      "Baskerville, Baskerville Old Face, Garamond, Times New Roman, serif",
  },
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
