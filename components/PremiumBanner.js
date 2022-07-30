import {useEffect, useRef,useState} from "react";
import {
    Box,
    Grid,
    IconButton,
    useTheme
} from "@mui/material"
import {
    makeStyles
} from "@mui/styles";
import {FiChevronLeft,FiChevronRight} from "react-icons/fi";


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";


const useStyles = makeStyles((theme)=>({
    navigationContainer:{
        position:"absolute",
        right:theme.spacing(2),
        bottom:theme.spacing(2),
        zIndex:"2"
    }
}))

const PremiumBanner = ()=>{
    const theme = useTheme();
    const classes = useStyles();
    const swiperPrevRef = useRef(null);
    const swiperNextRef = useRef(null);
    const [data,setData] = useState();
    useEffect(()=>{
        (async function(){
            const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEXT_PUBLIC_BLOG_API_KEY}`;
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
        }())
    })
    return (
        <>
        <Box width = "100%" position="relative">
            <Box className = {classes.navigationContainer}>
                <IconButton ref = {swiperPrevRef}>
                    <FiChevronLeft color="#ffffff"/>
                </IconButton>
                <IconButton ref = {swiperNextRef}>
                    <FiChevronRight color="#ffffff"/>
                </IconButton>
            </Box>
            <Swiper
            pagination={{
            type: "fraction",
            }}
            navigation={{
                nextEl:swiperNextRef.current,
                prevEl:swiperPrevRef.current
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            >
                { data?.articles?.map(({urlToImage},i)=>{ return(
                            <SwiperSlide key = {i}>
                                <img style = {{width:"100%",height:"300px",borderRadius:"10px"}} src = {urlToImage}/>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </Box>
        </>
    )
}


export default PremiumBanner;