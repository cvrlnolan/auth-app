import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Container from "@/components/layout/container";
import Signup from "@/components/auth/signup";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Authentication App</title>
      </Head>
      <Container>
        <Signup />
      </Container>
    </>
  );
};

export default Home;
