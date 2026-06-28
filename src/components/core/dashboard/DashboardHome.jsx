import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const DashboardHome = () => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.profile || {});

  

  const handleFirstAction = () => {
    if (user?.accountType === "Client") {
      navigate("/dashboard/search-pod");
    } else if (
      user?.accountType === "Staff" ||
      user?.accountType === "Admin"
    ) {
      navigate("/dashboard/upload-pod");
    }
  };

  // const handleSecondAction = () => {
  //   if (user?.accountType === "CLIENT") {
  //     navigate("/dashboard/delivered-pod");
  //   } else {
  //     navigate("/dashboard/search-pod");
  //   }
  // };

  const handleThirdAction = () => {
    
    if (user?.accountType === "Staff") {
      navigate("/dashboard/search-pod");
    } else if (user?.accountType === "Admin") {
      navigate("/dashboard/search-pod");
    }
  };

  return (<div className="min-h-screen mt-20 p-6">
    {/* Dashboard Title */} <div className="bg-white rounded-xl shadow-md p-4 max-w-xl mx-auto mb-8"> <h1 className="text-3xl font-bold text-center text-blue-900">
      {user?.accountType === "Client"
        ? "User Dashboard"
        : user?.accountType === "Staff"
          ? "Staff Dashboard"
          : "Admin Dashboard"} </h1> </div>

    {/* Welcome Section */}
    <div className="bg-white rounded-xl shadow-md p-6 max-w-4xl mx-auto text-center mb-8">
      <h2 className="text-3xl font-bold text-blue-800 mb-4">
        Welcome to Delhi Meerut Cargo
      </h2>

      <p className="text-gray-700 text-lg">
        {user?.accountType === "Client"
          ? " Search & Download PODs and monitor delivery status."
          : user?.accountType === "Staff"
            ? "Upload PODs and manage delivery operations efficiently."
            : "Manage cargo operations, staff and shipment activities."}
      </p>
    </div>

    {/* Action Buttons */}
    <div className="flex flex-wrap justify-center gap-4">
      <button
        onClick={handleFirstAction}
        className="bg-blue-600 text-white px-6 py-3 rounded-xl cursor-pointer hover:bg-blue-700"
      >
        {user?.accountType === "Client"
          ? "Search POD"
          : "Upload POD"}
      </button>

      {/* <button
        onClick={handleSecondAction}
        className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700"
      >
        {user?.accountType === "CLIENT"
          ? "Delivered POD"
          : "Search POD"}
      </button> */}

      <button
        onClick={handleThirdAction}
        className="bg-orange-600 text-white px-6 py-3 cursor-pointer rounded-xl hover:bg-orange-700"
      >
        {
          user?.accountType ==="Staff" ||
          user?.accountType ==="Admin" ?
          "Search POD": ""
        }
      </button>

      {user?.accountType === "Admin" && (
        <button
          onClick={() => navigate("/dashboard/manage-staff")}
          className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700"
        >
          Manage Staff
        </button>
      )}
    </div>
  </div>
  );
};

export default DashboardHome;
