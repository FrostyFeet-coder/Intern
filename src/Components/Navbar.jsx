import React from 'react'
import logo from './logo.png'; // Import the image directly

function Navbar() {
  return (
    <div className="flex justify-between bg-[#262626] h-14 fixed w-screen z-50">
      <a href="/">
        <img className="h-14 " src={logo} alt="this is logo" />
      </a>
      <button className=" flex py-[5px] px-[20px] bg-[#82b440] text-white rounded-[4px] mx-4 my-3 text-sm relative text-center shadow-2xl">
        Buy Now
      </button>
    </div>
  );
}

export default Navbar