/* eslint-disable react/prop-types */
const RecentCard = ({ blog }) => {
  const { _id, title, category } = blog;

  return (
    <div>
      <div className="card h-96 bg-base-100 shadow-xl">
        <figure>
          <img src="https://i.ibb.co/hBw19FZ/s5.jpg" alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex items-center justify-between ">
            <h2 className="card-title">{title}</h2>
            <p className="font-bold text-sm ml-24">Category: {category}</p>
          </div>
          <p>Description: If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline">Details</button>
            <button className="btn btn-outline">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentCard;
