import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { AiFillHome } from "react-icons/ai";
import { BsMessenger } from "react-icons/bs";
import { RiNotificationBadgeFill } from "react-icons/ri";
import { MdArrowDropDownCircle } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/avatars-bottts-sprites";
import { useSelector, useDispatch } from "react-redux";
import { mobileNavSliceActions } from "../lib/slices/mobileNavSlice";
import {
  AppBar,
  Typography,
  Container,
  useTheme,
  Menu,
  MenuItem,
  Stack,
  Grid,
  IconButton,
  Divider,
  Button,
  useMediaQuery,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const Profile = () => {
  let svg = createAvatar(style, {
    seed: "custom-seed",
    dataUri: true,
    // ... and other options
  });

  return <img src={svg} width="30px" height="30px" alt="avatar" />;
};

const useStyles = makeStyles((theme) => ({
  AppBar: {
    padding: theme.spacing(2, 0),
    backgroundColor: "#fff",
  },
  AppBarTitle: {
    color: "#384555",
    fontFamily: "'Fredoka One', cursive",
    fontSize: "1.4rem",
  },
  AppBarNavLink: {
    color: "#c8c8c8",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "700",
  },
  profilebtn: {
    color: "#384555",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "700",
    textTransform: "lowercase",
  },
}));

const pages = ["HELP?", "What's New?"];

const Header = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const mobileNavState = useSelector((state) => state.mobileNav.mobileNavState);
  const dispatch = useDispatch();

  const openMobileNav = () => {
    dispatch({
      type: mobileNavSliceActions.mobileNavStateHandler,
      payload: true,
    });
  };

  useEffect(() => {
    console.log("mobile nav", mobileNavState);
  }, [mobileNavState]);
  return (
    <>
      <AppBar className={classes.AppBar} position="static" elevation={0}>
        <Container>
          <Grid container>
            <Grid xs={8} item>
              <Grid container>
                <Grid item xs={2} display="flex" alignItems="center">
                  <Typography className={classes.AppBarTitle}>
                    Hangout
                  </Typography>
                </Grid>
                {!isMobile ? (
                  <Grid
                    item
                    xs={3}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-evenly"
                  >
                    {pages.map((page, i) => (
                      <Link href="/">
                        <a className={classes.AppBarNavLink}>{page}</a>
                      </Link>
                    ))}
                  </Grid>
                ) : null}
              </Grid>
            </Grid>
            {!isMobile ? (
              <Grid
                item
                xs={4}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Stack spacing={2} direction="row">
                  <IconButton>
                    <BsMessenger color="#384555" />
                  </IconButton>
                  <IconButton>
                    <RiNotificationBadgeFill color="#384555" />
                  </IconButton>
                  <IconButton>
                    <AiFillHome color="#384555" />
                  </IconButton>
                </Stack>
                <Divider orientation="vertical" />
                <Button
                  className={classes.profilebtn}
                  startIcon={<Profile />}
                  endIcon={<MdArrowDropDownCircle color="#384555" />}
                >
                  beingsocasual
                </Button>
              </Grid>
            ) : (
              <Grid
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
                item
                xs={4}
              >
                <IconButton onClick={openMobileNav}>
                  <GiHamburgerMenu />
                </IconButton>
              </Grid>
            )}
          </Grid>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
