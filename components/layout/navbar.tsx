import React, { ReactNode, useState } from "react";
import Image from "next/image";
import {
  FaCaretDown,
  FaCaretUp,
  FaUsers,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import Container from "@/components/layout/container";
import DevLogo from "@/components/layout/devLogo";
import profilePic from "public/photo.jpg";

type Props = {
  children?: ReactNode;
};

const Navbar = ({ children }: Props) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Container>
        <nav className="flex flex-wrap w-full justify-between mb-4">
          <div className="relative">
            <DevLogo width={131} height={22} />
          </div>
          <div
            className="space-x-4 inline-flex cursor-pointer"
            onClick={() => setVisible(!visible)}
          >
            <Image
              alt="profile_pic"
              src={profilePic}
              width="50"
              height="50"
              objectFit="cover"
              placeholder="blur"
              className="rounded-xl"
            />
            <p className="tracking-tight my-auto hidden md:flex">User Name</p>
            {visible ? (
              <FaCaretUp className="w-3 h-3 my-auto hidden md:flex" />
            ) : (
              <FaCaretDown className="w-3 h-3 my-auto hidden md:flex" />
            )}
          </div>
        </nav>
        <div
          className={
            visible
              ? "block w-52 h-52 p-4 rounded-lg shadow-lg bg-white absolute right-4 z-10"
              : "hidden"
          }
        >
          <div className="flex w-full justify-center py-3 space-x-2 rounded-lg hover:bg-gray-100 cursor-pointer transition duration-300">
            <FaUserCircle className="w-5 h-5 my-auto" />{" "}
            <p className="my-auto">Profile</p>
          </div>
          <div className="flex w-full justify-center py-3 space-x-2 rounded-lg hover:bg-gray-100 cursor-pointer transition duration-300">
            <FaUsers className="w-5 h-5 my-auto" />{" "}
            <p className="my-auto">Group Chat</p>
          </div>
          <div className="w-full h-0.5 bg-gray-100 rounded-lg my-2"></div>
          <div className="flex w-full justify-center text-red-500 py-3 space-x-2 rounded-lg hover:bg-red-100 cursor-pointer transition duration-300">
            <FaSignOutAlt className="w-5 h-5 my-auto" />{" "}
            <p className="my-auto">Logout</p>
          </div>
        </div>
        {children}
      </Container>
    </>
  );
};

export default Navbar;
