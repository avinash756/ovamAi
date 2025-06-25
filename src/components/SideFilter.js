import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaPager,
  FaCircleQuestion,
  FaPuzzlePiece,
  FaGraduationCap,
  FaFolderClosed,
} from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { IoIosGift } from "react-icons/io";
import { BiLayer } from "react-icons/bi";
import { FaCreditCard } from "react-icons/fa6";

import Dropdown from "./DropDown";

const SideFilter = () => {
  const { pathname } = useLocation();

  const linkClass = (path: string) =>
    `flex gap-2 items-center px-2 py-1 rounded hover:bg-gray-100 ${
      pathname === path ? "text-blue-600 font-medium" : "text-grey-700"
    }`;

  return (
    <aside className="w-64 bg-white border-r px-4 py-6 space-y-6">
      <div className="font-semibold text-sm text-gray-700">vishalraina340</div>

      <nav className="flex flex-col gap-2 text-sm mt-6">
        <Link to="/repositories" className={linkClass("/repositories")}>
          <FaFolderClosed size={16} />
          Repositories
        </Link>

        <Link to="/" className={linkClass("/")}>
          <MdDashboard size={16} />
          Dashboard
        </Link>

        <Link to="/integrations" className={linkClass("/integrations")}>
          <FaPuzzlePiece size={16} />
          Integrations
        </Link>

        <Link to="/reports" className={linkClass("/reports")}>
          <BiLayer size={16} />
          Reports
        </Link>

        <Link to="/learnings" className={linkClass("/learnings")}>
          <FaGraduationCap />
          Learnings
        </Link>

        <Dropdown />

        <Link to="/subscription" className={linkClass("/subscription")}>
        <FaCreditCard size={16}/>
          Subscription
        </Link>

        <Link to="/refer" className={linkClass("/refer")}>
          <IoIosGift size={16} />
          Refer and Earn
        </Link>

        <Link to="/docs" className={linkClass("/docs")}>
          <FaPager size={16} />
          Docs
        </Link>

        <Link to="/support" className={linkClass("/support")}>
          <FaCircleQuestion size={16} />
          Support
        </Link>
      </nav>
    </aside>
  );
};

export default SideFilter;
