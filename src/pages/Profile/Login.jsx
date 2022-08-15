import React from "react"
import { Navbar } from "../../components/Navbar"
import Footer from '../Footer/Footer'
import ToHome from '../../components/Profile/common/ToHome'
import Login from '../../components/Profile/Login/Content'


export default () => {

return(
    <div>
        <Navbar />
        <ToHome />
        <Login />
        <Footer />
    </div>
)

}