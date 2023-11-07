import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import AddBlog from "../pages/AddBlog/AddBlog";
import AllBlogs from "../pages/AllBlogs/AllBlogs";
import FeaturedBlogs from "../pages/FeaturedBlogs/FeaturedBlogs";
import Wishlist from "../pages/Wishlist/Wishlist";
import ErrorPage from "../pages/Error/ErrorPage";
import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Details from "../pages/Details/Details";
import UpdateBlog from "../pages/UpdateBlog/UpdateBlog";


const router = createBrowserRouter([
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
          path: '/addblog',
          element: <PrivateRoute><AddBlog></AddBlog></PrivateRoute>
        },
        {
          path: '/allblogs',
          element: <AllBlogs></AllBlogs>
        },
        {
          path: '/featuredblogs',
          element: <FeaturedBlogs></FeaturedBlogs>
        },
        {
          path: '/wishlist',
          element: <PrivateRoute><Wishlist></Wishlist></PrivateRoute>
        },
        {
          path: '/register',
          element: <Registration></Registration>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/details/:id',
          element: <PrivateRoute><Details></Details></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/details/${params.id}`)
        },
        {
          path: '/updateblog',
          element: <PrivateRoute><UpdateBlog></UpdateBlog></PrivateRoute>,
        }

      ]
    },
  ]);

  export default router