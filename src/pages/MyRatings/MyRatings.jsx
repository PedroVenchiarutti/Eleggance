import React from "react";
import './MyRatings.scss'
import { Navbar } from '../../components/Navbar'
import ToHome from "../../components/ToHome/ToHome";
import ClientMenu from "../../components/ClientMenu/ClientMenu";
import Data from "../../components/Data/Data";
import Footer from "../Footer/Footer"
import ContentHeader from "../../components/Profile/common/ContentHeader"

const Ratings = (props) => {

    return(
        <div className="myRatings">
            <Navbar />
            <ToHome />
            <div className="container">
                <ClientMenu selected="avaliacoes"/>
                <div className="content">
                    <Data header={<ContentHeader title="Minhas Avaliações"/>}>
                        <ul className="itemList">
                            <li className="item">
                                <img src="" alt="produto" />
                                <div className="itemSpace">
                                    <div className="itemName ">
                                        <p>Battom cor rose cremoso</p>
                                        <h5>OFERTA</h5>
                                    </div>
                                    <div className="rating">

                                    <div class="rate">
                                        <input type="radio" id="star5" name="rate" value="5" />
                                        <label for="star5" title="text">5 stars</label>
                                        <input type="radio" id="star4" name="rate" value="4" />
                                        <label for="star4" title="text">4 stars</label>
                                        <input type="radio" id="star3" name="rate" value="3" />
                                        <label for="star3" title="text">3 stars</label>
                                        <input type="radio" id="star2" name="rate" value="2" />
                                        <label for="star2" title="text">2 stars</label>
                                        <input type="radio" id="star1" name="rate" value="1" />
                                        <label for="star1" title="text">1 star</label>
                                    </div>

                                        <img src="/icons/trashIcon.svg" alt="" className="trashIcon"/>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </Data>
                </div>
            </div>
            <Footer />
        </div>
    )

}

export default Ratings