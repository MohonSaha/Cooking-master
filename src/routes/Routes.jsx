import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Footer from "../pages/Shared/Footer/Footer";
import LoginLayout from "../layouts/LoginLayout";





  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginLayout></LoginLayout>,
      children: [
        {
            path: '/',
            element: <Footer></Footer>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },

      ]
    },
  ]);


 export default router;