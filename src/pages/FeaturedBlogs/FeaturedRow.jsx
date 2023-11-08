/* eslint-disable react/prop-types */

import autoprefixer from "autoprefixer";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const FeaturedRow = ({blog}) => {

    const {_id, title, category, image, short_description, details, email} = blog;
    const {user} = useContext(AuthContext);

    
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
                <img src={user?.photoURL} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              
              
            </div>
          </div>
        </td>
        <td><div className="font-bold">{title}</div></td>
        <td><div className="text-sm opacity-50">{category}</div></td>
        <td>
          {
            user?.displayName
          }
        </td>
        <td></td>
        
      </tr>
    );
};

export default FeaturedRow;