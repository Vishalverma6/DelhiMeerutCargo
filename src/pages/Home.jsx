import React from "react";
import Footer from "../components/common/Footer";
import homeImage from "../assets/home.avif"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-blue-100 via-white to-orange-100 pt-20">


      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-20 py-16">

        {/* Left Content */}
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold text-gray-800 leading-tight">
            Fast & Reliable <br />
            Cargo Delivery Service
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Delhi Meerut Cargo provides safe, fast, and trusted transport
            services across cities. We ensure your goods reach on time with
            complete security.
          </p>

          {/* <div className="mt-8 flex gap-4">
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg shadow-lg">
              Book Now
            </button>

            <button className="border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-6 py-3 rounded-lg">
              Track Shipment
            </button>
          </div> */}
        </div>

        {/* Right Image */}
        <div className="mt-12 lg:mt-0">
          <img
            src={homeImage}
            alt="Cargo Truck"
            className="w-full max-w-lg rounded-2xl shadow-2xl"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="px-8 lg:px-20 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 duration-300">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              Fast Delivery
            </h3>

            <p className="text-gray-600">
              Quick and secure transportation service for all types of goods.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 duration-300">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              Live Tracking
            </h3>

            <p className="text-gray-600">
              Track your shipment anytime with real-time updates.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 duration-300">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              Safe Transport
            </h3>

            <p className="text-gray-600">
              Your cargo is handled carefully with complete safety assurance.
            </p>
          </div>

        </div>
      </section>

      {/* Clients Section */}
      <section className="px-8 lg:px-20 py-16 bg-white">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Trusted By
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="p-6 rounded-2xl shadow-md border bg-gray-50 hover:shadow-xl duration-300">
            <h3 className="text-2xl font-semibold text-blue-700">
              Pearson India Education Services Pvt. Ltd.
            </h3>

            <p className="mt-3 text-gray-600">
              Providing reliable cargo and logistics support for educational
              materials and business transportation needs.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow-md border bg-gray-50 hover:shadow-xl duration-300">
            <h3 className="text-2xl font-semibold text-blue-700">
              S Chand Publishing House
            </h3>

            <p className="mt-3 text-gray-600">
              Trusted logistics partner for secure and timely book transportation
              and publishing distribution services.
            </p>
          </div>

        </div>
      </section>


      {/* Footer */}
      <Footer/>
      {/* <footer className="bg-gray-900 text-white text-center py-6">
        <p>
          © 2026 Delhi Meerut Cargo. All Rights Reserved.
        </p>
      </footer> */}

    </div>
  );
};

export default Home;