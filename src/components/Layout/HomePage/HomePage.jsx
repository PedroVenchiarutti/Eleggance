import React, { useRef, useState } from "react";
import "./HomePage.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Promo from "../Promo/Promo";
import { Keyboard, Pagination, Navigation } from "swiper";
import AboutUs from "./../AboutUs/AboutUs";
import Footer from "./../Footer/Footer";

const HomePage = (props) => {
  return (
    <>
      <header className="homepage">
        <nav className="navbar-homepage">
          <div className="Logo-homepage">
            <a href="#" className="button-home-homepage">
              <h1 className="navbar-logo">Elegancce</h1>
            </a>
          </div>
          <ul className="list-navbar-homepage">
            <li>
              <a href="#" className="button-product-homepage">
                <p className="p-navbar-homepage">Conheça nossos Produtos</p>
              </a>
            </li>
            <li>
              <a href="#" className="button-about-homepage">
                <p className="p-navbar-homepage">Sobre nós</p>
              </a>
            </li>
            <li>
              <a href="#" className="button-contact-homepage">
                <p className="p-navbar-homepage">Contato </p>
              </a>
            </li>
            <li>
              <div className="content-user-homepage">
                <a href="" className="img-content-homepage">
                  <img src="/img/Frame.svg" alt="Registro" />
                </a>
                <a href="/login" className="p-register-homepage">
                  <p className="p-navbar-homepage">
                    Entre ou <br />
                    Cadastre-se
                  </p>
                </a>
              </div>
            </li>
          </ul>
        </nav>
        <>
          <Swiper
            modules={[Keyboard, Pagination, Navigation]}
            slidesPerView={1}
            spaceBetween={30}
            keyboard={{
              enabled: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="\img\bannerHomepage.png" alt="ImgTeeste" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="\img\bannerHomepage.png" alt="ImgTeeste" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="\img\bannerHomepage.png" alt="ImgTeeste" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="\img\Imageteste.png" alt="ImgTeeste" />
            </SwiperSlide>
          </Swiper>
        </>
        <Promo />
        <AboutUs />
      </header>
      <Footer />
    </>
  );
};

export default HomePage;
