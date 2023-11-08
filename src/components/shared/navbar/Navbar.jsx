import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    

    const handleSignOut = () => {
        logOut().then(
          Swal.fire(
            'Logout Successful',
            'Successfully added',
            'success'
          )
        ).catch();
      };

      console.log(user?.displayName)


    const NavItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/addblog">Add Blog</Link></li>
        <li><Link to="/allblogs">All blogs</Link></li>
        <li><Link to="/featuredblogs">Featured Blogs</Link></li>
        <li><Link to="/wishlist">Wishlist</Link></li>
    </>

    return (
        <div className="navbar bg-base-100 sticky top-0 z-10">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {NavItems}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">BlogBloom</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {NavItems}
    </ul>
  </div>
  <div className="navbar-end">
    <div>
    {user && (
                <div className="flex flex-col lg:flex-row  items-center justify-center gap-2 mr-2 text-white">
                  <h3 className="text-black">User: {user.displayName}</h3>
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src={user.photoURL} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          {user ? (
            <button onClick={handleSignOut} className="btn">
              Sign Out
            </button>
          ) : (
            <div>
              <Link to="/login">
              <button className="btn">Login</button>
            </Link>
              <Link to="/register">
              <button className="btn ml-1">Register</button>
            </Link>
            </div>
          )}
    </div>
    
  </div>

    );
};

export default Navbar;