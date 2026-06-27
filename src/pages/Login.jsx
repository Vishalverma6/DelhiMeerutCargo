import React from "react";
import Template from "../components/core/auth/Template";
import loginImage from "../assets/loginImage.png"

const Login = () => {
  return (
    <div className='flex justify-center h-screen  bg-gradient-to-b from-indigo-100 to-gray-100 pt-10'>
      <Template
        title="Welcome Back to Delhi Meerut Cargo"
        desc1="Access your account to track shipments, view POD documents, and manage your transport services easily."
        desc2="Stay connected with your deliveries in real-time and ensure smooth cargo operations."
        image1={loginImage}
        formtype="login"
      />
    </div>
  );
};

export default Login;