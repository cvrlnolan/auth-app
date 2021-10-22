import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <>
      <div className="container mx-auto p-6 w-full">
        {children}
        <div className="flex justify-center space-x-12 my-4 text-gray-500">
          <p>Created by Carl Nolan</p>
          <p>devChallenges.io</p>
        </div>
      </div>
    </>
  );
};

export default Container;
