import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Order from "../pages/Order";
import Login from "../pages/Login";
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
                element: <Menu />
            },
            {
                path: '/order/:category',
                element: <Order />
            },
            {
                path: '/login',
                element: <Login />
            },
        ]
    }
])

export default routes;