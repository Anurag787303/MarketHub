import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, children }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  return (
    <Fragment>
      {loading === false && (
        (isAuthenticated === false || (isAdmin === true && user.role != "admin")) ? (
          <Navigate to="/login" />
        ) : (
          children
        )
      )}
    </Fragment>
  )
};

export default ProtectedRoute;
