import React, { useMemo } from "react";
import { useState } from "react";
// import classNames from 'classnames';
import {
  BsBoxArrowLeft,
  BsFillJournalBookmarkFill,
  BsWhatsapp,
  BsTwitter,
  BsFacebook,
} from "react-icons/bs";
import RiTeamFill from "react-icons/";
import { MdOutlineFavoriteBorder, MdQuiz } from "react-icons/md";
import { FaChalkboardTeacher, FaHome, FaCommentDots } from "react-icons/fa";
import { useRouter } from "next/router";
import Link from "next/link";
import { TbLogout } from "react-icons/tb";
import { VscThreeBars, VscChromeClose } from "react-icons/vsc";

const menuItems = [
  { id: 1, label: "Home", icon: FaHome, link: "/" },
  {
    id: 2,
    label: "Favorite",
    icon: MdOutlineFavoriteBorder,
    link: "/favorite",
  },
  { id: 3, label: "Tutorials", icon: FaChalkboardTeacher, link: "/tutorials" },
  { id: 4, label: "Comment", icon: FaCommentDots, link: "/comment" },
  // { id: 5, label: "whatsapp", icon: BsWhatsapp, link: "/" },
  // { id: 6, label: "twitter", icon: BsTwitter, link: "/" },
  // { id: 7, label: "facebook", icon: BsFacebook, link: "/" },
  // { id: 8, label: "authors", icon: RiTeamFill, link: "/" },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const router = useRouter();
  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === router.pathname),
    [router.pathname]
  );

  return (
    <div
      className={`fixed h-screen  mt-auto left-0 text-slate-500 shadow-lg  ${
        sidebarOpen ? "w-48" : "w-20"
      } duration-300`}
    >
      <div
        className="absolute -right-3 bg-white rounded-full border-2 p-1 cursor-pointer hover:scale-110"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <VscChromeClose /> : <VscThreeBars />}
      </div>
      <div className="flex flex-col items-start pl-5 justify-between h-full bg-slate-300">
        <div className="flex items-center w-full space-x-2 cursor-pointer hover:text-[#EACE6A] hover:scale-110 duration-200">
          <span className="text-3xl">
            <BsFillJournalBookmarkFill />
          </span>
          {sidebarOpen && <span className="text-violet-500">BD</span>}
        </div>
        <div className="space-y-5">
          {menuItems.map((menu, id) => (
            <Link href={menu.link}>
              <div className="flex items-center space-x-3 cursor-pointer  hover:text-[#EACE6A] hover:scale-110 duration-200">
                <span className="text-3xl">
                  {React.createElement(menu.icon)}
                </span>
                {sidebarOpen && <span>{menu.label}</span>}
              </div>
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-2 cursor-pointer hover:text-[#EACE6A] hover:scale-110 duration-200">
          <span className="text-3xl">
            <TbLogout />
          </span>
          {sidebarOpen && <span>Logout</span>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
