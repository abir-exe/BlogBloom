/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
    console.log(location.pathname);

  if(loading){
    return <SkeletonTheme>
    <p>
      <Skeleton count={10} height={10}/>
    </p>
  </SkeletonTheme>
}

  if (user) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
