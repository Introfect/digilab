import React from "react";
import { Company } from "./svg";
import Avatar from "../../public/Avatar.png";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="text-black py-16 px-6 flex flex-col items-left md:items-center justify-center">
      <div className="md:hidden flex flex-col items-center justify-center mx-6 space-y-6">
        <p  className='font-bold text-3xl text-gray-800'>What Our Customers Say</p>
        <p className='font-light text-lg text-gray-600 items-center'>
          Organically grow the holistic world view of disruptive innovation via
          workplace diversity and empowerment. Bring to the table win-win
          strategies to ensure domination.
        </p>
      </div>
      <Company className="w-40 mt-4 ml-3" />
      <div>
        <p className="text-2xl py-2 md:py-8 px-2 mx-2 max-w-5xl">
          Thank you for making it painless, pleasant and most of all hassle
          free! I love LookScout. I can't say enough about LookScout. Great job,
          I will definitely be ordering again!
        </p>
      </div>
      <div className="flex space-x-2 items-center my-3">
        <Image src={Avatar} className="w-12" />
        <div className="flex flex-col">
          <p>Lisa Smith</p>
          <p>CEO Company</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
