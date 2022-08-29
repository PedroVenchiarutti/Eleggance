import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import Card from './Card';
import { useFetch } from '../../hooks/useFetch';

const Carrousel = ({ products, title }) => {

	const { data } = useFetch(`api/public/products/pages/1`)

	if (!products) return;
	return (
		<div className="container-promo">
			<div className="swiperSlidePromo">
				<h1 className="blog-title">{title}</h1>
				<Swiper
					slidesPerView={1}
					spaceBetween={10}
					pagination={{
						clickable: true,
					}}
					breakpoints={{
						640: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 4,
							spaceBetween: 40,
						},
						1024: {
							slidesPerView: 5,
							spaceBetween: 50,
						},
					}}
					modules={[Pagination]}
					className="mySwiper"
				>
					{/* {products.map((product, index) => { */}
					{data.map((data, index) => {
						return (
							<SwiperSlide key={index} className="swiper-container">
								<Card product={data} />
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</div>
	);
};

export default Carrousel;
