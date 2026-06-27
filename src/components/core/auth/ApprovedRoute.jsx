import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";

const ApprovedRoute = ({ children }) => {
  const { user } = useSelector((state) => state.profile);

  if (user && !user.approved) {
    toast.error(
      "Your account is pending approval. Please wait for admin approval."
    );

    return <Navigate to="/dashboard/home" replace />;
  }

  return children;
};

export default ApprovedRoute;