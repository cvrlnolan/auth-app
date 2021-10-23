import React from "react";
import Image from "next/image";
import profilePic from "public/photo.jpg";

const ProfileView = () => {
  return (
    <>
      <div className="table border-2 border-gray-300 rounded-lg p-4 w:full md:w-4/5 mx-auto mt-10">
        <div className="table-row-group">
          <div className="table-row">
            <div className="flex justify-between p-4">
              <div>
                <p className="font-bold tracking-tight">Profile</p>
                <p className="font-thin tracking-tight">
                  Some info may be visible to other people
                </p>
              </div>
              <button className="py-1 px-4 w-24 h-10 rounded-xl border-2 border-gray-300 hover:bg-gray-100 transition duration-300">
                Edit
              </button>
            </div>
          </div>
          <div className="table-row w-full">
            <div className="grid grid-cols-2 p-4">
              <div className="table-cell my-auto">
                <p className="uppercase text-gray-400">Photo</p>
              </div>
              <div className="table-cell">
                <Image
                  alt="profile_pic"
                  src={profilePic}
                  width="100"
                  height="100"
                  objectFit="cover"
                  placeholder="blur"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="table-row">
            <div className="grid grid-cols-2 p-4">
              <div className="table-cell my-auto">
                <p className="uppercase text-gray-400">Name</p>
              </div>
              <div className="table-cell">
                <p>Carl Nolan</p>
              </div>
            </div>
          </div>
          <div className="table-row">
            <div className="grid grid-cols-2 p-4">
              <div className="table-cell my-auto">
                <p className="uppercase text-gray-400">Bio</p>
              </div>
              <div className="table-cell">
                <p className="truncate">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt ipsum eius perspiciatis! Facilis, cum architecto
                  aliquid illum cupiditate, omnis at nulla voluptatem nesciunt
                  vero ut dolorem, eos inventore repellendus alias.
                </p>
              </div>
            </div>
          </div>
          <div className="table-row">
            <div className="grid grid-cols-2 p-4">
              <div className="table-cell my-auto">
                <p className="uppercase text-gray-400">Phone</p>
              </div>
              <div className="table-cell">
                <p>+237696740298</p>
              </div>
            </div>
          </div>
          <div className="table-row">
            <div className="grid grid-cols-2 p-4">
              <div className="table-cell my-auto">
                <p className="uppercase text-gray-400">Email</p>
              </div>
              <div className="table-cell">
                <p className="truncate">georgecvrl0@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="table-row">
            <div className="grid grid-cols-2 p-4">
              <div className="table-cell my-auto">
                <p className="uppercase text-gray-400">Password</p>
              </div>
              <div className="table-cell">
                <p>*********</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileView;
