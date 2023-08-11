import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { addDoc, collection } from 'firebase/firestore';
import {auth,db} from "../config/firebase"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




function CreateBlog({user}) {
      const notify = (a) => toast.success(a);
      const notifyerr = (a) => toast.error(a);
    const navigate = useNavigate()

    const Blogref =  collection(db,"Glogs")

    useEffect(()=>{
        if(!user){
            navigate("/")
            notifyerr("Please Login")
        } 
    })


    const handlecreate = async (e)=>{
        try
        {

            e.preventDefault();
            const createdblog = {
                Category: e.target.category.value,
                Title: e.target.title.value,
                content: e.target.content.value,
                Publish: new Date(),
                authid: auth.currentUser.uid,
                author: auth.currentUser.displayName,
                authimg: auth.currentUser.photoURL

            }
            
            await addDoc(Blogref,createdblog)
            
            
            
            
            e.target.title.value = "";
            e.target.content.value = "";
            notify("Glog Created")
            navigate("/blogs")

        }catch(err){
            console.log(err)
            notifyerr("Something went wrong")
        }
    }

    
  return (
    <div className="w-3/4 h-screen mx-auto mt-28">
        <ToastContainer position='top-center'/>
      <div>
        <h1 className="text-6xl sm:text-4xl font-bold">Create Glog</h1>
        <div className=" w-2/3  py-3 rounded-2xl px-10 shadow-xl sm:w-full bg-[#B7D893] text-white mx-auto mt-10">
          <form onSubmit={handlecreate}>
            <div className="flex w-full mx-auto  flex-col gap-6 mt-10 items-center justify-center">
              <div className="w-full ">
                <label htmlFor="name" className="text-xl font-medium"></label>

                <select
                  className="p-2 text-base shadow-xl rounded-xl text-black mt-2 w-fit"
                  id="browsers"
                  required
                  name="category"
                  
                
                >
                  <option value="Others" > Select Category </option>
                  <option value="Technology"> Technology </option>
                  <option value="Science">Science</option>
                  <option value="Art">Art</option>
                  <option value="News">News</option>

                  <option value="Politics">Politics</option>
                  <option value="Travels">Travels</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div className="w-full">
                <label htmlFor="email" className="text-xl font-medium"></label>
                <input
                  className="p-3 text-xl sm:text-lg font-medium shadow-xl rounded-xl text-black mt-2 w-full"
                  type="text"
                  placeholder="Title..."
                  name="title"
                  id="email"
                  minLength="3"
                  required
                />
              </div>
              <div className="w-full">
                <label htmlFor="msg" className="text-xl font-medium"></label>
                <textarea
                  className="p-3 text-lg sm:text-base font-medium shadow-xl  rounded-xl text-black mt-2 w-full "
                  name="content"
                  placeholder="Description..."
                  id="msg"
                  cols=""
                  minLength="20"
                  rows="6"
                  required
                ></textarea>
              </div>
              <div>
                <input
                  className=" cursor-pointer border-2 text-lg rounded-xl shadow-xl transition-colors duration-200 ease-in font-medium mt-2 hover:text-black hover:bg-white hover:border-black border-white w-fit mx-auto p-1 px-4"
                  type="submit"
                  value="Publish"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateBlog
