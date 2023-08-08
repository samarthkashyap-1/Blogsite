import React,{useEffect, useState}from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactUs() {
    const [contactdata,setcontactdata] = useState()
    const notify = (a) => toast.success(a);
    const notifyerr = (a) => toast.error(a);
   
    const handlecontact = (e)=>{
        e.preventDefault()
        const data = {
            Name:e.target.name.value,
            Email:e.target.email.value,
            Message:e.target.message.value
        }

        setcontactdata(data)
        data?notify("Message Saved"):notifyerr("Something went wrong")
        
        e.target.name.value= ""
        e.target.email.value= ""
        e.target.message.value= ""
    }
    console.log(contactdata)
    

  return (
    <>
      <div className="w-3/4 mx-auto mt-20">
        <div>
          <h1 className="text-6xl font-bold sm:text-4xl text-center">
            Contact us
          </h1>
        </div>
        <div></div>
        

        <div className=" w-1/2 py-3 rounded-2xl px-10 shadow-xl sm:w-full bg-[#B7D893] text-white mx-auto mt-10">
          <form className="" onSubmit={handlecontact}>
            <div className="flex w-full mx-auto  flex-col gap-6 mt-10 items-center justify-center">
              <div className="w-full ">
                <label htmlFor="name" className="text-xl font-medium">
                  Name
                </label>
                <input
                  className="p-2 shadow-xl rounded-xl text-black mt-2 w-full"
                  placeholder="Enter Your Name..."
                  type="text"
                  name="Name"
                  id="name"
                  required
                />
              </div>
              <div className="w-full">
                <label htmlFor="email" className="text-xl font-medium">
                  Email
                </label>
                <input
                  className="p-2 shadow-xl rounded-xl text-black mt-2 w-full"
                  type="email"
                  placeholder="Enter Your Email..."
                  name="Email"
                  id="email"
                  required
                />
              </div>
              <div className="w-full">
                <label htmlFor="msg" className="text-xl font-medium">
                  Message
                </label>
                <textarea
                  className="p-2 shadow-xl  rounded-xl text-black mt-2 w-full "
                  name="message"
                  placeholder="What you want to tell us?"
                  id="msg"
                  cols=""
                  rows="6"
                  required
                ></textarea>
              </div>
              <div className="">
                <input
                  className=" cursor-pointer border-2 text-lg rounded-xl shadow-xl font-medium mt-2 hover:text-black hover:bg-white hover:border-black border-white w-fit mx-auto p-1 px-4"
                  type="submit"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactUs
