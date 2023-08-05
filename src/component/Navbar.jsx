import React from 'react'
import logo from "../assets/logo.png"

function Navbar() {
    const User = "samarth"
   
  return (
    <div>
      <div
        className="flex justify-evenly items-center h-20 bg-black text-white"
        id="navbar"
      >
        <div id="navidata" className="">
          <h1 className='text-4xl'>Blogs</h1>
        </div>
        <div className=" h-full flex justify-center px-10 items-center">
          <ul className="flex text-lg h-full items-center">
            <a
              href=""
              className="hover:text-black p-3 hover:bg-[#FF7700] h-full flex items-center  transition-colors duration-300 ease-in-out"
            >
              <li className="">Home</li>
            </a>
            <a
              href=""
              className="hover:text-black p-3 hover:bg-[#FF7700] h-full flex items-center  transition-colors duration-300 ease-in-out"
            >
              <li>Blogs</li>
            </a>
            <a
              href=""
              className="hover:text-black p-3 hover:bg-[#FF7700] h-full flex items-center  transition-colors duration-300 ease-in-out"
            >
              <li>Create Blog</li>
            </a>
            <a
              href=""
              className="hover:text-black p-3 hover:bg-[#FF7700] h-full flex items-center  transition-colors duration-300 ease-in-out"
            >
              <li>{User}</li>
            </a>
            <a
              href=""
              className="hover:text-black p-3 hover:bg-[#FF7700] h-full flex items-center  transition-colors duration-300 ease-in-out"
            >
              <li>Login</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar
