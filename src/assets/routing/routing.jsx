import { createBrowserRouter } from "react-router-dom";
import NavBar from "../components/navBar";

const Route= createBrowserRouter([
    {
        path:'/',
        element:<HomePage/>
    },
    {
        path:'/NavBar',
        element:<NavBar/>
    },
])