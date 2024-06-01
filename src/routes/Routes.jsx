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
import AllUsers from "../pages/dashboardPage/AllUsers";
import AddItems from "../pages/dashboardPage/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/dashboardPage/ManageItems";
import UpdateItem from "../pages/dashboardPage/UpdateItem";
import Payment from "../pages/dashboardPage/Payment";
import PaymentHistory from "../pages/dashboardPage/PaymentHistory";
import AdminHome from "../pages/dashboardPage/AdminHome";
import UserHome from "../pages/dashboardPage/UserHome";
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
                path: "adminHome",
                element: <AdminRoute><AdminHome /></AdminRoute>
            },
            {
                path: "userHome",
                element: <UserHome />
            },
            {
                path: "cart",
                element: <Cart />
            },
            {
                path: "payment",
                element: <Payment />
            },
            {
                path: "paymentHistory",
                element: <PaymentHistory />
            },
            {
                path: "addItems",
                element: <AdminRoute> <AddItems /></AdminRoute>
            },
            {
                path: "updateItem/:id",
                element: <UpdateItem />,
                loader: ({ params }) => fetch(`https://bistro-boss-restaurant-server-rho.vercel.app/menu/${params.id}`)
            },
            {
                path: "manageItems",
                element: <AdminRoute> <ManageItems /></AdminRoute>
            },
            {
                path: "users",
                element: <AdminRoute>  <AllUsers /></AdminRoute>
            },
        ]

    }
])

export default routes;