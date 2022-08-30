import { Link } from "react-router-dom";

export default () =>
    <>
        <div>
            <li>R JONAS VIDAL DOS SANTOS, 170</li>
            <li>14</li>
            <li>QUIETUDE</li>
            <li>11718-350 || PRAIA GRANDE - SP</li>
        </div>
        <div className="icon-edit">
            <button className="edit-finish">
                <Link to="/perfil/enderecos">
                    <img src="./icons/icon-edit.svg" />
                </Link>
            </button>
        </div>
    </>