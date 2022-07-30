import Image from "next/image";
import {useRef} from "react";
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

const PremiumBanner = ({data})=>{
    console.log("🚀 ~ file: PremiumBanner.js ~ line 36 ~ PremiumBanner ~ data", data)
    const theme = useTheme();
    const classes = useStyles();
    const swiperPrevRef = useRef(null);
    const swiperNextRef = useRef(null);
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
                { data?.photos?.map((photo,i)=>{ return(
                            <SwiperSlide key = {i}>
                                <img style = {{width:"100%",height:"300px",borderRadius:"10px"}} src = {photo.src.landscape}/>
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