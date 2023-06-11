import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo.png";

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexDirection="inherit"
      flexWrap="wrap"
      px="40px"
      pt="24px"
      pb="24px"
    >
      <img src={Logo} alt="logo" style={{ height: "41px" }} />
      <Typography variant="h5" sx={{ fontSize: { lg: "28px", xs: "20px" } }}>
        Fitness App ❤️{" "}
      </Typography>
    </Stack>
  </Box>
);

export default Footer;
