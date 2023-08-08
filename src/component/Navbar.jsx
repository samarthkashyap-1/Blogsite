import React from 'react'
import { useState,useEffect,useRef } from 'react';
import { Link } from 'react-scroll';


function Navbar({signin,signout,user}) {

    

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
              <a className="sm:mt-5 underline underline-offset-2  mx-auto flex items-center cursor-pointer  transition-colors duration-300 ease-in-out">
                <li className=" mx-auto text-base ">
                  <span className="text-lg">WELCOME! </span>
                  {user?.name ?? "Guest"}
                </li>
              </a>

              <a
                onClick={closeMenu}
                href=""
                className="sm:mt-5 hover:underline underline-offset-2 w-24 mx-auto flex items-center  transition-colors duration-300 ease-in-out"
              >
                <li className=" mx-auto">Home</li>
              </a>
              <a
                onClick={closeMenu}
                href=""
                className="hover:underline underline-offset-2 w-24 mx-auto flex items-center  transition-colors duration-300 ease-in-out"
              >
                <li className=" mx-auto">Blogs</li>
              </a>
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
                onClick={closeMenu} 
                to="contactus"
                className="hover:underline underline-offset-2 w-28 cursor-pointer mx-auto flex items-center  transition-colors duration-300 ease-in-out"
              >

                <li className=" mx-auto">Contact Us</li>
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
                  <li className=" mx-auto">
                    <button
                      onClick={signout}
                      className="hover:text-black text-white p-2 bg-black  border-black hover:border-2 hover:bg-transparent text-center rounded-full w-28 justify-center flex items-center  transition-colors duration-300 ease-in-out"
                    >
                      Logout
                    </button>
                  </li>
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
