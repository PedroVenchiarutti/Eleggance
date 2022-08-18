import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

export const SectionCarousel = ({ images }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {images.map((image, i) => {
        return (
          <SwiperSlide key={i}>
            <img src={image.url} alt="" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
