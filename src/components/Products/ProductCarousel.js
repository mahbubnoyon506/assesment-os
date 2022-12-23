import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../../Global.css";
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function ProductCarousel({product}) {
    // console.log(product)
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const slides = [
        { image: "" },
        { image: "" },
        { image: "" },
        { image: "" },
        { image: "" },
        { image: "" },
    ]

    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Thumbs]}
                className="mySwiper2"
            >
                {
                    slides.map((slide, index) =>
                        <SwiperSlide key={index}>
                            <img src={product.image} alt='' />
                        </SwiperSlide>
                    )
                }
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper Thumbnail"
            >
                {
                    slides.map((slide, index) =>
                        <SwiperSlide key={index}>
                            <img src={product.image} alt='' />
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </>
    );
}
