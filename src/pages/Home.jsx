import React,{useState,useLayoutEffect}from 'react'
import Navbar from '../component/Navbar'
import LandingTheme from '../component/LandingTheme';
import { Fade } from "react-awesome-reveal";
import WhyGlog from '../component/WhyGlog';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { auth, GoogleProvider } from "../config/firebase";

import { signInWithPopup, signOut } from "firebase/auth";
import ContactUs from '../component/ContactUs';
function Home() {
   const notify = (a) => toast.success(a);
   const notifyerr = (a) => toast.error(a);
  const [curr,setcurr] = useState()
  
  useLayoutEffect(() => {
    if (localStorage.getItem("user")) {
      
      setcurr(JSON.parse(localStorage.getItem("user")));
     
    }
  }, []);

   const signinwithgoogle = async () => {
  try{
       await signInWithPopup(auth, GoogleProvider);
     const data = {uid:auth.currentUser.uid,
      email : auth.currentUser.email,
    name:auth.currentUser.displayName,
    img:auth.currentUser.photoURL}
     setcurr(data)
     localStorage.setItem("user",JSON.stringify(data))
     notify(`Welcome!! ${data.name} `)
    }catch(err){
      console.log(err)
      notifyerr("There is an error while logging In")
    }
  };
  const signout = async () => {
    try{
      await signOut(auth);
      setcurr()
      localStorage.clear()
      notify("Successfully Logged Out");
    }catch (err){
       notifyerr("There is an error while logging Out")
      console.log(err)

     }
   };
  return (
      <>
      

    <div className="">
      
      <ToastContainer position="top-center" />
      <header className="fixed z-40 top-0 w-screen">
        <Navbar signin={signinwithgoogle} signout={signout} user={curr} />
      </header>
      <Fade triggerOnce>
        <div className="flex justify-center">
          <LandingTheme signin={signinwithgoogle} user={curr} />
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
