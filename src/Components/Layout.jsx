import React from "react";
import { NavLink, Navigate, Outlet, redirect, useLocation } from "react-router-dom";

const Layout = () => {
  const path = useLocation()
  
  // console.log(path.pathname);
  // if (path.pathname == "/help" && path.pathname == "/help/") {
  //   return redirect("/");
  // }
  return (
    <div className="max-w-7xl mx-auto mt-8">
      {path.pathname == "/help" && path.pathname == "/help/" && (
        <Navigate to="/help/faq" replace={true} />
      )}
      <header className=" border-black border flex justify-between px-10 py-5 items-center">
        <h1 className="text-2xl">Dashboard</h1>
        <nav className=" flex flex-row gap-3">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/user">Users</NavLink>
          <NavLink to="/help/faq">Help</NavLink>
        </nav>
      </header>
      <div className="border my-6 border-black h-[80vh]">
        <Outlet />
      </div>
      <footer className="mx-auto w-full text-center">
        made with ❤️ by Divyesh Nandanwar
      </footer>
    </div>
  );
};

export default Layout;
