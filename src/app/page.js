"use client";
import React, { useEffect, useState } from "react";
import { ROUTE } from "./redux/constansts/routeConst";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./redux/services/authServices";
import Link from "next/link";
import Logo from "../../public/images/logo.svg";
import ImageTag from "./components/Imagetag";
import { setAuthToken } from "./redux/actions/authActions";

export default function Home() {
  const auth = useSelector((state) => state.auth);
  const authErrorMessage = useSelector((state) => state.auth.errorMessage);
  const authLoading = useSelector((state) => state.auth.loading);
  const authTokens = useSelector((state) => state.auth.tokens);
  console.log("authLoading", authLoading);
  console.log("authErrorMessage", authErrorMessage);
  console.log("authTokens", authTokens);
  const validationError = auth;
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("admin");
  const router = useRouter();
  const dispatch = useDispatch();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const renderErrors = () => {
    return (
      <p className="text-error text-center mt-4 text-14 leading-18">
        {validationError}
      </p>
    );
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const loginObj = {
      email: email,
      password: password,
    };

    const result = await dispatch(login(loginObj));
    if (result && result.access_token) {
      router.push(ROUTE.DASHBOARD);
    }
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
            {renderErrors}
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
                className="text-16 leading-6 text-center text-white font-medium capitalize  bg-blue w-full py-2 px-6 rounded transition-all duration-300 ease-in-out delay-0 hover:bg-bluehov"
              >
                Login
              </button>
              <div>{authErrorMessage && <span>{authErrorMessage}</span>}</div>
              <div>{authLoading && <span>{"authLoading"}</span>}</div>
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
