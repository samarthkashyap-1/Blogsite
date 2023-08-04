import React from 'react'
import logo from "../assets/flat-mountains.svg"

function Navbar() {
    const User = "samarth"
    window.addEventListener("scroll", function () {
      const navbar = document.getElementById("navbar");
      const logo = document.getElementById("logo");
    //   const navidata = document.getElementById("navidata");
      if (window.scrollY > 150) {
        navbar.classList.remove("bg-transparent");
        navbar.classList.add("bg-black", "shadow-md","text-white");
        logo.classList.add("hidden");
       
      } else {
        navbar.classList.add("bg-transparent");
        navbar.classList.remove("bg-black", "shadow-md","text-white");
        logo.classList.remove("hidden");
      }
    });
  return (
    <div>
      <div
        className="flex justify-between items-center px-5 h-20 transition duration-300 ease-in-out bg-opacity-80"
        id="navbar"
      >
        <div id='navidata'>
            <img src={logo} alt=""  id='logo'/>
          <h1 className="text-4xl mix-blend-normal ">Blog</h1>
        </div>
        <div>
          <ul className="flex  text-lg gap-6">
            <a href="">
              <li>Home</li>
            </a>
            <a href="">
              <li>Blogs</li>
            </a>
            <a href="">
              <li>Create Blog</li>
            </a>
            <a href="">
              <li>{User}</li>
            </a>
            <a href="">
              <li>Logout</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar
