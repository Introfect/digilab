import React from "react";
import { Icon1 } from "./svg";
import Learnmore from "./Learnmore";

const Rec = () => {
  return (
    <div className="flex flex-col space-y-10 items-center justify-center p-4">
      <div className="flex items-start justify-start">
        <div className=" bg-blue-500  max-w-min mt-1">
          <Icon1 className="w-10" />
        </div>
        <div className="flex flex-col space-y-2 pl-4 xl:max-w-lg">
          <p className="text-2xl font-bold">Explore ideas together</p>
          <p className=" font-light text-l">
            Engage audience segments and finally create actionable insights.
            Amplify vertical integration.
          </p>
          <Learnmore />
        </div>
      </div>
      <div className="flex items-start justify-start">
        <div className=" bg-blue-500 max-w-min mt-1">
          <Icon1 className="w-10" />
        </div>
        <div className="flex flex-col space-y-2 pl-4 xl:max-w-lg">
          <p className="text-2xl font-bold">Explore ideas together</p>
          <p className=" font-light text-l">
            Engage audience segments and finally create actionable insights.
            Amplify vertical integration.
          </p>
          <Learnmore />
        </div>
      </div>
      <div className="flex items-start justify-start">
        <div className=" bg-blue-500  max-w-min mt-1">
          <Icon1 className="w-10" />
        </div>
        <div className="flex flex-col space-y-2 pl-4 xl:max-w-lg">
          <p className="text-2xl font-bold">Explore ideas together</p>
          <p className=" font-light text-l">
            Engage audience segments and finally create actionable insights.
            Amplify vertical integration.
          </p>
          <Learnmore />
        </div>
      </div>
    </div>
  );
};

export default Rec;
