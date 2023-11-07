/* eslint-disable react/prop-types */


// eslint-disable-next-line react/prop-types
const WishlistCard = ({wishlistBlog}) => {

    const {_id, title, category, image, short_description, details } = wishlistBlog;
    return (
        <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{title}</div>
              <div className="text-sm opacity-50">{category}</div>
            </div>
          </div>
        </td>
        <td>
          {short_description}
        </td>
        <td>{details}</td>
        <th className="  space-x-2">
          <button className="btn btn-outline btn-xs">Details</button>
          <button className="btn btn-outline btn-xs">Remove</button>
        </th>
      </tr>
    );
};

export default WishlistCard;