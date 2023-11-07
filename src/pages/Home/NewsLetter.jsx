
import { useState } from "react";
import toast from "react-hot-toast";

const NewsLetter = () => {

  const [rotate, setRotate] = useState(false);

    const handleSubmit = () => {
      toast.success('Successfully toasted!')
        setRotate(!rotate);
        
    }

  return (
    <div className="flex justify-between items-center shadow-md rounded-xl py-10 px-5">
      < div  className="w-1/2">
        <img className="rounded-xl" src="https://plus.unsplash.com/premium_photo-1682310468892-5d8ade38f606?q=80&w=1512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div> 
      <div className="w-1/2 my-20">
        <div className="text-center">
          <h2 className="text-4xl text-left font-extrabold px-5 ml-10">FINDING THE PERFECT TRAILS TO HIKE  IS EASY WITH <span className="text-[#d05c71]">NEWSLETTER</span></h2>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-24 mt-10">
          <div>
            <div className="avatar indicator">
              
              
            </div>
          </div>
          <form onSubmit={handleSubmit}>
          <div className="join">
            <input
              className="input input-bordered join-item"
              placeholder="Email"
              type="email"
              required
            />
            
            <input  type="submit" className="btn join-item rounded-r-full text-white bg-[#d05c71]" value="Subscribe" />
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
