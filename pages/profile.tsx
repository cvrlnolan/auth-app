import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "@/components/layout/navbar";
import ProfileView from "@/components/profile/profileView";
import UpdateView from "@/components/profile/updateView";

const Profile: NextPage = () => {
  return (
    <>
      <Head>
        <title>Authentication App | Profile</title>
      </Head>
      <Navbar>
        <p className="text-center font-bold text-2xl tracking-tight">
          Personal info
        </p>
        <p className="text-center font-thin tracking-tight">
          Basic info, like your name and photo
        </p>
        {/* <ProfileView /> */}
        <UpdateView />
      </Navbar>
    </>
  );
};

export default Profile;
