import React from "react";
import { Icon1, Icon2, Icon3, Icon4, Icon5, Icon6 } from "./svg";

const Features = () => {
  return (
    <div className="h-full py-16 flex flex-col items-center justify-center">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-10 md:gap-y-40 lg:gap-y-40">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div>
              <div className="bg-blue-500 max-w-min ml-6  b-2 rounded-3xl p-1">
                <Icon1 className='w-8'/>
              </div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Easier Work Organization</div>
            <p class="text-gray-700 text-base">
              Efficiently unleash cross-media information without cross-media
              value. Quickly timely deliverables for real-time schemas.
            </p>
          </div>
            </div>
        </div>
               <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <div>
            <div className="bg-blue-500 max-w-min ml-6  b-2 rounded-3xl p-1">

                <Icon2 className='w-8'/>
              </div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Fast Connection</div>
            <p class="text-gray-700 text-base">
              Completely pursue scalable customer cross- media through
              potentialities. Holistically quickly installed portals.
            </p>
          </div>
        </div>
        </div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <div>
        <div className="bg-blue-500 max-w-min ml-6  b-2 rounded-3xl p-1">

                <Icon3 className='w-8'/>
              </div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Streamlined Processes</div>
            <p class="text-gray-700 text-base">
              Objectively innovate empowered scalable manufactured products
              whereas parallel platforms predominate extensible.
            </p>
          </div>
        </div>
        </div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <div>
        <div className="bg-blue-500 max-w-min ml-6  b-2 rounded-3xl p-1">

                <Icon4 className='w-8'/>
              </div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Easier Integrations</div>
            <p class="text-gray-700 text-base">
              Completely pursue scalable customer try through potentialities.
              Pontificate portals installed. Efficiently unleash information.
            </p>
          </div>
        </div>
        </div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <div>
        <div className="bg-blue-500 max-w-min ml-6  b-2 rounded-3xl p-1">

                <Icon5 className='w-8'/>
              </div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Marketing Analytics</div>
            <p class="text-gray-700 text-base">
              Phosfluorescently engage worldwide methodologies with web-enabled
              Interactively coordinate.
            </p>
          </div>
        </div>
        </div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <div>
        <div className="bg-blue-500 max-w-min ml-6  b-2 rounded-3xl p-1">

                <Icon6 className='w-8'/>
              </div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Workflow Builder</div>
            <p class="text-gray-700 text-base">
              Collaboratively administrate turnkey service channels whereas
              virtual e-tailers. This is objectively scalable metrics whereas.
            </p>
          </div>
        </div>
        </div>
      </div>
      </div>
  );
};

export default Features;
