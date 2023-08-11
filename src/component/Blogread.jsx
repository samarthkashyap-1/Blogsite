import React, { useEffect, useState } from "react";
import { useParams , Link,useNavigate} from "react-router-dom";
import del from "../assets/delete.svg";
import { db } from "../config/firebase";
import { getDoc,doc,deleteDoc } from "firebase/firestore";
import { auth } from "../config/firebase";
import Prof from "../assets/test.png";


function Blogread() {
  const { id } = useParams();
  const Navigate = useNavigate()
  const Blogref = doc(db,"Glogs",id)
  const [blogtoread,setblogtoread]=useState()

  
  const gettingblog = async ()=>{
    try{
      const data = await getDoc(Blogref)
      const filtereddata = {...data.data(),id: data.id}
      setblogtoread(filtereddata)
      
    }catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{
    gettingblog()
  },[])
  
   const handledel = async (id) => {
    
     
     try {
       const Glogtodel = doc(db, "Glogs", id);
       await deleteDoc(Glogtodel);
       console.log("delete")
      
       Navigate("/blogs")
      

     } catch (err) {
       console.log(err);
     }
   };
  


  const color = (content) => {
    if (content.Category === "Technology") return "bg-red-500";
    else if (content.Category === "Travel") return "bg-gray-500";
    else if (content.Category === "Science") return "bg-cyan-500";
    else if (content.Category === "Art") return "bg-orange-500";
    else if (content.Category === "Others") return "bg-black";
  };


  return (
    <>
      {blogtoread && (
        <>
          <div className="w-3/4 mt-28  p-2 mx-auto">
            <div className="p-2 flex justify-between">
              <p
                className={`text-white bg-black w-fit px-2 sm:text-sm py-1 ${color(
                  blogtoread
                )}   rounded-full text-sm`}
              >
                {blogtoread.Category}
              </p>
              {auth.currentUser.uid == blogtoread.authid && (
                <img onClick={() => handledel(blogtoread.id)} className="cursor-pointer" src={del} alt="" />
              )}
            </div>
            <div className="p-2 flex justify-between flex-col sm:gap-5">
              <h1 className="text-5xl sm:text-3xl text leading-tight  font-semibold">
                {blogtoread.Title}
              </h1>
              <hr className="border-[#009BA3] mt-10 sm:mt-5" />
              <div className="flex gap-2  p-2 sm:p-1 items-center my-2">
                <div className="">
                  <img
                    src={blogtoread.authimg?blogtoread.authimg:Prof}
                    className="w-16 h-14 sm:w-12 sm:h-10 border-4 border-[#B7D893] rounded-full "
                    alt=""
                  />
                </div>
                <div className="flex justify-between mx-2 sm:flex-col sm:mx-0 w-full">
                  <p className=" text-lg font-medium sm:text-sm">
                    {blogtoread.author}
                  </p>
                  <p className="text-medium font-medium sm:text-xs">
                    Published on:{" "}
                    {blogtoread.Publish.toDate().toLocaleDateString()}
                  </p>
                </div>
              </div>
              <hr className="border-[#009BA3]" />
            </div>
            <div className="w-2/3  mt-10 mx-auto my-10 sm:my-5 sm:w-full sm:p-1">
              <p className="text-lg text-justify leading-8 sm:text-base sm:leading-normal">
                {blogtoread.content}
              </p>
            </div>
          </div>
          <div className="w-3/4 mx-auto flex justify-center">
            <Link to="/blogs">
              <button className="px-4 py-2 border-2 my-10 rounded-xl">
                Back To Blog
              </button>
            </Link>
          </div>
        </>
      )}
    </>
  );
}

export default Blogread;
