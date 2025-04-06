import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function ImageSlide({ images }) {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            speed={2000}
            style={{
                boxShadow : "0 0 8px black",
                borderRadius : "20px",
            }}
        >
            {
                images?.map((image,index) => (
                    <SwiperSlide><img src={image} key={index} className='w-100 ' alt="Slide 1" style={{objectFit : "contain"}}/></SwiperSlide>
                ))
            }
        </Swiper>
    )
}
