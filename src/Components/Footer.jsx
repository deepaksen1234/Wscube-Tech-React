// Footer.jsx
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold">Wscube Tech</h2>
            <p className="text-sm">© 2024 All Rights Reserved.</p>
            <p className="text-sm">Contact: +1 (234) 567-890</p>
          </div>
          <div className="flex flex-col mb-4 md:mb-0 md:w-1/2">
            <h3 className="text-md font-semibold mb-2">Subscribe to our newsletter</h3>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 border border-gray-400 rounded focus:outline-none focus:border-gray-600"
              />
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded">
                Subscribe
              </button>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
