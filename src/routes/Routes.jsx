import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Home from "../pages/Home/Home/Home";
import Main from "../pages/Main/Main";
import Recipes from "../pages/Recipes/Recipes";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Blog from "../pages/Blog/Blog";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Login/Profile/Profile";





const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://cooking-master-server-ten.vercel.app/chefs')
      },
      {
        path: '/recipes/:id',
        element: <PrivateRoute><Recipes></Recipes></PrivateRoute>,
        loader: ({params}) => fetch('https://cooking-master-server-ten.vercel.app/chefs')
      },
      {
          path: '/login',
          element: <Login></Login>
      },
      {
          path: '/register',
          element: <Register></Register>
      },
      {
        path: '/profile',
        element: <Profile></Profile>
      },
      {
        path: '/blog',
        element: <PrivateRoute><Blog></Blog></PrivateRoute>
      }

    ]
  },
  // {
  //   path: '/',
  //   element: <MainLayout></MainLayout>,
  //   children: [
  //     {
  //       path: '/',
  //       element: <Chefs></Chefs>,
  //       loader: () => fetch('http://localhost:5000/chefs')
  //     },
  //     {
  //       path: '/login',
  //       element: <Login></Login>
  //     },

  //   ]
  // },


  // {
  //   path: 'recepes',
  //   element: <RecipesLayout></RecipesLayout>,
  //   children: [
  //     {
  //       path: ':id',
  //       element: <Recipes></Recipes>,
  //       loader: ({ params }) => fetch('')
  //     }
  //   ]
  // }
]);


export default router;