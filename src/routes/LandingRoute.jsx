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
            The small way to handle your{" "}
            <span className="text-blue-500">budget</span>
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
            Here are some of the features that we offer:
          </p>

          <div className="flex flex-row items-center justify-center w-full mt-16">
            <div className="flex flex-col items-center justify-center w-1/3">
              <div className="flex flex-row items-center justify-center w-16 h-16 bg-blue-500 rounded-full">
                <i className="text-3xl text-white fas fa-users"></i>
              </div>
              <h1 className="mt-4 text-2xl font-bold text-center text-gray-800">
                Track your expenses
              </h1>
              <p className="mt-4 text-xl text-center text-gray-600">
                Track your expenses and easily visualize your spending.
              </p>

              <div className="flex flex-row items-center justify-center w-full mt-16">
                <div className="flex flex-col items-center justify-center">
                  <div className="flex flex-row items-center justify-center w-16 h-16 bg-red-500 rounded-full">
                    <i className="text-3xl text-white fas fa-users"></i>
                  </div>
                  <h1 className="mt-4 text-2xl font-bold text-center text-gray-800">
                    Organize your budget
                  </h1>
                  <p className="mt-4 text-xl text-center text-gray-600">
                    Split your budget with your friends and family. It's easy!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
