import React from "react";
import "./AboutUs.scss";

const AboutUs = (props) => {
  return (
    //PRINCIPAL CONTAINER
    <div className="container-aboutUs">
      {/* CONTAINER IMAGE */}
      <div className="container-img-aboutUs">
        <h1>Sobre Nossa Empresa</h1>
        <img src="/img/aboutus.png" alt="sobre nós" id="img-aboutUs" />
      </div>
      {/* CONTAINER IMAGE */}
      {/* // */}
      {/* CONTAINER TEXT */}
      <div className="container-text-aboutUs">
        <p id="text-aboutUs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          pariatur, dolor omnis voluptatum soluta mollitia id est, voluptates
          consequuntur sed provident quo exercitationem repudiandae corrupti
          minus sit nesciunt incidunt eos.
        </p>
      </div>
      {/* CONTAINER IMAGE */}
    </div>
  );
};

export default AboutUs;
