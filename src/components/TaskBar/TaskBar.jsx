import React, { useEffect, useState } from 'react';
import './TaskBar.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

export default () => {
	const [isMobile, setMobile] = useState(null);
	useEffect(() => {
		window.innerWidth < 641 ? setMobile(true) : setMobile(false);
	}, [window.innerWidth]);

	return (
		<div className="container-task-bar">
			<div className="columns-task-bar">
				<Swiper
					slidesPerView={isMobile ? 1 : 4}
					spaceBetween={30}
					loop={true}
					pagination={{
						clickable: true,
					}}
					// navigation={true}
					modules={[Pagination]}
					className="mySwiper"
				>
					<SwiperSlide>
						<div className="content-icon">
							<div className="icon-task-bar">
								<img
									src="\icons\iconmonstr-delivery-1-96.png"
									alt="ImgIconeFrete"
									className="icon-taskBar"
								/>
							</div>
							<div>
								<h4>Frete Gratis</h4>
								<p> Para compras acima de R$ 200 em todo o site</p>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className="content-icon">
							<div className="icon-task-bar">
								<img
									src="\icons\icone-credit-card.png"
									alt="ImgIconeCard"
									className="icon-taskBar"
								/>
							</div>
							<div>
								<h4>10x Sem Juros</h4>
								<p> Em todo o site e em todos os cartoes</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="content-icon">
							<div className="icon-task-bar">
								<img
									src="\icons\icon-boleto.png"
									alt="ImgIconeCard"
									className="icon-taskBar"
								/>
							</div>
							<div>
								<h4>5% de desconto</h4>
								<p>A vista no boleto ou Pix direto no carrinho</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="content-icon">
							<div className="icon-task-bar">
								<img
									src="\icons\icon-lock.png"
									alt="ImgIconeCard"
									className="icon-taskBar"
								/>
							</div>
							<div>
								<h4>Site 100% seguro</h4>
								<p> Compra segura, site com tecnologia SSL</p>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};
