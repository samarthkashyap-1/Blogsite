import React from 'react'
import { useState,useEffect,useRef } from 'react';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';


import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

function Navbar({signin,signout,user}) {
  // const location = useLocation();
    

      addEventListener("scroll",()=>{
        const navbar  = document.getElementById("navbar")
        if(window.scrollY >= 50){
         navbar.classList.add("shadow-md","backdrop-blur-lg");
        }
        if(window.scrollY <= 0){
          navbar.classList.remove("shadow-md","backdrop-blur-lg");
        }
      })
    
      const menuRef = useRef(null);
      const [isOpen, setIsOpen] = useState(false);

      const toggleMenu = () => {
        setIsOpen(!isOpen);
      };
       const closeMenu = () => {
         setIsOpen(false);
       };
         useEffect(() => {
           const handleOutsideClick = (event) => {
             if (menuRef.current && !menuRef.current.contains(event.target)) {
               closeMenu();
             }
           };

           document.addEventListener("mousedown", handleOutsideClick);

           return () => {
             document.removeEventListener("mousedown", handleOutsideClick);
           };
         }, []);
         
      

   
  return (
    <div>
      <div
        ref={menuRef}
        className="flex z-40 bg-transparent justify-between transition-all duration-300 ease-in items-center h-20 "
        id="navbar"
      >
        <div id="navidata" className=" ml-2 sm:ml-5">
          <h1 className="text-black text-5xl font-bold sm:text-4xl">Glog</h1>
        </div>
        <div className=" h-full flex justify-center px-8 items-center">
          <div className="sm:flex hidden">
            <button
              className="text-black focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          <div className=" ">
            <ul
              className={`flex text-lg text-black h-full sm:top-0 sm:absolute sm:right-[0%] sm:backdrop-blur-sm sm:h-fit sm:w-[100%] items-center gap-2  sm:gap-6 sm:flex-col sm:bg-white sm:pb-2 box-border font-medium ${
                isOpen ? "sm:flex" : "sm:hidden"
              } transition-all duration-1000 ease-in-out sm:shadow`}
            >
              

              <NavLink
              to="/"
                onClick={closeMenu}
                
                className="sm:mt-5 hover:underline underline-offset-2 w-24 mx-auto flex items-center  transition-colors duration-300 ease-in-out"
                >
                <li className=" mx-auto">Home</li>
              </NavLink>
                
                

              <NavLink to="/blogs"
                onClick={closeMenu}
               
                className="hover:underline underline-offset-2 w-24 mx-auto flex items-center  transition-colors duration-300 ease-in-out"
                >
                <li className=" mx-auto">Blogs</li>
              </NavLink>
                
              {user && (
                <>
                  <a
                    onClick={closeMenu}
                    href=""
                    className="hover:underline underline-offset-2 w-24 mx-auto flex items-center  transition-colors duration-300 ease-in-out"
                  >
                    <li className=" mx-auto">Create</li>
                  </a>
                </>
              )}
                
              <Link
                to="contactus">
              <NavLink to='/'
                onClick={closeMenu}
                className="hover:underline underline-offset-2 w-28 cursor-pointer mx-auto flex items-center  transition-colors duration-300 ease-in-out"
                >
                <li className=" mx-auto">Contact Us</li>
                </NavLink>
              </Link>

              {!user ? (
                <>
                  {" "}
                  <li className=" mx-auto">
                    <button
                      onClick={signin}
                      className="hover:text-black text-white p-2 bg-black  border-black hover:border-2 hover:bg-transparent text-center rounded-full w-28 justify-center flex items-center  transition-colors duration-300 ease-in-out"
                    >
                      Login
                    </button>
                  </li>
                </>
              ) : (
                <>
                  {user && (
                    <>
                      <img
                        id="clickable"
                        className="w-12 h-12 cursor-pointer rounded-full mx-2 border-2 border-[#B7D893]"
                        src={user?.img}
                        alt=""
                        referrerPolicy="no-referrer"
                      />
                    </>
                  )}

                  <Tooltip
                    place="bottom"
                    classNameArrow="none"
                    style={{
                      backgroundColor: "gray",
                      color: "#222",
                      borderRadius: "1%",
                      width: "full",
                    }}
                    className=""
                    anchorSelect="#clickable"
                    clickable
                  >
                    <div className="flex flex-col gap-5 px-4 py-2 box-border  text-white">
                      <div className="flex gap-3 bg-[#B7D893] p-2 rounded-xl">
                        <div>
                          <img
                            src={user.img}
                            className="rounded-full w-16 h-16 border-2 border-black "
                            alt=""
                          />
                        </div>
                        <div>
                          <p>{user.name}</p>
                          <p>{user.email}</p>
                        </div>
                      </div>

                      <button
                        onClick={signout}
                        className="hover:text-black mx-auto text-white p-2 bg-black  hover:border-black border-2 hover:bg-transparent text-center rounded-full w-28 justify-center flex items-center  transition-colors duration-300 ease-in-out"
                      >
                        Logout
                      </button>
                    </div>
                  </Tooltip>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar
