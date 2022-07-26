import React from "react";
import "./HomePage.scss";
/* 
import AboutUs from "./../AboutUs/AboutUs"; */
import Footer from "./../Footer/Footer";
import Taskbar from "../../components/TaskBar/TaskBar";
import Carrousel from "../../components/Carrousel/Carrousel";
import { HomeBanner } from "../../components/HomeBanner";
import { images, shelfProducts, trendProducts } from "../../api/mock";
import { Navbar } from "../../components/Navbar";
import { SectionInfo } from "../../components/SectionInfo";

const HomePage = (props) => {
  return (
    <>
      <header className="homepage">
        <Navbar />
      </header>
      <HomeBanner images={images} />
      <Taskbar />
      <Carrousel products={shelfProducts} title="Ofertas" />
      <SectionInfo />
      <Carrousel products={trendProducts} title="Tendências" />
      {/*    <AboutUs /> */}
      <Footer />
    </>
  );
};

export default HomePage;
