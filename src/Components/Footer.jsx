import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-4">
      <div className="max-w-6xl mx-auto text-center text-gray-100 px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm mb-2 md:mb-0">
          &copy; 2023 Copywrite. All rights reserved by GadoMatrix.
        </p>
        <div className="flex space-x-4">
          <a href="/documentation" className="text-gray-100 hover:text-white">
            Documentation
          </a>
          <a href="/support" className="text-gray-100 hover:text-white">
            Support
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
