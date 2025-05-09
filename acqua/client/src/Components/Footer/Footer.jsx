import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto p-10">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 text-gray-300 text-center sm:text-left">
          {/* Column 1 */}
          <div>
            <h3 className="text-2xl font-medium mb-3">Get to Know Us</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about_company"
                  className="hover:text-orange-300 transition duration-200"
                >
                  About Company
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="hover:text-orange-300 transition duration-200"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/press_release"
                  className="hover:text-orange-300 transition duration-200"
                >
                  Press Release
                </Link>
              </li>
              <li>
                <Link
                  to="/investor_relations"
                  className="hover:text-orange-300 transition duration-200"
                >
                  Investor Relations
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-2xl font-medium mb-3">Connect with Us</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/facebook"
                  className="hover:text-orange-300 transition duration-200"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  to="/twitter"
                  className="hover:text-orange-300 transition duration-200"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  to="/linkedin"
                  className="hover:text-orange-300 transition duration-200"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  to="/instagram"
                  className="hover:text-orange-300 transition duration-200"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-2xl font-medium mb-3">Make Money with Us</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/sell_on_amazon"
                  className="hover:text-orange-300 transition duration-200"
                >
                  Sell on Amazon
                </Link>
              </li>
              <li>
                <Link
                  to="/sell_your_services"
                  className="hover:text-orange-300 transition duration-200"
                >
                  Sell Your Services
                </Link>
              </li>
              <li>
                <Link
                  to="/sell_your_apps"
                  className="hover:text-orange-300 transition duration-200"
                >
                  Sell Your Apps
                </Link>
              </li>
              <li>
                <Link
                  to="/become_an_affiliate"
                  className="hover:text-orange-300 transition duration-200"
                >
                  Become an Affiliate
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-2xl font-medium mb-3">Let Us Help You</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/your_account"
                  className="hover:text-orange-300 transition duration-200"
                >
                  Your Account
                </Link>
              </li>
              <li>
                <Link
                  to="/your_orders"
                  className="hover:text-orange-300 transition duration-200"
                >
                  Your Orders
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping_rates"
                  className="hover:text-orange-300 transition duration-200"
                >
                  Shipping Rates & Policies
                </Link>
              </li>
              <li>
                <Link
                  to="/returns"
                  className="hover:text-orange-300 transition duration-200"
                >
                  Returns & Replacements
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-600 text-center py-4">
        <p className="text-gray-400">© All rights reserved 2025.</p>
      </div>
    </footer>
  );
};

export default Footer;
