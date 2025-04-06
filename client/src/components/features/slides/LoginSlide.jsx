import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function LoginSlide() {
    const images = [
        "/halloween-3d-interior-background.jpg",
        "/1693657511Banner.jpg"
    ]
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            // pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            speed={2000}
            style={{
            }}
        >
            {
                images?.map((image, index) => (
                    <SwiperSlide><img src={image} key={index} className='w-100' alt="Slide 1" style={{ objectFit: "contain" }} /></SwiperSlide>
                ))
            }
        </Swiper>
    )
}
