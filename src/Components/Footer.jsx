// Footer.jsx
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#2699fb] text-white py-8">
  <div className="container max-w-[1200px] mx-auto px-4">
    <div className="flex flex-col md:flex-row md:justify-between">
      <div className="mb-6 md:mb-0">
        <h2 className="text-2xl font-bold">Wscube Tech</h2>
        <p className="text-sm mt-1">© 2024 All Rights Reserved.</p>
        <p className="text-sm">Contact: +1 (234) 567-890</p>
      </div>
      <div className="flex flex-col mb-6 md:mb-0 md:w-1/2">
        <h3 className="text-lg font-semibold mb-2">Join Our Community</h3>
        <p className="text-sm mb-4">Subscribe to our newsletter for the latest updates and resources.</p>
        <div className="flex space-x-2">
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 px-4 text-black py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition duration-300">
            Subscribe
          </button>
        </div>
      </div>
      <div className="flex space-x-6 mb-6">
        <a href="#" className="text-white hover:text-gray-200 transition duration-300">
          <FaFacebook size={24} />
        </a>
        <a href="#" className="text-white hover:text-gray-200 transition duration-300">
          <FaTwitter size={24} />
        </a>
        <a href="#" className="text-white hover:text-gray-200 transition duration-300">
          <FaInstagram size={24} />
        </a>
        <a href="#" className="text-white hover:text-gray-200 transition duration-300">
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
    <div className="mt-6 border-t border-gray-300 pt-4">
      <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
      <ul className="flex flex-col md:flex-row md:space-x-8 text-sm">
        <li><a href="#" className="hover:text-gray-200 transition duration-300">Courses</a></li>
        <li><a href="#" className="hover:text-gray-200 transition duration-300">About Us</a></li>
        <li><a href="#" className="hover:text-gray-200 transition duration-300">Blog</a></li>
        <li><a href="#" className="hover:text-gray-200 transition duration-300">Contact</a></li>
      </ul>
    </div>
  </div>
</footer>

  
  );
};

export default Footer;
