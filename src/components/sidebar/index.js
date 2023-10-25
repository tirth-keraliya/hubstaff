"use client";

import {
  faArrowLeft,
  faClock,
  faGauge,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import LogoDash from "../../../public/images/logo.svg";
import Logo from "../../../public/images/logoicon.svg";
import ImageTag from "../Imagetag";

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", value: faGauge },
    { title: "Inbox", value: faClock },
    { title: "Accounts", value: faLightbulb, gap: true },
    { title: "Schedule ", value: faLightbulb },
    { title: "Search", value: faLightbulb },
    { title: "Analytics", value: faLightbulb },
    { title: "Files ", value: faLightbulb, gap: true },
    { title: "Setting", value: faLightbulb },
  ];
  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-lowgray h-screen p-5  pt-4 relative duration-300`}
      >
        <div
          className="absolute cursor-pointer -right-3 top-9  text-11 !flex items-center justify-center w-6 h-6 text-black bg-white border border-solid  border-litegray
          rounded-full "
          onClick={() => setOpen(!open)}
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            className={`${!open && "rotate-180"}`}
          />
        </div>

        <div className="flex gap-x-4 items-center">
          <ImageTag
            src={LogoDash}
            className={`cursor-pointer  ${!open && "hidden"} `}
            alt="logo"
            width={130}
            height={28}
          />
          <ImageTag
            src={Logo}
            className={`cursor-pointer  ${open && "hidden"} `}
            alt="logo"
            width={28}
            height={28}
            objectFit="contain"
          />
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
            ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} `}
            >
              {/* <img src={`./src/assets/${Menu.imgs}.png`} /> */}
              <FontAwesomeIcon icon={Menu.value} className="text-charcol" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
