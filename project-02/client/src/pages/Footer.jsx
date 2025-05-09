import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-slate-300 py-10 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p className="text-sm">
            We are a dummy e-commerce platform offering a wide range of high-quality products at affordable prices. Your satisfaction is our top priority.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="text-sm space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Products</a></li>
            <li><a href="#" className="hover:underline">Cart</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact</h3>
          <p className="text-sm">123 Market Street</p>
          <p className="text-sm">Mumbai, India</p>
          <p className="text-sm">Email: support@example.com</p>
          <p className="text-sm">Phone: +91 98765 43210</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#"><img src="/icons/facebook.svg" alt="Facebook" className="w-5 h-5" /></a>
            <a href="#"><img src="/icons/twitter.svg" alt="Twitter" className="w-5 h-5" /></a>
            <a href="#"><img src="/icons/instagram.svg" alt="Instagram" className="w-5 h-5" /></a>
            <a href="#"><img src="/icons/linkedin.svg" alt="LinkedIn" className="w-5 h-5" /></a>
          </div>
        </div>

      </div>

      <div className="text-center text-sm text-gray-400 mt-10">
        © 2025 Dummy Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
