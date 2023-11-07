import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import WishlistCard from "./WishlistCard";


const Wishlist = () => {

    const {user} = useContext(AuthContext);
    const [wishlistBlogs, setWishlistBlogs] = useState([]);

    const url = `http://localhost:5000/wishlist?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setWishlistBlogs(data))
    }, [])

    return (
        <div>
            Wishlist: {wishlistBlogs.length}
            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        wishlistBlogs.map(wishlistBlog => <WishlistCard key={wishlistBlog._id} wishlistBlog={wishlistBlog}></WishlistCard>)
      }
    </tbody>
    
    
    
  </table>
</div>
            </div>
        </div>
    );
};

export default Wishlist;