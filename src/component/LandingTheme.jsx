import React from 'react'
import Lottie from "lottie-react";
import logo from "../assets/ani.json";
import { Link } from 'react-scroll';





  
  function LandingTheme({signin, user}) {
  
    return (
      <>
        <div className="relative w-screen h-screen  mt-4  ">
          <Lottie
            className="sm:opacity-70 scale-90 sm:scale-100"
            style={{ position: "absolute", width: "100%", height: "100%" }}
            animationData={logo}
            loop={true}
          />
          <div className="absolute inset-0 mt-36 sm:mt-28  w-3/4 mx-auto backdrop-opacity-80">
            <h1 className=" text-center text-8xl  font-bold sm:text-5xl  text-black">
              Welcome to Glog
            </h1>
            <h1 className=" text-center text-3xl mt-5  font-bold sm:text-xl text-black">
              Grow with Blog
            </h1>
            <p className="sm:text-justify sm:w-56 mx-auto sm:text-base text-center font-medium sm:mt-7 mt-14 text-2xl">
              At Glog, we believe that every idea has the potential to grow into
              something amazing. Our platform is a nurturing ground for
              bloggers, thinkers, and storytellers to cultivate their passions
              and share them with the world. Whether you're a seasoned writer or
              just starting your blogging journey, Glog is here to provide you
              with a platform to showcase your creativity, insights, and
              expertise.
            </p>

            <div className=" flex justify-center sm:flex-col sm:gap-4 sm:w-fit mx-auto font-bold gap-32 mt-20 sm:mt-10">
              {!user && (
                <>
                  <Link to="whyglog" smooth={true} duration={20}>
                    <button className="w-32 h-12 shadow-xl  px-2 rounded-full border-2 text-white bg-[#B7D893] hover:text-black hover:border-black hover:bg-white  border-white">
                      Why Glog
                    </button>
                  </Link>
                  <button
                    onClick={signin}
                    className="w-32 h-12 px-2 shadow-xl rounded-full border-2 hover:text-white hover:bg-[#B7D893] text-black border-black bg-white hover:border-white"
                  >
                    Get Started
                  </button>{" "}
                </>
              )}
              {user && (
                <button
                  
                  className="w-32 h-12 px-2 rounded-full shadow-xl border-2 hover:text-white hover:bg-[#B7D893] text-black border-black bg-white hover:border-white"
                >
                  Create Blog
                </button>
              )}
            </div>
          </div>
        </div>
      </>
    );
}

export default LandingTheme
