import React from "react";
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
              <ul>
                <li>
                  <h3>Jessica dos Santos Alves</h3>
                </li>
                <li>
                  <h4> Especialista em cabelos ruivos </h4>
                </li>
                <li>
                  <p>
                    Formada em estetica pela Unip, atuo como cabeleleira a mais
                    de 20 anos, sou especialista em cabelos ruivos a pelo menos
                    14 anos.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="professionals">
          <div className="list-employee">
            <div className="photo-employee">
              <img src="img/model2.jpg" alt="" />
            </div>
            <div className="p-list">
              <ul>
                <li>
                  <h3>Jessica dos Santos Alves</h3>
                </li>
                <li>
                  <h4> Especialista em cabelos ruivos </h4>
                </li>
                <li>
                  <p>
                    Formada em estetica pela Unip, atuo como cabeleleira a mais
                    de 20 anos, sou especialista em cabelos ruivos a pelo menos
                    14 anos.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="professionals">
          <div className="list-employee">
            <div className="photo-employee">
              <img src="img/model1.jpg" alt="" />
            </div>
            <div className="p-list">
              <ul>
                <li>
                  <h3>Jessica dos Santos Alves</h3>
                </li>
                <li>
                  <h4> Especialista em cabelos ruivos </h4>
                </li>
                <li>
                  <p>
                    Formada em estetica pela Unip, atuo como cabeleleira a mais
                    de 20 anos, sou especialista em cabelos ruivos a pelo menos
                    14 anos.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
