import { createBrowserRouter } from "react-router-dom";
import App from '../layouts/App'
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Order from "../pages/Order";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../layouts/DashBoard";
import Cart from "../pages/dashboardPage/Cart";
const routes = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/menu',
                element: <PrivateRoute><Menu /></PrivateRoute>
            },
            {
                path: '/order/:category',
                element: <Order />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><DashBoard /></PrivateRoute>,
        children: [
            {
                path: "cart",
                element: <Cart />
            }
        ]

    }
])

export default routes;