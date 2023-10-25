"use client";

import Header from "@/components/header";
import SideBar from "@/components/sidebar";
import axios from "axios";
import React, { useEffect } from "react";

const Dashboard = () => {
  const token = JSON.parse(localStorage.getItem("accesstoken"));

  console.log(token, "tokenttt");
  useEffect(() => {
    axios
      .get("https://api.hubstaff.com/v2/organizations", {
        headers: {
          Authorization: `Bearer ${token.access_token}`,
        },
      })
      .then((response) => {
        console.log(response);
      });
  });

  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="w-full">
          <Header />
          Dashboard
        </div>
      </div>
    </>
  );
};

export default Dashboard;
