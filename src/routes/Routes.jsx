import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import AddBlog from "../pages/AddBlog/AddBlog";
import AllBlogs from "../pages/AllBlogs/AllBlogs";
import FeaturedBlogs from "../pages/FeaturedBlogs/FeaturedBlogs";
import Wishlist from "../pages/Wishlist/Wishlist";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/addblog',
          element: <AddBlog></AddBlog>
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
          element: <Wishlist></Wishlist>
        }

      ]
    },
  ]);

  export default router