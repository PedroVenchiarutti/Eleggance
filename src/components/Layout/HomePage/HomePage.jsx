import React, { useRef, useState } from "react";
import "./HomePage.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation } from "swiper";
import AboutUs from "./../AboutUs/AboutUs";
import Footer from "./../Footer/Footer";
import Taskbar from "../TaskBar/TaskBar";
import Carrousel from "../utils/Carrousel/Carrousel";

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
          <Taskbar />
          <Carrousel
            title="Oferta"
            imageCard1="/img/gloss.png"
            imageCard2="/img/gloss.png"
            imageCard3="/img/gloss.png"
            imageCard4="/img/gloss.png"
            imageCard5="/img/gloss.png"
            imageCard6="/img/gloss.png"
            imageCard7="/img/gloss.png"
            imageCard8="/img/produtos/sabonete-gourmet-1.png"
          />
        </>
      </header>
      <br />
      <br />
      <br />
      <Carrousel
        title="Promocao"
        imageCard1="/img/gloss.png"
        imageCard2="/img/gloss.png"
        imageCard3="/img/gloss.png"
        imageCard4="/img/gloss.png"
        imageCard5="/img/gloss.png"
        imageCard6="/img/gloss.png"
        imageCard7="/img/gloss.png"
        imageCard8="/img/produtos/sabonete-gourmet-1.png"
      />
      <AboutUs />
      <Footer />
    </>
  );
};

export default HomePage;
