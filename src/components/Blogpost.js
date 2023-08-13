'use client'
import React from "react";
import { blogpostData } from "./data/blogpostData";
import { useEffect } from "react";
import { useState } from "react";
const Blogpost = () => {
    const[med,setMed]=useState(blogpostData)
    useEffect(()=>{
        const med=blogpostData.slice(0,2)
        setMed(med)
    })
  return (
    <div className="text-black">
      <div className="py-16 px-8 mx-4 flex flex-col items-center justify-center">
        <p className="font-bold text-4xl text-gray-800">Latest Blog Posts</p>
        <p className="font-light text-lg py-6 text-gray-600">
          Completely synergize resource taxing relationships via premier niche
          markets. Professionally cultivate one-to-one customer service with
          robust ideas.
        </p>
      </div>
      <div className=" hidden md:flex md:items-center md:justify-center lg:hidden space-x-4 px-5">
      {med.map((item) => {
        return (
          <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="h-40">
                <img
                  className="object-cover object-bottom"
                  src={item.img}
                  alt="Sunset in the mountains"
                />
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="px-6 py-6">
                <div className="text-xl font-semibold mb-2">{item.title}</div>
                <p className="text-gray-700 text-base">{item.body}</p>
              </div>
            <div className="flex space-x-2 items-center my-3 pl-6">
        <img src={item.userImage} className="w-10  rounded-2xl" />
        <div className="flex flex-col">
          <p>{item.name}</p>
          <p>{item.position}</p>
        </div>
      </div>
            </div>
          </div>
        );
      })}
      </div>
      <div className="flex flex-col md:hidden lg:flex lg:flex-row items-center justify-center space-x-4 item">
      {blogpostData.map((item) => {
        console.log(item.img);
        return (
          <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="h-40">
                <img
                  className="object-cover object-bottom"
                  src={item.img}
                  alt="Sunset in the mountains"
                />
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="px-6 py-6">
                <div className="text-xl font-semibold mb-2">{item.title}</div>
                <p className="text-gray-700 text-base">{item.body}</p>
              </div>
              <div className="flex space-x-2 items-center my-3 pl-6">
        <img src={item.userImage} className="w-10  rounded-2xl" />
        <div className="flex flex-col">
          <p>{item.name}</p>
          <p>{item.position}</p>
        </div>
      </div>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default Blogpost;
