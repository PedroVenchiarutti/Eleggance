import React from "react";
import Footer from "../../pages/Footer/Footer";
import "./team.scss";

export default (props) => {
  return (
    <div className="container-team">
      <div className="container-button">
        <div className="container-agendamento-button">
          <a href="/solicitation" className="agendamento-button">
            <p>Solicite um agendamento</p>
          </a>
        </div>
        <h4 id="h4-titulo">Nossa equipe</h4>
      </div>
      <div className="cast-team">
        <div className="professionals">
          <div className="list-employee">
            <div className="photo-employee">
              <img src="img/model1.jpg" alt="" />
            </div>
            <div className="p-list">
            <h4>
            Jessica
           </h4>
           <p>
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus minima vitae quod voluptas cupiditate sit iusto modi dolorum. Corrupti nulla reprehenderit commodi? Dolore laudantium ullam itaque maiores hic assumenda natus?
           </p>
            </div>
          </div>
        </div>
        <div className="professionals">
          <div className="list-employee">
            <div className="photo-employee">
              <img src="img/model2.jpg" alt="" />
            </div>
            <div className="p-list">
           <h4>
            Jessica
           </h4>
           <p>
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus minima vitae quod voluptas cupiditate sit iusto modi dolorum. Corrupti nulla reprehenderit commodi? Dolore laudantium ullam itaque maiores hic assumenda natus?
           </p>
            </div>
          </div>
        </div>
        <div className="professionals">
          <div className="list-employee">
            <div className="photo-employee">
              <img src="img/model1.jpg" alt="" />
            </div>
            <div className="p-list">
            <h4>
            Jessica
           </h4>
           <p>
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus minima vitae quod voluptas cupiditate sit iusto modi dolorum. Corrupti nulla reprehenderit commodi? Dolore laudantium ullam itaque maiores hic assumenda natus?
           </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
