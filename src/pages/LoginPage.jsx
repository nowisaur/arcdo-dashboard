import React from "react";

const LoginPage = () => {
  return (
    <div className="h-screen bg-gradient-to-br from-purple-800 to-purple-600 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Login to Account</h2>
        <p className="text-center text-gray-600 mb-6">Please enter your email and password to continue</p>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email address:</label>
            <input
              type="email"
              placeholder="sample@gmail.com"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password:</label>
            <input
              type="password"
              placeholder="********"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center text-sm">
              <input type="checkbox" className="mr-2" />
              Remember Password
            </label>
            <a href="#" className="text-sm text-blue-500 hover:underline">Forget Password?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-700 text-white py-2 rounded-md hover:bg-purple-800"
          >
            Sign In
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account? <a href="#" className="text-blue-500 hover:underline">Create Account</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
