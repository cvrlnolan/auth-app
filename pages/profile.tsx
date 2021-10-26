import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { FaChevronLeft } from "react-icons/fa";
import Navbar from "@/components/layout/navbar";
import ProfileView from "@/components/profile/profileView";
import UpdateView from "@/components/profile/updateView";

const Profile: NextPage = () => {
  const [edit, setEdit] = useState(false);

  const editState = (state: boolean) => {
    setEdit(state);
  };

  return (
    <>
      <Head>
        <title>Authentication App | Profile</title>
      </Head>
      <Navbar>
        {!edit && (
          <>
            <p className="text-center font-bold text-2xl tracking-tight">
              Personal info
            </p>
            <p className="text-center font-thin tracking-tight">
              Basic info, like your name and photo
            </p>
          </>
        )}
        {edit && (
          <div className="flex w-full">
            <button
              className="flex py-2 px-4 mx-auto text-blue-400 hover:text-blue-500 transition duration-300"
              onClick={() => setEdit(false)}
            >
              <FaChevronLeft className="w-4 h-4 my-auto" /> Back
            </button>
          </div>
        )}
        {!edit && <ProfileView getEdit={editState} />}
        {edit && <UpdateView />}
      </Navbar>
    </>
  );
};

export default Profile;
