import React from "react";
import "./schedulling.scss";
import { Navbar } from "../../components/Navbar";
import Footer from "../Footer/Footer";
import { HomeBanner } from "../../components/HomeBanner";
import { images, shelfProducts, trendProducts } from "../../api/mock";
import Team from "../../components/Team/team";

export default (props) => {
  return (
    <div>
      <header className="homepage">
        <Navbar />
      </header>
      <HomeBanner images={images} />
      <Team />
      <Footer />
    </div>
  );
}
