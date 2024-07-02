import { Box, Typography, useTheme } from "@mui/material";

export const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        marginTop: "auto",
        backgroundColor: theme.palette.background.default, // Couleur de fond du footer
        padding: "20px",
        textAlign: "center",
      }}
    >
      <Typography
        variant="body2"
        color={theme.palette.primary.light}
        fontSize={"1rem"}
      >
        © 2024 PokeTeamBuilder | Tous droits réservés
      </Typography>
    </Box>
  );
};
