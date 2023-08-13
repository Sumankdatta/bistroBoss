import { NavLink, Outlet } from "react-router-dom";
import { FaBars, FaBook, FaBookOpen, FaCalendar, FaEnvelope, FaHome, FaShoppingBag, FaShoppingCart, FaSuitcaseRolling, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import useCarts from "../hooks/useCarts";
import useAdmin from "../hooks/useAdmin";


const DashboardLayout = () => {
    const [carts] = useCarts();

    // const isAdmin = true

    const [isAdmin] = useAdmin()
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">

                    <label htmlFor="my-drawer-2" className="btn  drawer-button lg:hidden">My Dashboard</label>
                    <Outlet></Outlet>
                </div>
                <div id="drawer" className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                    <ul className="drawer menu p-4 uppercase h-full bg-[#D1A054]">
                        <div className="ms-5 mb-10">
                            <h3 className="text-3xl ">BISTRO BOSS</h3>
                            <h4 className="text-xl">R E S T A U R A N T</h4>
                        </div>
                        {
                            isAdmin ?
                                <>
                                    <li><NavLink to="/dashboard"><FaHome /> Admin Home</NavLink></li>
                                    <li><NavLink><FaUtensils /> Add item</NavLink></li>
                                    <li><NavLink><FaBars />Manage Items</NavLink></li>
                                    <li><NavLink><FaBook /> manage Booking</NavLink></li>
                                    <li><NavLink to="/dashboard/alluser"><FaUsers />All users</NavLink></li>
                                </>
                                :
                                <>
                                    <li><NavLink to="/dashboard"><FaHome /> user home</NavLink></li>
                                    <li><NavLink><FaSuitcaseRolling /> reservation</NavLink></li>
                                    <li><NavLink><FaWallet />my payment</NavLink></li>
                                    <li><NavLink to="/dashboard/mycart"><FaShoppingCart /> My Cart
                                        <button className="btn btn-sm flex items-center mr-2">
                                            <FaShoppingCart />
                                            <div className="badge badge-secondary">+{carts?.length || 0}</div>
                                        </button>
                                    </NavLink></li>
                                    <li><NavLink><FaBookOpen /> Add Review</NavLink></li>
                                    <li><NavLink><FaCalendar />my booking</NavLink></li>
                                </>

                        }


                        <div className="divider"></div>
                        <li><NavLink to="/"><FaHome />home</NavLink></li>
                        <li><NavLink to="/menu"><FaBars /> menu</NavLink></li>
                        <li><NavLink to="/order/salad"><FaShoppingBag /> shop</NavLink></li>
                        <li><NavLink to="/"><FaEnvelope /> contact</NavLink></li>


                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;