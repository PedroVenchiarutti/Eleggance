import React, { useState } from "react";
import { Navbar } from '../../components/Navbar/index'
import Footer from "../Footer/Footer";
import ProductsList from '../../components/ProductsLIst/index';
import { shelfProducts } from "../../api/mock";
import Carrousel from "../../components/Carrousel/Carrousel";
import { Link } from "react-router-dom";
import "./Cart.scss"

export default function Cart(props) {

    const subTotal = 1000
    return (
        <div className="cartContainer">
            <Navbar />
            <main>
                <table>
                    <thead>
                        <th className="col-1">Produtos</th>
                        <th className="col-2">Quantidade</th>
                        <th className="col-3">Valor Unitário</th>
                        <th className="col-4">Valor Total</th>
                    </thead>
                </table>
                <tbody>
                    <ProductsList products={shelfProducts} />

                    <tfoot>
                        <thead>
                            <td>SubTotal</td>
                        </thead>
                        <tbody>
                            {/* ainda falta tornar o valor dinamico */}
                            <td>R${subTotal}</td>
                        </tbody>
                    </tfoot>
                </tbody>
                <div className="actions">
                    <Link to='/home' className='finishBuyButton'> Continuar Comprando</Link>
                    <Link to="/home" className="homeButton">
                        Finalizar Compra
                    </Link>
                </div>
                <Carrousel products={shelfProducts} title="Baseado Nas Suas Ultimas Visitas" />

            </main>

            <Footer />
        </div>
    )
}