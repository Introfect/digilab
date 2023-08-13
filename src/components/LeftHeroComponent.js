import React from "react";
import { Logo1, Logo2, Logo3, Logo4 } from "./svg";

const LeftHeroComponent = () => {
  return (
    <div className="flex flex-col justify-between max-h-screen ml-14 ">
      <div>
        <div className="text-6xl font-bold mb-6">
          <p>Your Supercharged </p>
          <span>Design Workflow.</span>
        </div>
        <div className="text-lg font-light text-blue-300 mb-8">
          <p>
            We’ve been told it is not possible to overachieve our customers’{" "}
            <br />
            expectations. We have not reinvented the wheel, we decided to build
            <br /> upon it.
          </p>
        </div>
        <button
          type="button"
          class="text-white w-full bg-blue-700 hover:bg-blue-800 font-medium rounded- text-sm px-5 py-2.5 mr-2 mb-2 md:max-w-max"
        >
          Get Started
        </button>
      </div>
      <div className="flex flex-col justify-end mt-14 ">
        <p>Who supports us</p>
        <div className="flex flex-col md:flex-row w-3/5 ">
      
          <Logo1 />
          <Logo2 />
          <Logo3 />
          <Logo4 />
        </div>
      </div>
    </div>
  );
};

export default LeftHeroComponent;
