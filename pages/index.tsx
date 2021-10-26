import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Container from "@/components/layout/container";
import Signup from "@/components/auth/signup";
import Login from "@/components/auth/login";

const Home: NextPage = () => {
  const [auth, setAuth] = useState(false);

  const getAuthSate = (status: boolean) => {
    setAuth(status);
  };

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
