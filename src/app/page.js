"use client";

import React, { useCallback, useState } from "react";
import ImageTag from "@/components/Imagetag";
import Logo from "../../public/images/logo.svg";
import Link from "next/link";
import axios from "axios";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const onSubmit = (e) => {
    console.log("kldp");
    axios
      .post(
        `https://account.hubstaff.com/access_tokens?grant_type=${email}&refresh_token=${password}`
      )
      .then((response) => {
        console.log(response, "test");
        alert("success");
      })
      .catch((error) => {
        alert("service error");
        console.log(error, "errr");
      });
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="w-full max-w-md mx-auto">
          <div className="flex items-center justify-center">
            <ImageTag src={Logo} width={300} height={95} alt="logo" />
          </div>
          <div className="mt-6">
            <h3 className="text-black text-20 font-medium">
              Sign in to Hubstaff
            </h3>
          </div>
          <div>
            <div className="mt-6">
              <label className=" text-16 font-medium text-silver block mb-2 leading-6">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                name="emailname"
                value={email}
                onChange={handleEmail}
                className="w-full bg-white rounded outline-0 py-3 px-5 border border-solid border-grayborder text-14 leading-[18px] text-black font-medium focus:border-blue focus:shadow-finput"
              />
            </div>
            <div className="mt-2.5">
              <label className=" text-16 font-medium text-silver block mb-2 leading-6">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your Password"
                value={password}
                onChange={handlePassword}
                className="w-full bg-white rounded outline-0 py-3 px-5 border border-solid border-grayborder text-14 leading-[18px] text-black font-medium focus:border-blue focus:shadow-finput"
              />
            </div>
            <div>
              <Link
                href="#"
                className="text-14 leading-18 font-semibold text-blue mt-4 mb-6 block text-right"
              >
                Forgot password?
              </Link>
            </div>
            <div>
              <button
                onClick={onSubmit}
                className="text-16 leading-6 text-center font-medium capitalize  bg-blue w-full py-2 px-6 rounded transition-all duration-300 ease-in-out delay-0 hover:bg-bluehov"
              >
                Login
              </button>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-black text-14 leading-18 font-medium">
              Dont have an account?
              <Link href="/signup" className="text-blue font-semibold">
                &nbsp;&nbsp;Create your account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
