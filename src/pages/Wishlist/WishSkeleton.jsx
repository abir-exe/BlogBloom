import Skeleton from 'react-loading-skeleton';

const WishSkeleton = () => {
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
              <Skeleton width={48} height={48} />
            </div>
          </div>
        </div>
      </td>
      <td>
        <div>
          <div className="font-bold">
            <Skeleton width={100} />
          </div>
          <div className="text-sm opacity-50">Category: <Skeleton width={60} /></div>
        </div>
      </td>
      <td>
        <Skeleton width={100} />
      </td>
      <td>
        <Skeleton width={80} />
      </td>
      <th className="space-x-2">
        <button className="btn btn-outline btn-xs">Details</button>
        <button className="btn btn-outline btn-xs">Remove</button>
      </th>
    </tr>
    );
};

export default WishSkeleton;