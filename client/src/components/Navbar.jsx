import React from "react";
import { FaHome, FaUserFriends } from "react-icons/fa";
import { MdSettings, MdLogout } from "react-icons/md";

function Navbar() {
  return (
    <div className="sidebar bg-blue-500 h-screen p-6 flex flex-col justify-between w-2/12">
      <div className="app-name">
        <h1 className="font-bold text-2xl">Codefigment</h1>
      </div>
      <div className="sidebar-content flex flex-col gap-4">
        <div className="sidebar-item flex items-center gap-2">
          <FaHome size={20} color="white" />
          <h1>Home</h1>
        </div>
        <div className="sidebar-item flex items-center gap-2">
          <FaUserFriends size={20} color="white" />
          <h1>Friends</h1>
        </div>
        <div className="sidebar-item flex items-center gap-2">
          <MdSettings size={20} color="white" />
          <h1>Settings</h1>
        </div>
      </div>
      <div className="sidebar-profile flex items-center gap-2">
        <img src="" alt="profile-picture" className="w-8 h-8 rounded-full" />
        <h1>Username</h1>
        <MdLogout size={18} color="white" />
      </div>
    </div>
  );
}

export default Navbar;
