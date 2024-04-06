import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="max-w-7xl mx-auto mt-8">
      <header className=" border-black border flex justify-between px-10 py-3 items-center">
        <h1 className="text-2xl">Dashboard</h1>
        <nav className=" flex flex-row gap-3">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/project">Projects</NavLink>
          <NavLink to="/help">Help</NavLink>
        </nav>
      </header>
      <div className="border my-6 border-black h-[80vh]">
        <Outlet />
      </div>
      <footer className="mx-auto w-full text-center">made with ❤️ by Divyesh Nandanwar</footer>
    </div>
  );
};

export default Layout;
