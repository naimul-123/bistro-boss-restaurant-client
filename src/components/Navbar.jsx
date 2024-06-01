import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [isAdmin] = useAdmin();
    const [cart] = useCart();
    console.log(isAdmin);
    const navItems = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/menu">Our Menu</NavLink></li>
        <li><NavLink to="/order/salad">Order Food</NavLink></li>
        {user && isAdmin && <li><NavLink to="/dashboard/adminHome">Dashboard</NavLink></li>}
        {user && !isAdmin && <li> <NavLink to="/dashboard/userHome">Dashboard</NavLink></li>}

        {
            user ? <li><Link onClick={logOut}>Log Out</Link></li> : <><li><NavLink to="/login">Log in</NavLink></li>
                <li><NavLink to="/signup">Sign Up</NavLink></li></>
        }
        <li><NavLink to="/dashboard/cart">

            <div className="indicator">
                <span className="indicator-item badge rounded-full badge-secondary">{cart.length}+</span>
                <button className='btn btn-circle btn-ghost'> <FaShoppingCart /></button>

            </div></NavLink></li>

    </>
    return (
        <div className="navbar fixed z-10 max-w-screen-2xl  bg-gray-900 bg-opacity-30 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>

            </div>
            <div className="navbar-end">

                <div className='group'>
                    <div className=" avatar group-hover:hidden">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                        </div>
                    </div>
                    <div className='hidden group-hover:block'>
                        <p>{user?.displayName}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;