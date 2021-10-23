import React from "react";
import DevLogo from "@/components/layout/devLogo";
import {
  FaGoogle,
  FaFacebookSquare,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const Login = () => {
  return (
    <>
      <div className="flex flex-col mx-auto rounded-2xl border-2 p-6 w-full md:w-4/5 lg:w-2/5 space-y-4">
        <DevLogo width={131} height={22} />
        <p className="text-center tracking-tight">Login</p>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-300"
          placeholder="Email"
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-300"
          placeholder="Password"
        />
        <button className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-lg transition duration-300 focus:ring-2 focus:ring-blue-400">
          Login
        </button>
        <p className="text-center font-thin tracking-tight">
          or continue with this social profile:
        </p>
        <div className="flex flex-wrap space-x-2 mx-auto">
          <button className="w-12 h-12 rounded-full border border-gray-500 focus:ring-2 focus:ring-gray-500 hover:bg-gray-200 transition duration-300">
            <FaGoogle className="w-4 h-4 mx-auto text-gray-500" />
          </button>
          <button className="w-12 h-12 rounded-full border border-gray-500 focus:ring-2 focus:ring-gray-500 hover:bg-gray-200 transition duration-300">
            <FaFacebookSquare className="w-4 h-4 mx-auto text-gray-500" />
          </button>
          <button className="w-12 h-12 rounded-full border border-gray-500 focus:ring-2 focus:ring-gray-500 hover:bg-gray-200 transition duration-300">
            <FaTwitter className="w-4 h-4 mx-auto text-gray-500" />
          </button>
          <button className="w-12 h-12 rounded-full border border-gray-500 focus:ring-2 focus:ring-gray-500 hover:bg-gray-200 transition duration-300">
            <FaGithub className="w-4 h-4 mx-auto text-gray-500" />
          </button>
        </div>
        <p className="text-center font-thin tracking-tight">
          Don`&apos;`t have an account yet ?{" "}
          <p className="inline-flex text-blue-500 cursor-pointer hover:text-blue-700 transition duration-300">
            Register.
          </p>
        </p>
      </div>
    </>
  );
};

export default Login;
