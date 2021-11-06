import React, { useState, useContext } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import Container from "@/components/layout/container";
import { useUser } from "@/lib/auth/useUser";

const DynamicSignup = dynamic(() => import("@/components/auth/signup"), {
  loading: () => <p className="text-center">Loading...</p>,
});
const DynamicLogin = dynamic(() => import("@/components/auth/login"), {
  loading: () => <p className="text-center">Loading...</p>,
});

const Home: NextPage = () => {
  const [auth, setAuth] = useState(false);
  const { user, logout } = useUser();

  const getAuthSate = (status: boolean) => {
    setAuth(status);
  };

  if (!user) {
    return (
      <>
        <Head>
          <title>Authentication App</title>
        </Head>
        <Container>
          {!auth && <DynamicSignup setAuth={getAuthSate} />}
          {auth && <DynamicLogin setAuth={getAuthSate} />}
        </Container>
      </>
    );
  }

  if (user) {
    console.log(user);
  }

  return (
    <>
      <Head>
        <title>Authentication App</title>
      </Head>
    </>
  );
};

export default Home;
