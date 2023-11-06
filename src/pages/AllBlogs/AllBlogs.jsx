import { useEffect, useState } from "react";
import AllBlogsCard from "./AllBlogsCard";


const AllBlogs = () => {

    const [allBlogs, setAllBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allblogs')
        .then(res => res.json())
        .then(data => setAllBlogs(data))
    }, [])

    return (
        <div>
            <div>
        <div>
          <h2 className="text-4xl text-center mb-10"></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-5 px-10">
           
        {
          allBlogs.map(allBlog => <AllBlogsCard key={allBlog._id} allBlog={allBlog}></AllBlogsCard>)
        }
            
        </div>
      </div>
        </div>
    );
};

export default AllBlogs;