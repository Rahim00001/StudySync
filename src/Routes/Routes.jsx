import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ContactUs from "../Pages/ContactUs/ContactUs";
import ErrorPage from "../Pages/Error/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import AboutUs from "../Pages/AboutUs/AboutUs";
import DashBoard from "../Layout/DashBoard";
import AllEmployee from "../Pages/Dashboard.jsx/AllEmployee/AllEmployee";
import UserDetiles from "../Pages/UserDetiles/UserDetiles";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/contact',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/about',
                element: <PrivateRoutes><AboutUs></AboutUs></PrivateRoutes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/detiles/:id',
                element: <PrivateRoutes><UserDetiles></UserDetiles></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`)
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>,
        children: [
            {
                path: 'employee',
                element: <AllEmployee></AllEmployee>
            },


        ]
    }
]);