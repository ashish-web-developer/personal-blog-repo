import Header from "../components/Header";
import Nav from "../components/Nav";
import Head from "next/head";
import { useState } from "react";
import MobileNav from "../components/MobileNav";
import MobileBottomNav from "../components/MobileBottomNav";
import { useMediaQuery, useTheme, Box } from "@mui/material";
export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />{" "}
      </Head>
      <MobileNav />
      <Header />
      <Nav />
      {isMobile ? (
        <Box
          sx={{
            position: "absolute",
            bottom: theme.spacing(0),
            width: "100%",
          }}
        >
          <MobileBottomNav />
        </Box>
      ) : null}
    </>
  );
}
