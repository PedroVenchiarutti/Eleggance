import React, { useEffect, useRef } from "react";
import './ClientMenu.scss';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const ClientMenu = (props) => {

    let navigate = useNavigate();
    const selected = props.selected;
    const initialMount = useRef(false);

    // console.log(options)

    // Espera o componente montar, pega as opções e marca a opção selecionada de acordo
    //com o props recebido
    useEffect(() => {
        if(initialMount.current){
            const options = document.querySelectorAll('.option');
            function getSelectedOption(){

                switch(selected){
                    case 'perfil':
                        options[0].classList.add('selected');
                    break;
                    case 'pedidos':
                        options[1].classList.add('selected');
                    break;
                    case 'dados':
                        options[2].classList.add('selected');
                    break;
                    case 'enderecos':
                        options[3].classList.add('selected');
                    break;
                    case 'login':
                        options[4].classList.add('selected');
                    break;
                    case 'favoritos':
                        options[5].classList.add('selected');
                    break;
                    case 'avaliacoes':
                        options[6].classList.add('selected');
                    break;
                    default:
                        
                }
            }
            getSelectedOption()
            console.log(options)
        } else {
            initialMount.current = true;
        }
    },[])

    return(
        <div className="options">
            <ul>
                <li className="helloUser">
                        <h3>Olá, <span className="username">{props.username}</span></h3>
                        <Link to={'/home'}>Sair</Link>
                </li>
                <li className="option">
                    <button className="liButton" onClick={() => {navigate('/perfil')}}>
                        <img src="/icons/user.png" alt="user" height="40px" width="50px"/>
                        <h2>Meu Perfil</h2>
                    </button>
                </li>
                <li className="option">
                    <button className="liButton" onClick={() => {navigate('/perfil/pedidos')}}>
                        <img src="/icons/box.png" alt="caixa" height="40px" width="50px"/>
                        <h2>Meus Pedidos</h2>
                    </button>
                </li>
                <li className="option">
                <button className="liButton" onClick={() => {navigate('/perfil/dados')}}>
                    <img src="/icons/file.png" alt="arquivo" height="40px" width="50px"/>
                    <h2>Meus Dados</h2>
                </button>
                </li>
                <li className="option">
                    <button className="liButton" onClick={() => {navigate('/perfil/enderecos')}}>
                        <img src="/icons/gps.png" alt="gps" height="40px" width="50px"/>
                        <h2>Meus Endereços</h2>
                    </button>
                </li>
                <li className="option">
                    <button className="liButton" onClick={() => {navigate('/perfil/login')}}>
                        <img src="/icons/lock.png" alt="cadeado" height="40px" width="50px"/>
                        <h2>Meu login e senha</h2>
                    </button>
                </li>
                <li className="option">
                    <button className="liButton" onClick={() => {navigate('/perfil/favoritos')}}>
                        <img src="/icons/heart.png" alt="coração" height="40px" width="50px"/>
                        <h2>Meus Favoritos</h2>
                    </button>
                </li>
                <li className="option">
                    <button className="liButton" onClick={() => {navigate('/perfil/avaliacoes')}}>
                        <img src="/icons/star.png" alt="coração" height="40px" width="49px"/>
                        <h2>Minhas Avaliações</h2>
                    </button>
                </li>
            </ul>
        </div>

    )
}


export default ClientMenu







