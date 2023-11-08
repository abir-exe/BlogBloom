import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";

const AddBlog = () => {
  const { user } = useContext(AuthContext);

    const handleAddBlog = async (e) => {
        e.preventDefault();
    
        const form = e.target;
        const title = form.title.value;
        const category = form.category.value;
        const image = form.image.value;
        const short_description = form.description.value;
        const details = form.details.value;
        const date = form.date.value;
        
    
        const blogData = {
          email: user?.email,
          title,
          category,
          image,
          short_description,
          details,
          date
        };
        console.log(blogData);
    
        // for server
        fetch(`http://localhost:5000/allblogs`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(blogData),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            toast.success('added successfully')
          });
      };


  return (
    <div>
      <div>
        <div className="w-3/6 mx-auto h-full">
          <h2 className="text-3xl text-center mt-10 mb-5">Add A Blog</h2>
          <form onSubmit={handleAddBlog} className="card-body mb-10 border bg-[#f6f8fa]">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Blog Title</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-5">
            <div className="form-control md:w-1/2 ">
              {/* categories */}
              <label className="label">
              <label className="label-text">Choose a category:</label>
              </label>
              <select name="category" className="py-3 rounded-xl px-2 border">
                <option value="travel">Travel</option>
                <option value="research">Research</option>
                <option value="technology">Technology</option>
                <option value="science">Science</option>
                <option value="book">Book</option>
                <option value="food">Food</option>
              </select>
            </div>
            <div className="form-control md:w-1/2 ">
              {/* date */}
              <label className="label">
              <label className="label-text">Date:</label>
              </label>
              <input
                type="date"
                name="date"
                placeholder="Date"
                className="input input-bordered"
                required
              />
              
            </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                className="input input-bordered"
                required
              />
            </div>

            
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <input
                type="text"
                name="description"
                placeholder="Short Description"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Long Description</span>
              </label>
              <input
                type="text"
                name="details"
                placeholder="Details"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn glass outline w-1/2 mx-auto">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
