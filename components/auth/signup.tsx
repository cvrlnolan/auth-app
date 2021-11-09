import React, { useState } from "react";
import DevLogo from "@/components/layout/devLogo";
import {
  FaGoogle,
  FaFacebookSquare,
  FaTwitter,
  FaGithub,
  FaAt,
  FaKey,
} from "react-icons/fa";
import signup from "@/lib/auth/signup";

type Props = {
  setAuth: Function;
};

const Signup = (props: Props) => {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const signupClick = async () => {
    // console.log(value);
    const success = await signup("emailPassword", {
      email: value.email,
      password: value.password,
    });
    if (success) {
      // console.log("logged in");
      alert("Logged in");
    } else {
      // console.log("Error encountered");
      alert("Error encountered");
    }
  };

  return (
    <>
      <div className="flex flex-col mx-auto rounded-2xl border-2 p-6 w-full md:w-4/5 lg:w-2/5 space-y-4">
        <DevLogo width={131} height={22} />
        <p className="text-center tracking-tight">
          Join thousands of learners from around the world
        </p>
        <p className="text-center font-thin tracking-tight">
          Master web development by making real-life projects. There are
          multiple paths for you to choose.
        </p>
        <label
          htmlFor="email"
          className="relative text-gray-400 focus-within:text-gray-600 block mb-5 transition duration-300"
        >
          <FaAt className="pointer-events-none w-4 h-4 absolute top-1/2 transform -translate-y-1/2 right-3" />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 focus:outline-none transition duration-300"
            placeholder="Email"
            id="email"
            type="email"
            required
            onChange={(e) => {
              setValue((prevState) => ({
                ...prevState,
                email: e.target.value,
              }));
            }}
            value={value.email}
          />
        </label>
        <label
          htmlFor="password"
          className="relative text-gray-400 focus-within:text-gray-600 block mb-5 transition duration-300"
        >
          <FaKey className="pointer-events-none w-4 h-4 absolute top-1/2 transform -translate-y-1/2 right-3" />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 focus:outline-none transition duration-300"
            placeholder="Password"
            id="password"
            type="password"
            required
            onChange={(e) => {
              setValue((prevState) => ({
                ...prevState,
                password: e.target.value,
              }));
            }}
            value={value.password}
          />
        </label>
        <button
          className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-lg transition duration-300 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          onClick={signupClick}
        >
          Start coding now
        </button>
        <p className="text-center font-thin tracking-tight">
          or continue with this social profile:
        </p>
        <div className="flex flex-wrap space-x-2 mx-auto">
          <button
            className="w-12 h-12 rounded-full border border-gray-500 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 hover:bg-gray-200 transition duration-300"
            onClick={() => signup("google")}
          >
            <FaGoogle className="w-4 h-4 mx-auto text-gray-500" />
          </button>
          <button
            className="w-12 h-12 rounded-full border border-gray-500 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 hover:bg-gray-200 transition duration-300"
            onClick={() => signup("facebook")}
          >
            <FaFacebookSquare className="w-4 h-4 mx-auto text-gray-500" />
          </button>
          <button
            className="w-12 h-12 rounded-full border border-gray-500 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 hover:bg-gray-200 transition duration-300"
            onClick={() => signup("twitter")}
          >
            <FaTwitter className="w-4 h-4 mx-auto text-gray-500" />
          </button>
          <button
            className="w-12 h-12 rounded-full border border-gray-500 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 hover:bg-gray-200 transition duration-300"
            onClick={() => signup("github")}
          >
            <FaGithub className="w-4 h-4 mx-auto text-gray-500" />
          </button>
        </div>
        <p className="text-center font-thin tracking-tight">
          Already a member ?{" "}
          <p
            className="inline-flex text-blue-500 cursor-pointer hover:text-blue-700 transition duration-300"
            onClick={() => props.setAuth(true)}
          >
            Login.
          </p>
        </p>
      </div>
    </>
  );
};

export default Signup;
