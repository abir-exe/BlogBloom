import Skeleton, {  } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingSkeleton = () => {
  return (
    <div className="card h-96 bg-base-100 shadow-xl">
        {/* <SkeletonTheme >
    <p>
      <Skeleton count={16} />
    </p>
  </SkeletonTheme> */}

<div className="card h-96 bg-base-100 shadow-xl">
      <figure>
        <Skeleton height={200} width={200} />
      </figure>
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h2 className="card-title">
            <Skeleton width={150} />
          </h2>
          <p className="font-bold text-sm ml-24">
            <Skeleton width={100} />
          </p>
        </div>
        <p>
          <Skeleton width={150} height={20} />
          <Skeleton width={200} height={20} />
        </p>
        <div className="card-actions justify-end">
          <button className="btn ">
            <Skeleton width={100} height={30} />
          </button>
          <button className="btn ">
            <Skeleton width={100} height={30} />
          </button>
        </div>
      </div>
    </div>
      
    </div>
  );
};

export default LoadingSkeleton;
