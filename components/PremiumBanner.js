import Image from "next/image";
import {
    Box
} from "@mui/material"
import {
    makeStyles
} from "@mui/styles";


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";


const useStyles = makeStyles(()=>({
    root:{
        borderRadius:"10px",
        overflow:"hidden",
        width:"100%",
        height:"300px"
    }
}))

const PremiumBanner = ({data})=>{
    const classes = useStyles();
    return (
        <>

        <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        >
            { data.photos.map((photo,i)=>{ return(
                        <SwiperSlide key = {i}>
                            <div className = {classes.root}>
                                <img width = "100%" height = "100%" src = {photo.src.landscape}/>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
      </Swiper>
        </>
    )
}


export default PremiumBanner;