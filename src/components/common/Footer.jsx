import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white px-6 lg:px-20 py-14">

            <div className="grid md:grid-cols-3 gap-12">

                {/* Company Info */}
                <div>
                    <h2 className="text-3xl font-bold text-orange-400">
                        Delhi Meerut Cargo
                    </h2>

                    <p className="mt-5 text-gray-300 leading-7">
                        Providing trusted cargo and logistics services with safe,
                        reliable, and timely transportation solutions for businesses,
                        publishing houses, and commercial clients.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-2xl font-semibold mb-5">
                        Quick Links
                    </h2>

                    <ul className="space-y-3 flex flex-col text-gray-300">
                        <Link to="/" className="hover:text-orange-400 duration-300 cursor-pointer">
                            Home
                        </Link>

                        <Link to="/about-us" className="hover:text-orange-400 duration-300 cursor-pointer">
                            About Us

                        </Link>
                        <Link to="/services" className="hover:text-orange-400 duration-300 cursor-pointer">
                            Services
                        </Link>
                        <Link to="/contact-us" className="hover:text-orange-400 duration-300 cursor-pointer">
                            Contact Us
                        </Link>


                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h2 className="text-2xl font-semibold mb-5">
                        Contact Us
                    </h2>

                    <div className="space-y-4 text-gray-300">

                        <p>
                            📍 6/11 Ansari Road Daryaganj New Delhi 110002, Delhi , India
                        </p>

                        <p>
                            📞 +91 8467992015
                        </p>

                        <p>
                            📧 delhimeerutcargo1@gmail.com
                        </p>

                    </div>
                </div>

            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">

                <p>
                    © 2026 Delhi Meerut Cargo. All Rights Reserved.
                </p>

            </div>

        </footer>
    );
};

export default Footer;