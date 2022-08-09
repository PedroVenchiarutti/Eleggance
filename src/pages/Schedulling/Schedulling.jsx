import React from "react";
import "./Schedulling.scss";
import { Navbar } from "../../components/Navbar";
import Footer from "../Footer/Footer";
import { HomeBanner } from "../../components/HomeBanner";
import { images, shelfProducts, trendProducts } from "../../api/mock";
import Team from "../../components/Team/Team";
import { AboutUs } from "../../components/AboutUs";
import { Services } from "../Services";

export default (props) => {
  return (
    <div className="schedulling">
      <header className="homepage">
        <Navbar />
        <HomeBanner images={images} />
      </header>
      <AboutUs />
      <Services />
      <Team />
      <Footer />
    </div>
  );
};
