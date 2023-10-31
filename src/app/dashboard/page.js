"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import SideBar from "../components/sidebar";
import Header from "../components/header";
import { organizationActions } from "../redux/actions/organizationActions";
import { useDispatch, useSelector } from "react-redux";
import Team from "./[team]/team/page";

const Dashboard = () => {
  const dispatch = useDispatch();
  const organization = useSelector((state) => state.organization);
  const users = organization;
  useEffect(() => {
    dispatch(organizationActions());
  }, [dispatch]);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("accesstoken"));
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
          <Header users={users} />
          Dashboard
        </div>
      </div>
    </>
  );
};

export default Dashboard;
