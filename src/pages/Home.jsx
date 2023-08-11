import React,{useState,useLayoutEffect}from 'react'

import LandingTheme from '../component/LandingTheme';
import { Fade } from "react-awesome-reveal";
import WhyGlog from '../component/WhyGlog';
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import ContactUs from '../component/ContactUs';
function Home({signin, user}) {
  
  return (
      <>
      

    <div className="">
      
      <ToastContainer position="top-center" />
      
      <Fade triggerOnce>
        <div className="flex justify-center">
          <LandingTheme signin={signin} user={user} />
        </div>
      </Fade>
      <div className="flex justify-center" id="whyglog">
        <WhyGlog />
      </div>
      <Fade triggerOnce>
        <div id="contactus" className="mt-22">
          <ContactUs />
        </div>
      </Fade>

      <footer className="h-20 bg-black mt-20">
        <div className="">
          <h1 className="text-white text-3xl sm:text-xl text-center">
            Developed by Samarth Kashayp
          </h1>
        </div>
      </footer>
    </div>
      </>
  );
}

export default Home
