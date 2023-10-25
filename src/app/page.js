"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ImageTag from "@/components/Imagetag";
import Logo from "../../public/images/logo.svg";
import Link from "next/link";
import axios from "axios";
import { ROUTE } from "./constants/routeConst";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const router = useRouter();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const saveTokenInLocalStorage = (tokenDetails) => {
    localStorage.setItem("accesstoken", JSON.stringify(tokenDetails));
  };
  const onSubmit = (e) => {
    const emails = "refresh_token";
    const passwords =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImRlZmF1bHQifQ.eyJqdGkiOiJVRktZanI1aSIsImlzcyI6Imh0dHBzOi8vYWNjb3VudC5odWJzdGFmZi5jb20iLCJleHAiOjE3MDU5NDQwOTIsImlhdCI6MTY5ODE2ODA5Miwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCBodWJzdGFmZjpyZWFkIGh1YnN0YWZmOndyaXRlIn0.Ri5Td9f66a7U01ZcZumak14piU15bdv-2J83OS-6t-3ceeMUh6r2qfcFaXbuQWM6nrH-qOv35EHWDqDGC0R2xjoMyKbcFUl2A8vFH7H-jtRHGEuWHuZ0VS_1gx3YPlUw232AnK_LtRBJX34kE6w0PEOX80uFqJHFaVIwaYeK_x35jLUn-7wo3ILcRcYqNDdkjADYRUteZ1Y9SRa4Ob8wETt8nvnIQhFcv6ZVREmyjPkQXRBWrpSJGbFLiAXPC_0ZBj7NKdKBaVwntabpy481cPJ_IZby742IY6UjbcN3IhwJQtHPeHch6PmwdnICi_0cWvkSpiewJzcXHLWrz4E3nQ";
    if (!email) {
      setErrors("Email is Required");
      return;
    } else if (!password) {
      setErrors("Password is Required");
      return;
    } else if (email !== "admin@gmail.com") {
      console.log(email, "tk login");
      setErrors("Please Enter Valid Email");
      return;
    } else if (password !== "admin") {
      setErrors("Please Enter Valid Password");
      return;
    }
    axios
      .post(
        `https://account.hubstaff.com/access_tokens?grant_type=${emails}&refresh_token=${passwords}`
      )
      .then((response) => {
        console.log(response, "test");
        saveTokenInLocalStorage(response.data);
        router.push(ROUTE.DASHBOARD);
      })
      .catch((error) => {
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
            <p className="text-error text-center mt-4 text-14 leading-18">
              {errors}
            </p>
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
