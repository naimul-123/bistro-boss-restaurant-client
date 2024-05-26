import React from 'react';
import { FaAd, FaHome, FaList } from 'react-icons/fa';
import { FaCalendar, FaCartShopping } from 'react-icons/fa6';
import { NavLink, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div className='flex'>
            <div className='w-64 min-h-screen bg-orange-400'>
                <ul className='menu'>
                    <li>
                        <NavLink to="/dashboard/userHome"> <FaHome />User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart"> <FaCartShopping />My cart</NavLink>
                    </li>

                    <li>
                        <NavLink to="/dashboard/reserve"> <FaCalendar />Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review"> <FaAd />Review</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/booking"> <FaList />Booking</NavLink>
                    </li>
                    <div className="divider"></div>
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