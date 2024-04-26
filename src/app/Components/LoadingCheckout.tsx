"use client";
import MoonLoader from "react-spinners/MoonLoader";
/* eslint-disable react/no-unescaped-entities */
import React from "react";

const NoItemsMessage = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <MoonLoader color="#ff8c00" cssOverride={{}} loading size={200} />
      <h1 className=" pt-10 text-5xl">Loading...</h1>
    </div>
  );
};

export default NoItemsMessage;
