import {
  Drawer,
  Box,
  IconButton,
  Grid,
  Typography,
  Container,
  Divider,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { mobileNavSliceActions } from "../lib/slices/mobileNavSlice";
import { makeStyles } from "@mui/styles";
import { VscChromeClose } from "react-icons/vsc";
import { BsFillCaretLeftFill } from "react-icons/bs";

const useStyles = makeStyles((theme) => ({
  AppBarTitle: {
    color: "#384555",
    fontFamily: "'Fredoka One', cursive",
    fontSize: "1.4rem",
  },
  drawerPaper: {
    width: "100%",
  },
}));

const MobileNav = () => {
  const classes = useStyles();
  const mobileNavState = useSelector((state) => state.mobileNav.mobileNavState);
  const dispatch = useDispatch();

  const onDrawerCloseHandler = () => {
    dispatch({
      type: mobileNavSliceActions.mobileNavStateHandler,
      payload: false,
    });
  };

  return (
    <Drawer
      anchor="left"
      open={mobileNavState}
      onClose={onDrawerCloseHandler}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Container>
        <Grid container>
          <Grid
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            item
            xs={10}
          >
            <Typography className={classes.AppBarTitle}>Hangout</Typography>
          </Grid>
          <Grid
            display="flex"
            justifyContent="center"
            alignItems="center"
            item
            xs={2}
          >
            <IconButton onClick={onDrawerCloseHandler}>
              <Box
                p={1.5}
                style={{ borderRadius: "30px", backgroundColor: "#f8f8f8" }}
              >
                <BsFillCaretLeftFill color="#000" />
              </Box>
            </IconButton>
          </Grid>
        </Grid>
        <Divider />
      </Container>
    </Drawer>
  );
};

export default MobileNav;
