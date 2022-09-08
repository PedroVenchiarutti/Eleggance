import Products from "../../pages/Products/products";
import Shop from "../../pages/Shop/Shop";
import Schedulling from '../../pages/Schedulling/Schedulling'

import { RatingProvider } from "../../contexts/rating";

export default [
    { path: "/produtos/", element: <Shop /> },
    { path: "/produtos/:id", element: <Shop /> },
    { path: "/detalhes/:id", element: <RatingProvider><Products /></RatingProvider> },
    { path: "/contato", element: <Schedulling /> }
];