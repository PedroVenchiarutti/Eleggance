import React, { useState } from "react";
import { Navbar } from '../../components/Navbar/index'
import Footer from "../Footer/Footer";
import ProductsList from '../../components/ProductsLIst/index';
import { shelfProducts } from "../../api/mock";
import Carrousel from "../../components/Carrousel/Carrousel";
import "./Cart.scss"

export default function Cart(props) {
    const [shipping, setShipping] = useState(9.99)
    const subTotal = 1000
    const total = subTotal + shipping
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
                            <td>R${subTotal}</td>
                        </tbody>
                    </tfoot>
                </tbody>
                <section>
                </section>
                <Carrousel products={shelfProducts} title="Baseado Nas Suas Ultimas Visitas" />

            </main>

            <Footer />
        </div>
    )
}