/* eslint-disable react/no-unescaped-entities */
import React from "react";

const NoItemsMessage = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center h-full">
      <h2 className="text-white font-sans text-6xl p-2">No items found</h2>
      <p className="text-gray-400 p-2 text-lg">Looks like you haven't add any items yet</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-20 w-20 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    </div>
  );
};

export default NoItemsMessage;
