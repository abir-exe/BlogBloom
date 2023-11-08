// import { useContext } from "react";
// import { AuthContext } from "../../Providers/AuthProvider";

import toast from "react-hot-toast";
import { PhotoProvider, PhotoView } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from "react-router-dom";


/* eslint-disable react/prop-types */
const AllBlogsCard = ({ allBlog }) => {
    // eslint-disable-next-line no-unused-vars
    const {_id, title, category, image, short_description, details } = allBlog;
    // const { user } = useContext(AuthContext);

    const handleWishlist = () => {
        console.log('clicked')
        // const wish = {
        //   email: user?.email,
        //   _id,
        //   title,
        //   category,
        //   image,
        //   short_description,
        //   details
          
        // }
 
        fetch('http://localhost:5000/wishlist',{
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(allBlog)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          toast.success('added to wishlist')
        })
    }
  
    return (
      <div>
          <PhotoProvider>
        <div className="card h-96 bg-base-100 shadow-xl">
          <figure>
          <PhotoView src="https://i.ibb.co/hBw19FZ/s5.jpg">
            <img src={image} alt="Shoes" />
            </PhotoView>
          </figure>
          <div className="card-body">
            <div className="flex items-center justify-between ">
              <h2 className="card-title">{title}</h2>
              <p className="font-bold text-sm ml-24">Category: {category}</p>
            </div>
            <p>Description: {short_description}</p>
            <div className="card-actions justify-end">
              <Link to={`/details/${_id}`}> 
              <button className="btn btn-outline">Details</button> </Link>
              <button onClick={handleWishlist} className="btn btn-outline">Wishlist</button> 
            </div>
          </div>
        </div>
        </PhotoProvider>
      </div>
    );
  };
  
  export default AllBlogsCard;
  