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
        <div className="flex flex-col items-center justify-center w-1/2 pl-10">
          <div className="flex flex-col items-center justify-center w-full p-4 bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-center text-gray-800">
              Sign up now!
            </h1>
            <p className="mt-4 text-xl text-center text-gray-600">
              Start managing your budget today!
            </p>
            <div className="flex flex-row items-center justify-center w-full mt-8">
            </div>
            <div className="flex flex-row items-center justify-center w-full mt-4">
              <div className="flex flex-col items-center justify-center w-full p-4 bg-white rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-center text-gray-800">
                  Sign up with email
                </h1>
                <form className="flex flex-col items-center justify-center w-full mt-4">
                  <input
                    className="w-full p-2 px-4 text-xl text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    type="text"
                    placeholder="Name"
                  />
                  <input
                    className="w-full p-2 px-4 mt-4 text-xl text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    type="text"
                    placeholder="Email"
                  />
                  <input
                    className="w-full p-2 px-4 mt-4 text-xl text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    type="password"
                    placeholder="Password"
                  />
                  <input
                    className="w-full p-2 px-4 mt-4 text-xl text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    type="password"
                    placeholder="Confirm password"
                  />
                  <button className="w-full p-2 px-4 mt-4 text-xl font-bold text-white bg-blue-500 rounded-lg focus:outline-none">
                    Sign up
                  </button>
                </form>
              </div>
            </div>
          </div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
