import React from 'react'
import del from "../assets/delete.svg"
import { Link } from 'react-router-dom'
import {auth } from "../config/firebase"
import Prof from "../assets/test.png"
function Blog({content,handledel}) {
    let date=  content.Publish.toDate();
    date = date.toLocaleDateString();
    

    const color = (content)=>{
        if(content.Category === "Technology") return "bg-red-500"
        else if(content.Category === "Travel") return "bg-gray-500"
        else if(content.Category === "Science") return "bg-cyan-500"
        else if(content.Category === "Art") return "bg-orange-500"
        
        else if(content.Category === "Others") return "bg-black";
    }




  return (
    <div className="flex flex-col border-2 mt-5 p-4 hover:shadow-2xl transition-shadow duration-150 cursor-pointer rounded-xl ease-in">
        <div className="p-1 flex justify-between">
          <p
            className={`text-white bg-black w-fit px-2 py-1 ${color(
              content
            )}   rounded-full text-xs`}
          >
            {content.Category}
          </p>
          {auth.currentUser && auth.currentUser.uid == content.authid && (
            <img onClick={()=>handledel(content.id)} src={del} alt="" />
          )}
        </div>
              <Link to={`/blogs/${content.id}`}>
        <div className="p-1 mb-1">
          <h1 className="text-xl font-medium">{content.Title}</h1>
        </div>
        <div className="px-2 py-2 mb-1">
          <p className="line-clamp-3">{content.content}</p>
        </div>
        <hr className="border-[#009BA3]" />
            </Link>
        <div className="flex gap-2 p-2 sm:p-1 items-center bottom-0 mt-2">
          <div className="">
            <img
              src={content.authimg?content.authimg:Prof}
              className="w-12 h-12 sm:w-10 sm:h-10 rounded-full border-2"
              alt=""
            />
          </div>
          
          <div>
            <p className=" text-sm font-medium">{content.author}</p>
            <p className="text-xs">Published on: {date}</p>
          </div>
        </div>
      </div>
  );
}

export default Blog
