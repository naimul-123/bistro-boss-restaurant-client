import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../components/Cover';
import menuBg from '../../src/assets/menu/menu-bg.png'
import dessertBg from '../../src/assets/menu/dessert-bg.jpeg'
import soupBg from '../../src/assets/menu/soup-bg.jpg'
import saladBg from '../../src/assets/menu/salad-bg.jpg'
import pizaBg from '../../src/assets/menu/pizza-bg.jpg'
import useMenu from '../hooks/useMenu';

import MenuCategory from '../components/MenuCategory';
const Menu = () => {

    const offeredInfo = {
        bgImg: menuBg,
        headerText: "Hi there",
        desc: "This is our menue",
        title: "Today's Offer",
        subTitle: "Don't Miss"
    }
    const dessertInfo = {
        bgImg: dessertBg,
        headerText: "Hi there",
        desc: "Our dessert items",
        title: "dessert",
        subTitle: "Don't Miss"
    }
    const pizzaInfo = {
        bgImg: pizaBg,
        headerText: "Hi there",
        desc: "Our dessert items",
        title: "pizza",
        subTitle: "Don't Miss"
    }



    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === "dessert")
    const soup = menu.filter(item => item.category === "soup")
    const salad = menu.filter(item => item.category === "salad")
    const pizza = menu.filter(item => item.category === "pizza")
    const offered = menu.filter(item => item.category === "offered")
    return (
        <div>
            <Helmet>
                <title>Our Menu</title>
            </Helmet>

            <MenuCategory items={offered} info={offeredInfo}></MenuCategory>
            <MenuCategory items={dessert} info={dessertInfo}></MenuCategory>
            <MenuCategory items={pizza} info={pizzaInfo}></MenuCategory>
        </div>
    );
};

export default Menu;