import React from "react";
import './ToHome.scss'
import { Link } from "react-router-dom";

const ToHome = (props) => {

    return(
        <div className="toHome">
            <div className="pageTitle">
                <Link to="/home" >
                    <img src="/icons/iconmonstr-home.svg" alt="casa" />
                </Link>
                <h4>Meu Perfil</h4>
            </div>
        </div>
    )

}

export default ToHome;

