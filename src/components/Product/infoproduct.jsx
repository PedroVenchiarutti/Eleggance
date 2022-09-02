import React from "react";
import "./infoproduct.scss";

export default (props) => {
  console.log(props.data[0].qt);

  return (
    <div className="container-info-product">
      <ul>
        <li>
          <h3>{props.data[0].name}</h3>
        </li>
        <li>
          <h4> Informações dos Produtos </h4>
        </li>
        <li>
          {" "}
          <p>{props.data[0].description}</p>
        </li>
        <li>
          <h4>Modo de usar</h4>
        </li>
        <li>
          {/* Tem que colocar o modo de usar e as precaucoes no banco de dados junto com o produto
           */}
          <p>
            NH New Hair Blindagem no Chuveiro aplique-o por todo comprimento do
            cabelo limpos e úmidos, deixe agir por até 20 minutos. Enxague para
            retirar o excesso. Em seguida, finalize com escova e prancha. Para
            resultados incríveis, siga rigorosamente as recomendações.
          </p>
        </li>
        <li>
          <h4>Precauções</h4>
        </li>
        <li>
          <p>
            Não aplicar o produto se o couro cabeludo estiver irritado ou
            lesionado. Em contato com os olhos lavar com água em abundância. Em
            caso de hipersensibilidade ou irritação, suspenda o uso e consulte
            seu médico. Mantenha fora do alcance das crianças e animais.
            Mantenha o produto em local seco, fresco e ao abrigo de luz. Não
            armazenar em temperatura superior a 40º C.
          </p>
        </li>
        <li>
          <h4>Dicas</h4>
        </li>
        <li>
          <p>
            NH New Hair Blindagem no Chuveiro - Através do teste de mecha é
            possível verificar a ação ideal de produto nos vários tipos de
            cabelo e se os fios estão nas condições ideais para a transformação.
          </p>
        </li>
      </ul>
    </div>
  );
};
