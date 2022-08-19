import { Navbar } from "../../components/Navbar";
import ToHome from "../../components/Profile/common/ToHome";
import Favorites from '../../components/Profile/Favorites/Content'
import Footer from "../Footer/Footer";

export default () => (
    <div>
        <Navbar />
        <ToHome />
        <Favorites />
        <Footer />
    </div>
)