"use client";

import React, { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import {
  faBell,
  faChevronRight,
  faGift,
  faLink,
  faMessage,
  faStopwatch,
  faTableCells,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu } from "@headlessui/react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { organizationActions } from "@/app/redux/actions/organizationActions";

const Header = () => {
  const dispatch = useDispatch();
  const organization = useSelector((state) => state.organization);
  const users = organization;
  console.log("users", users);
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
  const router = useRouter();
  const handleClick = (id) => {
    router.push(`/dashboard/${id}/team`);
  };
  return (
    <div className="w-full">
      <header className="w-full bg-white  border-solid border-b border-litegray py-2.5 px-3.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center border border-solid border-bordergray rounded-[20px] py-1 px-1.5 cursor-pointer">
            <FontAwesomeIcon icon={faStopwatch} className="text-16 text-gray" />
            <span className="block text-sky text-14 leading-5 mx-2">
              0:00:00
            </span>
            <FontAwesomeIcon icon={faLink} className="text-sky text-10" />
          </div>
          <div className="flex items-center gap-6">
            <FontAwesomeIcon icon={faMessage} className="text-16 text-gray" />
            <FontAwesomeIcon icon={faBell} className="text-16 text-gray" />
            <FontAwesomeIcon icon={faGift} className="text-16 text-gray" />
            <FontAwesomeIcon
              icon={faTableCells}
              className="text-16 text-gray"
            />
            <div className="w-6 h-6 bg-sky rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faUser} className="text-12 text-white" />
            </div>
            <div>
              <Menu as="div" className="relative inline-block text-left z-50">
                <Menu.Button className="w-6 h-6 bg-blue text-12 font-medium text-white rounded-full">
                  W
                </Menu.Button>
                <Menu.Items className="absolute py-1 right-0 mt-2 w-52 origin-top-right rounded-md bg-white shadow-cardbox focus:outline-none">
                  {users?.users?.organizations?.map((user, index) => {
                    return (
                      <Menu.Item key={index}>
                        <div
                          className="px-1 pb-1 cursor-pointer "
                          onClick={() => handleClick(user.id)}
                        >
                          <div className="px-3.5 py-2 rounded hover:bg-pophov flex items-center ">
                            <div className="w-6 h-6 mr-1 bg-sky text-white rounded-full flex items-center justify-center text-14 uppercase">
                              {user.name.charAt(0)}
                            </div>
                            <p className="text-14 leading-5 text-black capitalize">
                              {user.name}
                            </p>
                          </div>
                        </div>
                      </Menu.Item>
                    );
                  })}
                  <Menu.Item>
                    <Link
                      href="#"
                      className="text-sky text-14 leading-5 flex items-center hover:text-skyhover pt-3.5 px-[18px] pb-2 border-t border-solid border-bordergray "
                    >
                      Organizations menu
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="text-12 leading-4 ml-2"
                      />
                    </Link>
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
