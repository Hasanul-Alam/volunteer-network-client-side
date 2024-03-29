import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../Home/Home";
import Donations from "../Donations/Donations";
import Events from "../Events/Events";
import Blog from "../Blog/Blog";
import Register from "../Register/Register";
import Admin from "../Admin/Admin";
import Login from "../Login/Login";
import RegisterVolunteer from "../RegisterVolunteer/RegisterVolunteer";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../NotFound/NotFound";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/donations',
                element: <Donations></Donations>
            },
            {
                path: '/events',
                element: <PrivateRoute><Events></Events></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/admin',
                element: <Admin></Admin>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register-volunteer/:id',
                element: <PrivateRoute><RegisterVolunteer></RegisterVolunteer></PrivateRoute>
            },
            {
                path: '*',
                element: <NotFound/>
            }
        ]
    }
])

export default router;