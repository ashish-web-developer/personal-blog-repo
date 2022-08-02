import {memo} from "react";

import {
    TextField,
    Stack,
    InputAdornment,
    Box,
    Grid
} from "@mui/material";


import {BiSearch} from "react-icons/bi";
import TrendingBlogs from "./TrendingBlogs";
import {AiFillInstagram} from "react-icons/ai";
import {ImFacebook2} from "react-icons/im";
import {FaTwitterSquare} from "react-icons/fa";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({

    socialIconContainer:{
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center",
        height:"100%"
    }
})




const SideBar = ()=>{
    const classes = useStyles();
    return(
        <Stack spacing = {2} direction = "column">
                <TextField 
                variant="filled"
                color="secondary" 
                focused 
                placeholder="Search"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                        <BiSearch size = {24}/>
                        </InputAdornment>
                    ),
                    style:{
                        backgroundColor:"#fff",
                    },
                    disableUnderline:true
                }}
                />
                <TrendingBlogs/>
                <Box px = {2} sx = {{backgroundColor:"#fff",borderRadius:"8px"}}>
                    <Grid container>
                        <Grid item xs = {6}>
                            <h4>Check our Social!</h4>
                        </Grid>
                        <Grid item xs = {6}>
                            <div className = {classes.socialIconContainer}>
                                <AiFillInstagram size={24}/>
                                <ImFacebook2 size = {24}/>
                                <FaTwitterSquare size = {24}/>
                            </div>
                        </Grid>

                    </Grid>
                </Box>
        </Stack>
    )
}


export default memo(SideBar);