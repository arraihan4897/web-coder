import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Courses from "../../Pages/Courses/Courses";
import FAQ from "../../Pages/FAQ/FAQ";
import Errorpage from "../../Pages/Log In/Errorpage";
import Login from "../../Pages/Log In/Login";
import Register from '../../Pages/Register/Register'
import PrivateRout from "./PrivateRout";

export const routes = createBrowserRouter
([
   {
        path : '/',
        element:<Main></Main>,
        children:[
            {
                path: '/',
                element:<Courses></Courses>
            },
           {
            path:'/Courses',
            element: <Courses></Courses>
           },
           {
            path:'/FAQ',
            element: <FAQ></FAQ>
           },
           {
            path:'/Blog',
            element: <Blog></Blog>
           },
           {
            path:'/Register',
            element:<Register></Register>
           },
           {
            path:'/Login',
            element:<Login></Login>
           },
         
           {
            path:'/*',
            element:<Errorpage></Errorpage>
           },
         
           

        ]
    }
]);

 

