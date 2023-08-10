import React from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'

function Blog({content}) {

    const color = (content)=>{
        if(content.category === "technology") return "bg-red-500"
        else if(content.category === "travel") return "bg-gray-500"
        else if(content.category === "science") return "bg-cyan-500"
        else if(content.category === "art") return "bg-orange-500"
        
        else if(content.category === "other") return "bg-black";


    }


  return (
    <Link to={`/blogs/${content.id}`}>
    <div className="flex flex-col border-2 mt-5 p-4 hover:shadow-2xl transition-shadow duration-150 cursor-pointer rounded-xl ease-in">
        <div className='p-1'>
            <p className={`text-white bg-black w-fit px-2 py-1 ${color(content)}   rounded-full text-xs`}>{content.category}</p>
        </div>
      <div className="p-1 mb-1">
        <h1 className="text-xl font-medium">{content.title}</h1>
      </div>
      <div className="px-2 py-2 mb-1">
        <p className="line-clamp-3">{content.content}</p>
      </div>
      <hr className="border-[#009BA3]" />
      <div className="flex gap-2 p-2 sm:p-1 items-center bottom-0 mt-2">
        <div className="">
          <img src={logo} className="w-10 h-10 sm:w-8 sm:h-8" alt="" />
        </div>
        <div>
          <p className=" text-sm font-medium">{content.author}</p>
          <p className="text-xs">Created on: {content.writtenDate}</p>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default Blog
