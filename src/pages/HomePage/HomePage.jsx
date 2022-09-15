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
  /*   const page1 = useFetch(`api/public/products/pages/1`); */
  const page1 = useFetch(`api/public/products`);

  const { data } = page1;

  const newMap = data.map((product) => product);

  const shelf = newMap;

  const newData1 = data.filter((item) => item.offer === true);

  const newData2 = data.slice(10, 20);

  return (
    <>
      <header className="homepage">
        <Navbar />
        <HomeBanner images={images} smallBanner={smallBanner} />
      </header>
      <Taskbar />
      <Carrousel products={newData1} title="Ofertas" />
      <SectionInfo />
      <Carrousel products={newData2} title="Tendências" />
      {/* <AboutUs /> */}
      <Footer />
    </>
  );
};

export default HomePage;
