import React, { useEffect, useState } from "react";
import { useParams , Link,useNavigate} from "react-router-dom";
import del from "../assets/delete.svg";
import { db } from "../config/firebase";
import { getDoc,doc,deleteDoc } from "firebase/firestore";
import { auth } from "../config/firebase";
import Prof from "../assets/test.png";
import edit from "../assets/edit.svg";
import loader from "../assets/loader.json";
import Lottie from "lottie-react";


function Blogread() {
  const { id } = useParams();
  const Navigate = useNavigate()
  const Blogref = doc(db,"Glogs",id)
  const [blogtoread,setblogtoread]=useState()
  const [load,setload]=useState(false)

  
  const gettingblog = async ()=>{
    setload(true)
    try{
      const data = await getDoc(Blogref)
      const filtereddata = {...data.data(),id: data.id}
      setblogtoread(filtereddata)
      setload(false);
      
    }catch(err){
      setload(false);
      Navigate("/glogs")
      console.log(err)
    }
  }
  useEffect(()=>{
    gettingblog()
  },[])
  
   const handledel = async (id) => {
    setload(true);
     
     try {
       const Glogtodel = doc(db, "Glogs", id);
       await deleteDoc(Glogtodel);
       console.log("delete")
      
      setload(false);
      Navigate("/glogs")
      
    } catch (err) {
      setload(false);
      Navigate("/glogs")
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
      {blogtoread && !load && (
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

              <div className="flex gap-4">
                {auth.currentUser &&
                  auth.currentUser.uid == blogtoread.authid && (
                    <img
                      onClick={() => handledel(blogtoread.id)}
                      className="cursor-pointer"
                      src={del}
                      alt=""
                    />
                  )}
                <Link to={`/glogs/updateglog/${blogtoread.id}`}>
                  {auth.currentUser &&
                    auth.currentUser.uid == blogtoread.authid && (
                      <img className="scale-75" src={edit} alt="" />
                    )}
                </Link>
              </div>
            </div>
            <div className="p-2 flex justify-between flex-col sm:gap-5">
              <h1 className="text-5xl sm:text-3xl text leading-tight  font-semibold">
                {blogtoread.Title}
              </h1>
              <hr className="border-[#009BA3] mt-10 sm:mt-5" />
              <div className="flex gap-2  p-2 sm:p-1 items-center my-2">
                <div className="">
                  <img
                    src={blogtoread.authimg ? blogtoread.authimg : Prof}
                    className="w-16 h-14 sm:w-12 sm:h-10 border-2 border-[#B7D893] rounded-full "
                    alt=""
                  />
                </div>
                <div className="flex justify-between items-center mx-2 gap-2 sm:flex-col sm:mx-0 w-full">
                  <p className=" text-lg font-medium sm:text-base">
                    {blogtoread.author}
                  </p>
                  <div className="flex flex-col">
                    {blogtoread.UpdatedOn && (
                      <p className="text-medium font-medium sm:text-xs sm:font-normal">
                        Last Updated on:{" "}
                        {blogtoread.UpdatedOn.toDate().toLocaleDateString()}
                      </p>
                    )}

                    <p className="text-medium font-medium sm:text-xs sm:font-normal">
                      Published on:{" "}
                      {blogtoread.Publish.toDate().toLocaleDateString()}
                    </p>
                  </div>
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
            <Link to="/glogs">
              <button className="px-4 py-2 border-2 my-10 rounded-xl">
                Back To Blog
              </button>
            </Link>
          </div>
        </>
      )}
      {load && (
        <>
          <div className="h-screen mt-80">
            <Lottie animationData={loader} className="h-14 w-14 m-auto" />
          </div>
        </>
      )}
    </>
  );
}

export default Blogread;
