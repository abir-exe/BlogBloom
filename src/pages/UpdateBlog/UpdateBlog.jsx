import toast from "react-hot-toast";
import { useLoaderData, useParams } from "react-router-dom";

const UpdateBlog = () => {

  const {id} = useParams();
  console.log(id)

  const previousBlog = useLoaderData();
  console.log(previousBlog);

    const handleUpdateBlog = async (e) => {
        e.preventDefault();
    
        const form = e.target;
        const title = form.title.value;
        const category = form.category.value;
        const image = form.image.value;
        const short_description = form.description.value;
        const details = form.details.value;
        
    
        const blogData = {
          title,
          category,
          image,
          short_description,
          details
        };
        console.log(blogData);
    
        // for server
        fetch(`https://blog-bloom-server-mu.vercel.app/allblogs/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(blogData),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            toast.success('updated succesfully')
          });
      };


  return (
    <div>
      <div>
        <div className="w-3/6 mx-auto h-full">
          <h2 className="text-3xl text-center mt-10 mb-5">Update Blog</h2>
          <form onSubmit={handleUpdateBlog} className="card-body mb-10 border bg-[#f6f8fa]">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Blog Title</span>
              </label>
              <input
              defaultValue={previousBlog.title}
                type="text"
                name="title"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-1/2 ">
              {/* categories */}
              <label className="label">
              <label className="label-text">Choose a category:</label>
              </label>
              <select name="category" className="py-1">
                <option value="travel">Travel</option>
                <option value="research">Research</option>
                <option value="technology">Technology</option>
                <option value="science">Science</option>
                <option value="book">Books</option>
              </select>
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
              <button className="btn glass outline w-1/2 mx-auto">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBlog;
