import React from "react";
import "../Profile.scss";
import ClientMenu from "../common/ClientMenu";
import Data from "../../Data/Data";
import ContentHeader from "../common/ContentHeader";
import "./Content.scss";
import SaleTag from "../common/SaleTag";

export default (props) => {
  return (
    <div className="profile-container">
      <ClientMenu selected="avaliacoes" />
      <div className="main-content">
        <Data header={<ContentHeader title="Minhas Avaliações" />}>
          <ul className="itemList">
            <li className="item">
              <img src="" alt="produto" />
              <div className="itemSpace">
                <div className="itemName ">
                  <p>Battom cor rose cremoso</p>
                  <SaleTag />
                </div>
                <div className="rating">
                  <div class="rate">
                    <input type="radio" id="star5" name="rate" value="5" />
                    <label for="star5" title="text">
                      5 stars
                    </label>
                    <input type="radio" id="star4" name="rate" value="4" />
                    <label for="star4" title="text">
                      4 stars
                    </label>
                    <input type="radio" id="star3" name="rate" value="3" />
                    <label for="star3" title="text">
                      3 stars
                    </label>
                    <input type="radio" id="star2" name="rate" value="2" />
                    <label for="star2" title="text">
                      2 stars
                    </label>
                    <input type="radio" id="star1" name="rate" value="1" />
                    <label for="star1" title="text">
                      1 star
                    </label>
                  </div>

                  <button className="trashButton">
                    <img
                      src="/icons/trashIcon.svg"
                      alt="Excluir"
                      className="trashIcon"
                    />
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </Data>
      </div>
    </div>
  );
};
