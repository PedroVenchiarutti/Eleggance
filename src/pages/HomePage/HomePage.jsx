import React from "react";
import "./HomePage.scss";

// import AboutUs from "./../AboutUs/AboutUs";
import Footer from "./../Footer/Footer";
import Taskbar from "../../components/TaskBar/TaskBar";
import Carrousel from "../../components/Carrousel/Carrousel";
import { HomeBanner } from "../../components/HomeBanner";
import {
  images,
  shelfProducts,
  trendProducts,
  smallBanner,
} from "../../api/mock";
import { Navbar } from "../../components/Navbar/index";
import { SectionInfo } from "../../components/SectionInfo";
import { useFetch } from "../../hooks/useFetch";

const HomePage = (props) => {

  const { data } = useFetch(`api/public/products/pages/1`)
  return (
    <>
      <header className="homepage">
        <Navbar />
        <HomeBanner images={images} smallBanner={smallBanner} />
      </header>
      <Taskbar />
      <Carrousel products={data} title="Ofertas" />
      <SectionInfo />
      <Carrousel products={trendProducts} title="Tendências" />
      {/* <AboutUs /> */}
      <Footer />
    </>
  );
};

export default HomePage;
