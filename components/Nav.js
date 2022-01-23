import {AppBar ,Box,Stack} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Link from "next/link";


const useStyles = makeStyles(theme=>({
    Navbar:{
        backgroundColor:"#f8f8f8",
        padding:theme.spacing(3,0)
    },
    NavLink:{
        color:"#384555",
        fontFamily:"'Poppins', sans-serif",
        fontWeight:"700",
    }
}))


const pages = ["Mini Stories","Blogs","Online Magazine"];




const Nav = ()=>{
    const classes = useStyles();
    return(
        <AppBar elevation = {0} position = "static" className = {classes.Navbar}>
            <Box display = "flex" alignItems = "center" justifyContent = "center">
                <Stack direction = "row" spacing = {4}>
                {
                    pages.map((page,i)=>(
                        <Link href = "/">
                            <a className = {classes.NavLink}>{page}</a>
                        </Link>
                    ))
                }
                </Stack>
            </Box>
        </AppBar>
    ) 
}


export default Nav;