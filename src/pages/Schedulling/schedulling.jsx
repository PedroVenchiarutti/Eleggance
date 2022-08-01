import React from "react";
import "./schedulling.scss";
import { Navbar } from "../../components/Navbar";
import Footer from "../Footer/Footer";
import { HomeBanner } from "../../components/HomeBanner";
import { images, shelfProducts, trendProducts } from "../../api/mock";
import Team from "../../components/Team/team";
import { AboutUs } from "../../components/AboutUs";

export default (props) => {
  return (
    <div>
      <header className="homepage">
        <Navbar />
      </header>
      <HomeBanner images={images} />
      <AboutUs/>
      <Team />
      <Footer />
      
    </div>
  );
}
