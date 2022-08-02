import Header from "../components/Header";
import Nav from "../components/Nav";
import Head from "next/head";
import MobileNav from "../components/MobileNav";
import MobileBottomNav from "../components/MobileBottomNav";
import { useMediaQuery, useTheme, Box ,Grid, Container} from "@mui/material";
import PremiumBanner from "../components/PremiumBanner";
import BlogTab from "../components/BlogsTabs";
import SideBar from "../components/SideBar";



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
      <Box pt = {5} style ={{backgroundColor:"#f2f2f2"}} >
      <Container>
        <Grid container spacing = {4}>
          <Grid xs = {8} item>
            <div>
              <PremiumBanner/>
              <BlogTab/>
            </div>
          </Grid>
          {!isMobile &&
          <Grid  xs = {4} item>
            <SideBar/>
          </Grid>
          }
        </Grid>
      </Container>
      </Box>
    </>
  );
}


