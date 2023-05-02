import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Home from "../pages/Home/Home/Home";
import Main from "../pages/Main/Main";
import Recipes from "../pages/Recipes/Recipes";





const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/chefs')
      },
      {
        path: '/recipes/:id',
        element: <Recipes></Recipes>,
        loader: ({params}) => fetch('http://localhost:5000/chefs')
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