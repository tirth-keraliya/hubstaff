"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userlistServices } from "../redux/services/userServices";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.userlist);

  useEffect(() => {
    const storedAccessToken = JSON.parse(localStorage.getItem("auth_data"));
    console.log(storedAccessToken, "authTokens");
    if (storedAccessToken) {
      dispatch(userlistServices(storedAccessToken.access_token));
    }
  }, [dispatch]);
  console.log("userssss", users);
  return (
    <>
      {/* <SideBar /> */}
      <div className="w-full">Dashboard</div>
      {users && (
        <div key={users.id}>
          <p>Name: {users.name}</p>
          <p>Email: {users.email}</p>
          <p>Status: {users.status}</p>
        </div>
      )}
    </>
  );
};

export default Dashboard;
