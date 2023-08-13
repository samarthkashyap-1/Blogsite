import React from "react";
import { toast } from "react-toastify";
import { auth } from "../config/firebase";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";

function ContactUs() {
  const notifyinfo = (a) => toast.info(a);
  const notify = (a) => toast.success(a);
  const notifyerr = (a) => toast.error(a);

  const handlecontact = async (e) => {
    e.preventDefault();
    if (auth.currentUser) {
      try {
        const data = {
          
          Name: e.target.name.value,
          Email: e.target.email.value,
          Message: e.target.message.value,
        };

        await addDoc(collection(db, "contactusinfo"), data);
        e.target.name.value = "";
        e.target.email.value = "";
        e.target.message.value = "";

        notify("We'll reach you soon");
      } catch (err) {
        notifyerr("Something went wrong!!");
        console.log(err);
      }
    } else notifyinfo("Please Login First!!");
  };



  return (
    <>
      <div className="w-3/4 mx-auto my-20 ">
        <div>
          <h1 className="text-6xl font-bold sm:text-4xl text-center">
            Contact us
          </h1>
        </div>
        <div></div>

        <div className=" w-1/2 py-3 rounded-2xl px-10 shadow-xl sm:w-full bg-[#B7D893] text-white mx-auto mt-10">
          <form onSubmit={handlecontact}>
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
                  defaultValue={auth.currentUser?auth.currentUser.displayName:""}
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
                  defaultValue={auth.currentUser?auth.currentUser.email:""}
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
              <div>
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

export default ContactUs;
