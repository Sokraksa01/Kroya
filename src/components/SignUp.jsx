import React from 'react';
import Google from "../../assets/Google.png";

function App() {
  return (
    <div className="min-h-screen bg-red-800 flex items-center justify-center">
      <div className="bg-amber-50 p-8 rounded-xl shadow-md w-96">
        <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#722626]"
          />
          <input
            type="email"
            placeholder="Email/phone number"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#722626]"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#722626]"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-2 text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <button
          className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-md py-2 hover:bg-gray-100"
        >
          <img
            src={Google} // Use the imported image here
            alt="Google"
            className="w-5 h-5"
          />
          <span className="text-gray-700 font-medium">Sign Up with Google</span>
        </button>
      </div>
    </div>
  );
}

export default App;
