import React from "react";
import Footer from "../components/common/Footer";
import image from "../assets/about.avif"

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-orange-100 pt-24 px-6 lg:px-20 ">

      {/* Heading Section */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-800">
          About Delhi Meerut Cargo
        </h1>

        <p className="mt-6 text-lg text-gray-600 leading-8">
          Delhi Meerut Cargo is a trusted logistics and transportation company
          dedicated to providing safe, fast, and reliable cargo delivery
          services. We specialize in handling transportation for publishing
          houses, businesses, educational institutions, and commercial clients.
        </p>
      </div>

      {/* Mission Section */}
      <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800">
            Our Mission
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-8">
            Our mission is to provide dependable and efficient logistics
            solutions with complete customer satisfaction. We focus on timely
            delivery, secure transportation, and long-term business
            relationships.
          </p>

          <p className="mt-4 text-gray-600 text-lg leading-8">
            We continuously work towards improving our transport network and
            service quality to meet the growing needs of our clients.
          </p>
        </div>

        {/* Right Image */}
        <div>
          <img
            src={image}
            alt="Cargo Service"
            className="rounded-3xl shadow-2xl w-full"
          />
        </div>

      </div>

      {/* Why Choose Us */}
      <div className="mt-24">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-14">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 duration-300">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              Reliable Service
            </h3>

            <p className="text-gray-600 leading-7">
              We ensure safe and timely transportation with complete
              professionalism and customer support.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 duration-300">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              Experienced Operations
            </h3>

            <p className="text-gray-600 leading-7">
              Years of experience in handling logistics for businesses,
              publishers, and commercial clients.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 duration-300">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              Trusted Clients
            </h3>

            <p className="text-gray-600 leading-7">
              Proudly serving organizations like Pearson India and
              S Chand Publishing House.
            </p>
          </div>

        </div>
      </div>

      {/* Clients Section */}
      <div className="mt-24 bg-white rounded-3xl shadow-xl p-10">

        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Clients
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Current Clients */}
          <div>
            <h3 className="text-3xl font-semibold text-green-700 mb-6">
              Current Clients
            </h3>

            <ul className="space-y-4 text-lg text-gray-700">
              <li>• Pearson India Education Services Pvt. Ltd.</li>
              <li>• S Chand Publishing House</li>
            </ul>
          </div>

          {/* Previous Clients */}
          <div>
            <h3 className="text-3xl font-semibold text-blue-700 mb-6">
              Previous Clients
            </h3>

            <ul className="space-y-4 text-lg text-gray-700">
              <li>• Proficiency Learning Solutions</li>
            </ul>
          </div>

        </div>

      </div>

      {/* Closing Section */}
      <div className="mt-24 text-center max-w-4xl mx-auto">

        <h2 className="text-4xl font-bold text-gray-800">
          Building Trust Through Transportation
        </h2>

        <p className="mt-6 text-lg text-gray-600 leading-8">
          Delhi Meerut Cargo continues to grow with a commitment to reliable
          logistics services, customer satisfaction, and professional cargo
          management solutions across cities.
        </p>

      </div>

      {/* Footer */}
      <div className="mt-20">
        <Footer/>
      </div>

    </div>
  );
};

export default AboutUs;