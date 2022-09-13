import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom"

import { Navbar } from "../../components/Navbar";
import ToHome from '../../components/Profile/common/ToHome';
import ClientMenu from "../../components/Profile/common/ClientMenu";
import Footer from '../Footer/Footer';

import MyProfile from '../../components/Profile/Profile/Content';
import Orders from '../../components/Profile/Orders/Content';
import Datas from '../../components/Profile/Data/Content';
import Addresses from '../../components/Profile/Addresses/Content';
import Login from '../../components/Profile/Login/Content';
import Favorites from '../../components/Profile/Favorites/Content';
import Ratings from '../../components/Profile/Ratings/Content';

export default () => {
    const [searchQuery, setSearchQuery] = useSearchParams();
    const [tab, setTab] = useState("");

    useEffect(() => { setTab(searchQuery.get("tab")) }, [searchQuery]);

    return (
        <>
            <Navbar />
            <ToHome />
            <div className="profile-container">
                <ClientMenu selected={tab} />

                <div className="main-content">
                    {setTabToRender(tab)}
                </div>
            </div>
            <Footer />
        </>
    );
}

const setTabToRender = (tabFromQuery) => {
    switch (tabFromQuery) {
        case 'pedidos': return <Orders />;
        case 'dados': return <Datas />;
        case 'enderecos': return <Addresses />;
        case 'login': return <Login />;
        case 'favoritos': return <Favorites />;
        case 'avaliacoes': return <Ratings />;
        default: return <MyProfile />;
    }
}