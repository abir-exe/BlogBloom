import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Details = () => {
  const { user } = useContext(AuthContext);

  const handleComment = async (e) => {
    e.preventDefault();

    const form = e.target;
    const comment = form.comment.value;

    const commentData = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
      blog_id: _id,
      blog: title,
      comment,
    };
    console.log(commentData);

    fetch('http://localhost:5000/comments', {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(commentData),
      })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.insertedId) {
            alert('Comment Submitted')
        }
    })


  };

  const blogDetails = useLoaderData();
  //   console.log(details);
  const { _id, title, category, details, short_description } = blogDetails;

  return (
    <div>
      <div className="hero min-h-full px-5 py-5 bg-base-200 mt-5 rounded-lg">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <img
            src="https://i.ibb.co/hBw19FZ/s5.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="space-y-3">
            <h1 className="text-5xl font-bold">Title: {title}</h1>
            <h1 className="text-2xl font-bold">Category: {category}</h1>
            <p className="py-1 font-semibold">
              Short Description: {short_description}
            </p>
            <p className="py-6">Details: {details}</p>
            <div className=" flex justify-end">
              <button className="btn btn-outline">Update</button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- input Fields  --> */}
      <form onSubmit={handleComment} className="m-10 border px-20 pb-10">
      <h2 className="text-4xl font-bold text-center my-10">Comment Here</h2>
        {/* <!-- field1  --> */}
        <div className="form-control w-full max-w-xl">
          <label className="label">
            <span className="label-text">
              Comment <span className="text-red-600 text-xl font-bold">*</span>
            </span>
            <span className="label-text-alt"></span>
          </label>
          <textarea
            name="comment"
            type="text"
            placeholder="your comment"
            className="textarea textarea-bordered textarea-lg w-full max-w-full"
            required
          ></textarea>
          <label className="label">
            <span className="label-text-alt"></span>
            <span className="label-text-alt"></span>
          </label>
        </div>
        <button className="  btn btn-outline px-24">Comment</button>
      </form>
    </div>
  );
};

export default Details;
