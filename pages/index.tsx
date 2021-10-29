import React, { useState, useContext } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Container from "@/components/layout/container";
import Signup from "@/components/auth/signup";
import Login from "@/components/auth/login";
import { useUser } from "@/lib/auth/useUser";

const Home: NextPage = () => {
  const [auth, setAuth] = useState(false);
  const { user, logout } = useUser();

  const getAuthSate = (status: boolean) => {
    setAuth(status);
  };

  if (!user) {
    return <p className="text-center">Loading...</p>;
  }

  if (user) {
    console.log(user);
  }

  return (
    <>
      <Head>
        <title>Authentication App</title>
      </Head>
      <Container>
        {!auth && <Signup getAuth={getAuthSate} />}
        {auth && <Login getAuth={getAuthSate} />}
      </Container>
    </>
  );
};

export default Home;
