import React from "react";

export default function LandingRoute() {
  return (
    <div>
      {/* Hero + CTA */}
      <div className="flex flex-row items-center my-48">
        <div className="flex flex-col items-center justify-center w-1/2">
          <h1 className="text-6xl font-bold text-center text-gray-800">
            Welcome to <span className="text-blue-500">Tiny-Split</span> 
            <br />
            The small way to handle your <span className="text-blue-500">budget</span>
          </h1>

          <p className="mt-4 text-xl text-center text-gray-600">
            The easiest way to split your budget with your friends and family
          </p>
          </div>   
      </div>

      {/* Features */}

      <div className="flex flex-row items-center justify-center my-48">
        <div className="flex flex-col items-center justify-center w-1/2">
          <h1 className="text-6xl font-bold text-center text-gray-800">
            Features
          </h1>
          <p className="mt-4 text-xl text-center text-gray-600">
            Here are some of the features that we offer
          </p>
        </div>
        </div>



    </div>
  );
}
