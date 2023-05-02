import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Footer from "../pages/Shared/Footer/Footer";
import LoginLayout from "../layouts/LoginLayout";
import Banner from "../pages/Home/Banner/Banner";





  const router = createBrowserRouter([
    // {
    //   path: "/",
    //   element: <LoginLayout></LoginLayout>,
    //   children: [
    //     {
    //         path: '/login',
    //         element: <Login></Login>
    //     },
    //     {
    //         path: '/register',
    //         element: <Register></Register>
    //     },

    //   ]
    // },
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            
        ]
    }
  ]);


 export default router;