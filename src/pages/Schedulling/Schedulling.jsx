import React from "react";
import "./Schedulling.scss";
import { Navbar } from "../../components/Navbar";
import Footer from "../Footer/Footer";
import { HomeBanner } from "../../components/HomeBanner";
import { images, shelfProducts, trendProducts } from "../../api/mock";
import Team from "../../components/Team/Team";
import { AboutUs } from "../../components/AboutUs";
<<<<<<< HEAD:src/pages/Schedulling/schedulling.jsx
import { Services } from "../../pages/Services";
import MyProfile from "../MyProfile/MyProfile";
=======
import { Services } from "../Services";
>>>>>>> 9615ba468789ac3813a424f2ca848287df4c6950:src/pages/Schedulling/Schedulling.jsx

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
  <MyProfile  name="blsbl"/> 
};
