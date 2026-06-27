import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-orange-100 flex flex-col justify-center items-center px-6 text-center">

      {/* Error Code */}
      <h1 className="text-8xl md:text-9xl font-bold text-red-500 drop-shadow-lg">
        404
      </h1>

      {/* Heading */}
      <h2 className="mt-6 text-3xl md:text-5xl font-bold text-gray-800">
        Page Not Found
      </h2>

      {/* Description */}
      <p className="mt-5 text-lg text-gray-600 max-w-2xl leading-8">
        Oops! The page you are looking for does not exist or may have been
        moved to another location.
      </p>

      {/* Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row gap-5">

        <Link to="/">
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-xl shadow-lg duration-300">
            Go Back Home
          </button>
        </Link>

        <button
          onClick={() => window.history.back()}
          className="border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-8 py-3 rounded-xl duration-300"
        >
          Previous Page
        </button>

      </div>

      {/* Bottom Text */}
      <p className="mt-16 text-gray-500">
        Delhi Meerut Cargo © 2026
      </p>

    </div>
  );
};

export default Error;