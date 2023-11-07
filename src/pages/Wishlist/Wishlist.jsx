import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import WishlistCard from "./WishlistCard";
import WishSkeleton from "./WishSkeleton";


const Wishlist = () => {

    const {user, loading} = useContext(AuthContext);
    const [wishlistBlogs, setWishlistBlogs] = useState([]);

    const url = `http://localhost:5000/wishlist?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setWishlistBlogs(data))
    }, [url])

    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to delete?');
        if(proceed) {
            fetch(`http://localhost:5000/wishlist/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount>0){
                    alert('deleted successfully');
                    const remaining = wishlistBlogs.filter(wishlistBlogs => wishlistBlogs._id !== id)
                    setWishlistBlogs(remaining);
                }
            })
        }
    }

    return (
        <div>
            
            <div className="my-10 min-h-screen">
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
        <th>Image</th>
        <th>Title</th>
        <th>Short Description</th>
        <th>Details</th>
      </tr>
    </thead>
    {
      loading ? <tbody>
      {/* row 1 */}
      {
        wishlistBlogs.map(wishlistBlog => <WishSkeleton key={wishlistBlog._id}></WishSkeleton>)
      }
    </tbody>
:
    <tbody>
      {/* row 1 */}
      {
        wishlistBlogs.map(wishlistBlog => <WishlistCard key={wishlistBlog._id} wishlistBlog={wishlistBlog} handleDelete={handleDelete}></WishlistCard>)
      }
    </tbody>
}
    
    
  </table>
</div>
            </div>
        </div>
    );
};

export default Wishlist;