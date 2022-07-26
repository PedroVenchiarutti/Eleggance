import React from "react";
import "./Footer.scss";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container__left">
          <div className="footer__container__left__logo">
            <a href="#">
              <h1 className="footer_logo">Eleggance</h1>
            </a>
            <div className="footer_content_img">
              <img src="/img/teste.png" />
            </div>
            <div className="footer_img">
              <div className="icons">
                <a href="#">
                  <img src="/icons/instagram.svg" />
                </a>
                <a href="#">
                  <img src="/icons/facebook.svg" />
                </a>
                <a href="#">
                  <img src="/icons/whatsApp.svg" alt="" />
                </a>
              </div>
              <p>Nos sigas nas redes sociais</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
