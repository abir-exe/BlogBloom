import { useContext, useEffect, useState } from "react";
import AllBlogsCard from "./AllBlogsCard";
import { AuthContext } from "../../Providers/AuthProvider";
// import LoadingSkeleton from "./LoadingSkeleton";

// import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import LoadingSkeleton from "./LoadingSkeleton";

const AllBlogs = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [match, setMatch] = useState("");
  const { loading } = useContext(AuthContext);

  // const [searchText, setSearchText] = useState("");

  // const handleSearchInputChange = (e) => {
  //   setSearchText(e.target.value);
  // };

  // const handleSearch = () => {
  //   fetch(`/allblogs/search/${searchText}`)
  //   .then(res => res.json())
  //   .then(data => setAllBlogs(data))
  // }

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const search = form.search.value;
    // setSearchText(search)
    console.log(search);

    fetch(``, {
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }; 
  // console.log(searchText);

  useEffect(() => {
    fetch("https://blog-bloom-server-mu.vercel.app/allblogs")
      .then((res) => res.json())
      .then((data) => setAllBlogs(data));
  }, []);

  const handleChange = e => {
    const form = e.target;
    
    console.log( form.value)
    setMatch(form.value);

    
  }

console.log(match)
{match === allBlogs.title ? <>matched</> : <>not matched</>}

  return (
    <div>
      
      <div>
        <div>
          <h2 className="text-4xl text-center mb-10"></h2>
        </div>
        <div>
          {loading ? (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-5 px-10">
                {allBlogs.map((allBlog) => (
                  <LoadingSkeleton
                    key={allBlog._id}
                    allBlog={allBlog}
                  ></LoadingSkeleton>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <div>
                <form
                  
                  onChange={handleChange}
                  className="flex justify-center my-6"
                >
                  <input
                    type="text"
                    placeholder="Search by Title"
                    name="searchtext"
                    className="input input-bordered input-primary w-full max-w-xs"
                  />
                  <input
                    type="submit"
                    value="Search"
                    className="rounded-lg bg-indigo-500 px-10 ms-2 font-semibold text-white cursor-pointer"
                  />
                </form>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-5 px-10">
                {allBlogs.map((allBlog) => (
                  <AllBlogsCard
                    key={allBlog._id}
                    allBlog={allBlog}
                  ></AllBlogsCard>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
