import React from "react";
import Image from "next/image";
import profilePic from "public/photo.jpg";
import { FaCamera } from "react-icons/fa";

const UpdateView = () => {
  return (
    <>
      <div className="flex flex-col p-6 w:full md:w-4/5 mx-auto mt-10 space-y-4 border-2 border-gray-300 rounded-lg">
        <p className="text-2xl font-bold">Change Info</p>
        <p className="tracking-tight text-gray-600">
          Changes will be reflected to every services
        </p>
        <div className="flex space-x-8">
          {/* <div className="relative"> */}
            <Image
              alt="profile_pic"
              src={profilePic}
              width="75"
              height="75"
              objectFit="cover"
              placeholder="blur"
              className="rounded-lg"
            />
            {/* <div className="absolute object-center">
              <FaCamera className="w-4 h-4" />
            </div> */}
          {/* </div> */}
          <p className="uppercase text-gray-600 my-auto">Change Photo</p>
        </div>
        <label className="text-gray-600">Name</label>
        <input
          className="w-full md:w-4/5 lg:w-1/2 p-4 rounded-lg border border-gray-400 shadow text-sm leading-tight focus:ring-2 focus:ring-gray-700 focus:outline-none transition duration-300"
          placeholder="Enter your name..."
        />
        <label className="text-gray-600">Bio</label>
        <input
          className="w-full md:w-4/5 lg:w-1/2 h-28 p-4 rounded-lg border border-gray-400 shadow text-sm leading-tight focus:ring-2 focus:ring-gray-700 focus:outline-none transition duration-300"
          placeholder="Enter your bio..."
        />
        <label className="text-gray-600">Phone</label>
        <input
          className="w-full md:w-4/5 lg:w-1/2 p-4 rounded-lg border border-gray-400 shadow text-sm leading-tight focus:ring-2 focus:ring-gray-700 focus:outline-none transition duration-300"
          placeholder="Enter your phone..."
        />
        <label className="text-gray-600">Email</label>
        <input
          className="w-full md:w-4/5 lg:w-1/2 p-4 rounded-lg border border-gray-400 shadow text-sm leading-tight focus:ring-2 focus:ring-gray-700 focus:outline-none transition duration-300"
          placeholder="Enter your email..."
        />
        <label className="text-gray-600">Password</label>
        <input
          className="w-full md:w-4/5 lg:w-1/2 p-4 rounded-lg border border-gray-400 shadow text-sm leading-tight focus:ring-2 focus:ring-gray-700 focus:outline-none transition duration-300"
          placeholder="Enter your password..."
        />
        <button className="w-1/3 lg:w-1/4 px-4 py-2 bg-blue-400 hover:bg-blue-500 focus:ring-2 focus:ring-blue-400 text-white rounded-lg transition duration-300">
          Save
        </button>
      </div>
    </>
  );
};

export default UpdateView;
