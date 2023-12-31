import { Outlet, useLocation } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";


const Main = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('/login')
    const noHeaderFoote = location.pathname.includes('signup')
    console.log(noHeaderFooter)
    return (
        <div>
            {noHeaderFooter || noHeaderFoote || <Header></Header>}
            <Outlet></Outlet>
            {noHeaderFooter || noHeaderFoote || <Footer></Footer>}
        </div>
    );
};

export default Main;