import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "./Promo.scss";
import { Pagination } from "swiper";

export default function Promo() {
  return (
    <div className="container-promo">
      <div className="swiperSlidePromo">
        <h1>Ofertas</h1>
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
          <SwiperSlide className="swiper-container">
            <div className="container-img-promo">
              <img src="/img/gloss.png" alt="tete" />
              <span className="title-product-promo">Batom Líquido Matte</span>
              <br />
              <span className="full-price-promo">R$199,00</span>
              <span>R$89,99</span>
              <p>2x R$44,99</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-container">
            <div className="container-img-promo">
              <img src="/img/gloss.png" alt="teste" />
              <span className="title-product-promo">Batom Líquido Matte</span>
              <br />
              <span className="full-price-promo">R$199,00</span>
              <span>R$89,99</span>
              <p>2x R$44,99</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-container">
            <div className="container-img-promo">
              <img src="/img/gloss.png" alt="teste" />
              <span className="title-product-promo">Batom Líquido Matte</span>
              <br />
              <span className="full-price-promo">R$199,00</span>
              <span>R$89,99</span>
              <p>2x R$44,99</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-container">
            <div className="container-img-promo">
              <img src="/img/gloss.png" alt="teste" />
              <span className="title-product-promo">Batom Líquido Matte</span>
              <br />
              <span className="full-price-promo">R$199,00</span>
              <span>R$89,99</span>
              <p>2x R$44,99</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-container">
            <div className="container-img-promo">
              <img src="/img/gloss.png" alt="teste" />
              <span className="title-product-promo">Batom Líquido Matte</span>
              <br />
              <span className="full-price-promo">R$199,00</span>
              <span>R$89,99</span>
              <p>2x R$44,99</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-container">
            <div className="container-img-promo">
              <img src="/img/gloss.png" alt="teste" />
              <span className="title-product-promo">Batom Líquido Matte</span>
              <br />
              <span className="full-price-promo">R$199,00</span>
              <span>R$89,99</span>
              <p>2x R$44,99</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-container">
            <div className="container-img-promo">
              <img src="/img/gloss.png" alt="teste" />
              <span className="title-product-promo">Batom Líquido Matte</span>
              <br />
              <span className="full-price-promo">R$199,00</span>
              <span>R$89,99</span>
              <p>2x R$44,99</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-container">
            <div className="container-img-promo">
              <img src="/img/gloss.png" alt="teste" />
              <span className="title-product-promo">Batom Líquido Matte</span>
              <br />
              <span className="full-price-promo">R$199,00</span>
              <span>R$89,99</span>
              <p>2x R$44,99</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
