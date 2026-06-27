import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-orange-100 pt-40 lg:pt-24 px-6 lg:px-20 py-16 ">

      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-800">
          Contact Us
        </h1>

        <p className="mt-6 text-lg text-gray-600 leading-8">
          Get in touch with Delhi Meerut Cargo for transportation,
          logistics, booking, and cargo delivery services.
          We are always ready to assist you.
        </p>
      </div>

      {/* Contact Section */}
      <div className="mt-20 grid lg:grid-cols-2 gap-12">

        {/* Left Side */}
        <div className="bg-white rounded-3xl shadow-xl p-10">

          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Contact Information
          </h2>

          <div className="space-y-8">

            <div>
              <h3 className="text-xl font-semibold text-blue-700">
                Phone Number
              </h3>

              <p className="mt-2 text-gray-600 text-lg">
                +91 8467992015
              </p >
              <p className="mt-2 text-gray-600 text-lg">+91 9540374698</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-700">
                Email Address
              </h3>

              <p className="mt-2 text-gray-600 text-lg">
                delhimeerutcargo1@gmail.com
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-700">
                Service Area
              </h3>

              <p className="mt-2 text-gray-600 text-lg">
                Delhi, Meerut, and nearby transport routes across cities.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-700">
                Working Hours
              </h3>

              <p className="mt-2 text-gray-600 text-lg">
                Monday - Saturday : 9:00 AM - 8:00 PM
              </p>
            </div>

          </div>

        </div>

        {/* Right Side Form */}
        <div className="bg-white rounded-3xl shadow-xl p-10">

          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Send Us A Message
          </h2>

          <form className="space-y-6">

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Phone Number
              </label>

              <input
                type="text"
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-xl shadow-lg duration-300"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default ContactUs;