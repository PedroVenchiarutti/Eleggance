import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Card from "./Card";


const Carrousel = (props) => {
  return (
    <div className="container-promo">
      <div className="swiperSlidePromo">
        <h1 className="blog-title">{props.title}</h1>
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
            <Card
              image="/img/gloss.png"
              name="Batom Liquido Matte"
              price="R$199,00"
              discount="R$89,99"
              parcele="2x R$44,99"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-container">
            <Card
              image="/img/produtos/sabonete-gourmet1.png"
              name="Sabonete Gourmet 200ml"
              price="R$25,90"
              discount="R$14,90"
              parcele="2x R$7,50"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-container">
            <Card
              image="/img/produtos/tratamento-unico1.jpg"
              name="Spray Tratamento Único Belkit"
              price="R$29,90"
              discount="R$17,99"
              parcele="2x R$9,00"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-container">
            <Card
              image="/img/produtos/penteia1.jpg"
              name="Spray Penteia Cabelo 200ml"
              price="R$32,20"
              discount="R$30,00"
              parcele="2x R$15,00"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-container">
            <Card
              image="/img/produtos/reparadordepontasoleodecocobelkit1.jpg"
              name="Reparador de Pontas Óleo de Coco Belkit 60ml"
              price="R$23,30"
              discount="R$20,00"
              parcele="2x R$10,00"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-container">
            <Card
              image="/img/produtos/oleo-multifuncional1.jpg"
              name="Batom Liquido Matte"
              price="R$28,90"
              discount="R$25,90"
              parcele="2x R$13,00"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-container">
            <Card
              image="/img/produtos/001nhqueratina1.jpg"
              name="NH New Hair +Queratina 30 Comprimidos"
              price="R$68,00"
              discount="R$60,00"
              parcele="2x R$30,00"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Carrousel;
