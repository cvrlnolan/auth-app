import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import axios from "axios";
import useSWR from "swr";
import { FaChevronLeft } from "react-icons/fa";
import Navbar from "@/components/layout/navbar";
import { useUser } from "@/lib/auth/useUser";

const DynamicProfileView = dynamic(
  () => import("@/components/profile/profileView"),
  {
    loading: () => <p className="text-center">Loading...</p>,
  }
);

const DynamicUpdateView = dynamic(
  () => import("@/components/profile/updateView"),
  {
    loading: () => <p className="text-center">Loading...</p>,
  }
);

const Profile: NextPage = () => {
  const [edit, setEdit] = useState(false);
  const { user } = useUser();

  const editState = (state: boolean) => {
    setEdit(state);
  };

  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  const { data, error } = useSWR(() => "/api/profile/" + user.id, fetcher);

  if (!user) {
    return (
      <>
        <Head>
          <title>Authentication App | Profile</title>
        </Head>
        <Navbar>
          <p className="text-center">Loading...</p>
        </Navbar>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Head>
          <title>Authentication App | Profile</title>
        </Head>
        <Navbar>
          <p className="text-center">{error.message}</p>
        </Navbar>
      </>
    );
  }

  if (!data) {
    return (
      <>
        <Head>
          <title>Authentication App | Profile</title>
        </Head>
        <Navbar>
          <p className="text-center">Loading...</p>
        </Navbar>
      </>
    );
  }

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
            <button className="back_button" onClick={() => setEdit(false)}>
              <FaChevronLeft className="w-4 h-4 my-auto" /> Back
            </button>
          </div>
        )}
        {!edit && <DynamicProfileView user={data} getEdit={editState} />}
        {edit && <DynamicUpdateView user={data} />}
      </Navbar>
    </>
  );
};

export default Profile;
