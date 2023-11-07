import { useLoaderData } from "react-router-dom";

const Details = () => {
  const blogDetails = useLoaderData();
  //   console.log(details);
  const { title, category, details, short_description } = blogDetails;

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
      <h2 className="text-4xl font-bold text-center my-10">Comment Here</h2>
      <form className="ml-5 border px-20 py-10">
        {/* <!-- field1  --> */}
        <div className="flex justify-between gap-5">
        <div className="form-control w-full max-w-xl">
          <label className="label">
            <span className="label-text">
              Name <span className="text-red-600 text-xl font-bold">*</span>
            </span>
            <span className="label-text-alt"></span>
          </label>
          <input
            name="Name"
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full max-w-xl"
            maxLength={256}
            required
          />
          <label className="label">
            <span className="label-text-alt"></span>
            <span className="label-text-alt"></span>
          </label>
        </div>
        <div className="form-control w-full max-w-xl">
          <label className="label">
            <span className="label-text">
              Email <span className="text-red-600 text-xl font-bold">*</span>
            </span>
            <span className="label-text-alt"></span>
          </label>
          <input
            name="Email"
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full max-w-xl"
            maxLength={256}
            required
          />
          <label className="label">
            <span className="label-text-alt"></span>
            <span className="label-text-alt"></span>
          </label>
        </div>
        </div>
        <div className="form-control w-full max-w-xl">
          <label className="label">
            <span className="label-text">
              Photo URL <span className="text-red-600 text-xl font-bold">*</span>
            </span>
            <span className="label-text-alt"></span>
          </label>
          <input
            name="photo"
            placeholder="Photo URL"
            className="input input-bordered w-full max-w-xl "
            required
          />
          <label className="label">
            <span className="label-text-alt"></span>
            <span className="label-text-alt"></span>
          </label>
        </div>
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
