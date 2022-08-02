
import {useState,useEffect,memo} from "react";
import {
    Grid,
    Stack
} from "@mui/material"
import {
    makeStyles
} from "@mui/styles";

const useStyles = makeStyles((theme)=>({
    container:{
        backgroundColor:"#fff",
        borderRadius:"8px",
        padding:"16px 32px",
    },
    imgStyle:{
        borderRadius:"8px",
        width:"60px"
    },
    authorText:{
        width:"200px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        margin:"0px"
    },
    textContainer:{
        marginLeft:"20px",
        display:"flex",
        flexDirection:"column",
    }
    
}))

function TrendingBlogs(){
    const classes = useStyles();
    const [data,setData] = useState();

    useEffect(()=>{
        (async function(){
            const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEXT_PUBLIC_BLOG_API_KEY}`;
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
        }())
    },[])
    return(
        <div className = {classes.container}>
            <Stack spacing={2} direction = "row">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 50 50"
                    width="30px"
                    height="30px"
                    >
                    <g id="surface5236577">
                        <path
                        style={{
                            stroke: "none",
                            fillRule: "nonzero",
                            fill: "rgb(100%,14.509805%,45.882353%)",
                            fillOpacity: 1
                        }}
                        d="M 42.992188 22.839844 C 42.996094 22.726562 43 22.613281 43 22.5 C 43 15.054688 36.945312 9 29.5 9 C 24.527344 9 20.003906 11.722656 17.652344 16.03125 C 16.558594 15.359375 15.296875 15 14 15 C 10.140625 15 7 18.140625 7 22 C 7 22.269531 7.015625 22.539062 7.050781 22.816406 C 3.398438 24.382812 1 27.96875 1 32 C 1 37.417969 5.242188 41.800781 10.664062 41.984375 C 10.734375 41.992188 10.808594 42 10.886719 42 L 39.636719 42 C 39.890625 42 40.296875 42 40.679688 41.851562 C 40.683594 41.851562 40.683594 41.847656 40.6875 41.847656 C 45.503906 41.027344 49 36.886719 49 32 C 49 28.007812 46.617188 24.417969 42.992188 22.839844 Z M 18 36 C 18 36.550781 17.550781 37 17 37 L 15 37 C 14.449219 37 14 36.550781 14 36 L 14 29 C 14 28.449219 14.449219 28 15 28 L 17 28 C 17.550781 28 18 28.449219 18 29 Z M 24 36 C 24 36.550781 23.550781 37 23 37 L 21 37 C 20.449219 37 20 36.550781 20 36 L 20 26 C 20 25.449219 20.449219 25 21 25 L 23 25 C 23.550781 25 24 25.449219 24 26 Z M 30 36 C 30 36.550781 29.550781 37 29 37 L 27 37 C 26.449219 37 26 36.550781 26 36 L 26 23 C 26 22.449219 26.449219 22 27 22 L 29 22 C 29.550781 22 30 22.449219 30 23 Z M 36 36 C 36 36.550781 35.550781 37 35 37 L 33 37 C 32.449219 37 32 36.550781 32 36 L 32 20 C 32 19.449219 32.449219 19 33 19 L 35 19 C 35.550781 19 36 19.449219 36 20 Z M 36 36 "
                        />
                    </g>
                </svg>
                <h3 style = {{margin:"0em"}}>Top Contributors</h3>
            </Stack>
            <Grid mt={2} container spacing={2}>
                {
                    data?.articles?.slice(0,3).map(({urlToImage,author},index)=>{
                        return(
                            <Grid key = {index} xs = {12} item>
                                <Stack direction = "row">
                                    <img className = {classes.imgStyle} width = {60} src = {urlToImage}/>
                                    <div className = {classes.textContainer}>
                                        <h4 className = {classes.authorText}>{author}</h4>
                                        <p>testing..</p>
                                    </div>
                                </Stack>
                            </Grid>
                        )

                    })
                }
            </Grid>
        </div>

    )
}

export default memo(TrendingBlogs);