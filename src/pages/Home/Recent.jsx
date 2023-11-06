import { useEffect, useState } from "react";
import RecentCard from "./RecentCard";

const Recent = () => {

  const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/recentblogs')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    console.log(blogs.length)

  return (
    <div>
      <div>
        <div>
          <h2 className="text-4xl text-center mb-10">Recent Blogs</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-5 px-10">
           
        {
          blogs.map(blog => <RecentCard key={blog._id} blog={blog}></RecentCard>)
        }
            
        </div>
      </div>
    </div>
  );
};

export default Recent;
