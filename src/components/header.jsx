//create a new component. This component should produce some HTML to be a header for a website. theheader should have alogo on the left and a sign-in button on the right. The logo should be a link to the home page. The sign-in button should be a link to the sign-in page.

import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex flex-row items-center justify-between w-full p-4 bg-white shadow-sm">
      <Link to="/">
        <h1 className="text-2xl font-bold text-gray-800">Tiny-Split</h1>
      </Link>
      <div className="flex flex-row items-center justify-between">
        <Link to="/sign-in">
          <button className="px-4 py-2 text-xl font-bold text-white bg-blue-500 rounded-lg focus:outline-none">
            Sign in
          </button>
        </Link>
      </div>
    </div>
  );
}

