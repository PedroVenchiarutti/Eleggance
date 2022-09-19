import React from "react";
import Footer from "../../pages/Footer/Footer";
import "./Team.scss";

export default (props) => {
  const notificationSubmit = (e) => {
    e.preventDefault();
    let person = prompt(
      "Digite Seu WhatsApp e entraremos em contato",
      "Ex: 13981706262"
    );
    if (person == null || person == "") {
      alert("Cancelado");
    } else {
      alert("Entraremos em contato em breve");
    }

  };

  return (
    <div className="container-team">
      <h4 id="h4-titulo">Nossa equipe</h4>
      {/* ============================================= */}
      {/* =====TEAM===== */}
      <div className="cast-team">
        {/* ============================================= */}
        {/* =====TEAM 1 ANA===== */}
        <div className="team-first">
          <div className="photo-employee">
            <img src="img/TEAM1.jpg" alt="" />
          </div>
          <div className="details-team">
            <h4>Ana</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellendus minima vitae quod voluptas cupiditate sit iusto modi
              dolorum. Corrupti nulla reprehenderit commodi? Dolore laudantium
              ullam itaque maiores hic assumenda natus?
            </p>
          </div>
        </div>
        {/* =====TEAM 1===== */}
        {/* ============================================= */}
        {/* =====TEAM 2 JOANA===== */}
        <div className="team-second">
          <div className="photo-employee">
            <img src="img/TEAM2.jpg" alt="" />
          </div>
          <div className="details-team">
            <h4>Joana</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellendus minima vitae quod voluptas cupiditate sit iusto modi
              dolorum. Corrupti nulla reprehenderit commodi? Dolore laudantium
              ullam itaque maiores hic assumenda natus?
            </p>
          </div>
        </div>
        {/* =====TEAM 2===== */}
        {/* ============================================= */}
        {/* =====TEAM 3 CAROL===== */}
        <div className="team-third">
          <div className="photo-employee">
            <img src="img/TEAM3.jpg" alt="" />
          </div>
          <div className="details-team">
            <h4>Carol</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellendus minima vitae quod voluptas cupiditate sit iusto modi
              dolorum. Corrupti nulla reprehenderit commodi? Dolore laudantium
              ullam itaque maiores hic assumenda natus?
            </p>
          </div>
        </div>
        {/* =====TEAM 3===== */}
      </div>
      {/* =====TEAM===== */}
      {/* ============================================= */}
      {/* =====CONTAINER BUTTON===== */}
      <div className="container-button-team">
        <div className="container-agendamento-button">
          <button onClick={notificationSubmit}>
            <a href="" className="agendamento-button">
              Solicite um agendamento
            </a>
          </button>
        </div>
      </div>
      {/* =====CONTAINER BUTTON===== */}
    </div>
  );
};
