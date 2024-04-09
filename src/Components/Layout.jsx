import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const path = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Users", to: "/user" },
  { name: "help", to: "/help" },
];
const Layout = () => {
  return (
    <div className="max-w-7xl mx-auto h-screen pt-8">
      <header className=" border-black border flex justify-between px-10 py-5 items-center rounded-md">
        <Link to="/" className="text-2xl ">
          Dashboard
        </Link>
        <nav className=" flex flex-row gap-5">
          {path.map((nav, i) => (
            <NavLink
              key={i}
              to={nav.to}
              className={({ isActive, isPending }) =>
                isPending
                  ? "px-3 py-1 border rounded-md border-black"
                  : isActive
                  ? "px-3 py-1 border rounded-md border-black"
                  : "px-3 py-1 border rounded-md hover:border-dashed "
              }
            >
              {nav.name}
            </NavLink>
          ))}
        </nav>
      </header>
      <div className="border mb-6 mt-8 border-black h-4/5 rounded-md">
        <Outlet />
      </div>
      <footer className="mx-auto w-full text-center p-4">
        made with ❤️ by Divyesh Nandanwar
      </footer>
    </div>
  );
};

export default Layout;
