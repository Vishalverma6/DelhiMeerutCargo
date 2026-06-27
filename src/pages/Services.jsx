import React from "react";
import Footer from "../components/common/Footer";

const Services = () => {
  const services = [
    {
      title: "Door To Door Delivery",
      description:
        "We provide fast and secure door-to-door cargo delivery services across cities with complete safety and timely transportation.",
    },
    {
      title: "Publishing House Booking",
      description:
        "We handle booking and transportation services for publishing houses, educational institutions, and book distributors.",
    },
    {
      title: "Bulk Cargo Transport",
      description:
        "Reliable transport solutions for bulk goods, cartons, books, office materials, and commercial shipments.",
    },
    {
      title: "Live Shipment Tracking",
      description:
        "Track your shipment status with real-time updates and transport monitoring support.",
    },
    {
      title: "Safe Goods Handling",
      description:
        "Our team ensures secure packaging, careful handling, and safe transportation of all cargo materials.",
    },
    {
      title: "Business Logistics Support",
      description:
        "Dedicated logistics support for businesses, wholesalers, publishers, and commercial clients.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-orange-100 pt-24 px-6 lg:px-20 ">

      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-5xl font-bold text-gray-800">
          Our Services
        </h1>

        <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
          Delhi Meerut Cargo provides trusted logistics and transportation
          services with a focus on safety, speed, and customer satisfaction.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-8 hover:scale-105 hover:shadow-2xl duration-300"
          >
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              {service.title}
            </h2>

            <p className="text-gray-600 leading-7">
              {service.description}
            </p>
          </div>
        ))}

      </div>

      {/* Clients Section */}
      <section className="mt-24">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Clients
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Current Clients */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl duration-300">
            <h3 className="text-3xl font-semibold text-green-700 mb-6">
              Current Clients
            </h3>

            <ul className="space-y-4 text-gray-700 text-lg">
              <li>• Pearson India Education Services Pvt. Ltd.</li>
              <li>• S Chand Publishing House</li>
            </ul>

            <p className="mt-6 text-gray-600 leading-7">
              Currently providing trusted transportation and logistics services
              for publishing and educational organizations.
            </p>
          </div>

          {/* Previous Clients */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl duration-300">
            <h3 className="text-3xl font-semibold text-blue-700 mb-6">
              Previous Clients
            </h3>

            <ul className="space-y-4 text-gray-700 text-lg">
              <li>• Proficiency Learning Solutions</li>
            </ul>

            <p className="mt-6 text-gray-600 leading-7">
              Successfully provided cargo and transportation support services
              for educational and commercial operations.
            </p>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <div className="mt-24 bg-white rounded-3xl shadow-xl p-10 text-center">
        <h2 className="text-4xl font-bold text-gray-800">
          Why Choose Delhi Meerut Cargo?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-10">

          <div>
            <h3 className="text-2xl font-semibold text-blue-700">
              Fast Delivery
            </h3>

            <p className="mt-3 text-gray-600">
              Timely transportation services with professional logistics support.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-blue-700">
              Trusted Clients
            </h3>

            <p className="mt-3 text-gray-600">
              Serving publishing houses, businesses, and commercial clients.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-blue-700">
              Safe Transport
            </h3>

            <p className="mt-3 text-gray-600">
              Secure handling and transportation of all goods and materials.
            </p>
          </div>



        </div>
      </div>

      {/* footer */}
      <div className="mt-20">
        <Footer/>
      </div>

    </div>
  );
};

export default Services;