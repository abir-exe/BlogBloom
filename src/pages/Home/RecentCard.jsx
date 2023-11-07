import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/* eslint-disable react/prop-types */
const RecentCard = ({ blog }) => {
  const { _id, title, category } = blog;

  const buttonVariants = {
    rest: {
      scale: 1,
      opacity: 1,
    },
    hover: {
      scale: 1.1,
      opacity: 0.8,
    },
  };
  const divVariants = {
    rest: {
      scale: 1,
      opacity: 1,
    },
    hover: {
      scale: 1.1,
      opacity: 1,
    },
  };

  return (
    <div>
      <motion.div variants={divVariants}
              initial="rest"
              whileHover="hover" className="card h-96 bg-base-100 shadow-xl">
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
            <Link to={`/details/${_id}`}>
              <motion.button
                variants={buttonVariants}
                initial="rest"
                whileHover="hover"
                className="btn btn-outline"
              >
                Details
              </motion.button>
            </Link>
            <motion.button
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              className="btn btn-outline"
            >
              Wishlist
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RecentCard;
