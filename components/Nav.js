import {
    AppBar ,
    Box,
    Stack,
    useMediaQuery,
    useTheme
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Link from "next/link";


const useStyles = makeStyles(theme=>({
    Navbar:{
        backgroundColor:"#f8f8f8",
        padding:theme.spacing(3,0)
    },
    NavLink:(isMobile)=>({
        color:"#384555",
        fontFamily:"'Poppins', sans-serif",
        fontWeight:"700",
        fontSize:isMobile?"0.8rem":"1rem"
    })
}))


const pages = ["Mini Stories","Blogs","Online Magazine"];




const Nav = ()=>{
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const classes = useStyles({isMobile});
    return(
        <AppBar elevation = {0} position = "static" className = {classes.Navbar}>
            <Box display = "flex" alignItems = "center" justifyContent = "center">
                <Stack direction = "row" spacing = {4}>
                {
                    pages.map((page,i)=>(
                        <Link key={i} href = "/">
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