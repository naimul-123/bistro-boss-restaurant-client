import React from 'react';
import { FaAd, FaHome, FaUtensilSpoon } from 'react-icons/fa';
import { FaBook, FaCalendar, FaCartShopping, FaList, FaUsers, FaUtensils } from 'react-icons/fa6';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';

const DashBoard = () => {
    const isAdmin = useAdmin()

    return (
        <div className='flex'>
            <div className='w-64 min-h-screen bg-orange-400'>
                <ul className='menu'>
                    {isAdmin ? <>
                        <li>

                            <NavLink to="/dashboard/admin"> <FaHome />Admin Home</NavLink>
                        </li>
                        <li>

                            <NavLink to="/dashboard/addItems"> <FaUtensils />Add Items</NavLink>
                        </li>

                        <li>

                            <NavLink to="/dashboard/manageItems"> <FaList />Manage Items</NavLink>
                        </li>

                        <li>
                            <NavLink to="/dashboard/bookings"> <FaBook />Manage Booking</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/users"> <FaUsers />All Users</NavLink>
                        </li>
                        <div className="divider"></div>
                    </> : <></>}
                    <li>
                        <NavLink to="/"> <FaHome />Home</NavLink>
                    </li>
                </ul>
            </div>
            <div className='flex-1 p-8'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;