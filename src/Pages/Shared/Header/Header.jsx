import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import { toast } from "react-hot-toast";
import { FaShoppingCart } from 'react-icons/fa';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Log out successfully')
            })
            .catch(err => console.err(err))
    }


    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/order/salad">Order Food</Link></li>
        <li><Link to="/secrect">Secrect</Link></li>
        <li><Link to="/">
            <button className="btn btn-sm flex items-center mr-2">
                <FaShoppingCart />
                <div className="badge badge-secondary">+99</div>
            </button>
        </Link></li>

        {
            user?.uid ?
                <>
                    <li><Link><button onClick={handleLogOut}>Log Out</button> </Link></li>

                </>
                :
                <>
                    <li><Link to="/login"> Login</Link></li>
                    <li><Link to="/signup"> Sign Up</Link></li>
                </>
        }





    </>

    return (
        <div>
            <div className="navbar fixed z-40 bg-opacity-30 bg-black text-white w-[1160px]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black bg-opacity-50 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-3xl">BistroBoss</a>
                </div>
                <div className="navbar-end font-bold hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                        {menuItems}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Header;