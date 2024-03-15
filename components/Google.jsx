"use client";
import React from "react";
import { signIn } from "next-auth/react";
const GoogleButton = ({ children }) => {
  return (
    <button
      onClick={() => signIn("google")}
      className="font-medium text-[#4595d0] text-[14px] hover:underline"
    >
      Click Here
    </button>
  );
};

export default GoogleButton;
