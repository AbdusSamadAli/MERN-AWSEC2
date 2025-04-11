import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800">Welcome to Home Page</h1>
      <p className="text-gray-600 mt-2">This is a simple homepage.</p>

      <div className="mt-4 flex space-x-4">
        <Link to="/signup">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Signup
          </button>
        </Link>
        <Link to="/login">
          <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
