import React from "react";
import SideBar from "../components/sidebar";
import Header from "../components/header";

const layout = ({ children }) => {
  return (
    <div>
      <div className="flex">
        <SideBar />
        <div className="w-full">
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
