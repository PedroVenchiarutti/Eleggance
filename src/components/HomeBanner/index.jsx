import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../pages/HomePage/HomePage.scss';
import 'swiper/css/navigation';

export const HomeBanner = ({ images,smallBanner }) => {
	
	const renderSlides = () => {
		if (window.screen.width <= 400 && window.screen.height <= 670) {
		  return smallBanner.map((image, index) => {
			return (
			  <SwiperSlide key={index}>
				<img src={image.url} alt={image.alt} />
			  </SwiperSlide>
			);
		  });
		} else {
		  return images.map((image, index) => {
			return (
			  <SwiperSlide key={index}>
				<img src={image.url}alt={image.alt} />
			  </SwiperSlide>
			);
		  });
		}
	  };
	
	if (!images) return;

	return (
		<Swiper
			modules={[Keyboard, Pagination, Navigation]}
			slidesPerView={1}
			keyboard={{
				enabled: true,
			}}
			pagination={{
				clickable: true,
			}}
			navigation={true}
			className="mySwiper"
		>
			{images.map((image, index) => {
				return (
					<SwiperSlide key={index}>
						{renderSlides()}
						{/* <img src={image.url} alt={image.alt} /> */}
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};
