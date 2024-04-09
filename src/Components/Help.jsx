import React from "react";
import {
  Link,
  Navigate,
  Outlet,
  redirect,
  useLocation,
} from "react-router-dom";

const Help = () => {
  const path = useLocation();
  // console.log(path.pathname);
  // if (path.pathname == "/help" && path.pathname == "/help/") {
  //   return redirect("/help/faq");
  // }

  return (
    <div div className="">
      {path.pathname === "/help" && path.pathname === "/help" && (
        <Navigate to="/help/faq" replace={true} />
      )}
      <div className="w-full mx-auto flex my-4 justify-center items-center text-6xl capitalize">
        Help
      </div>
      <div className="w-full flex h-full justify-around py-2 px-4">
        <div className="flex flex-col w-1/5 p-6 gap-2">
          <Link
            to="faq"
            className={`border  px-3 py-2 rounded-md ${
              path.pathname === "/help/faq" ? "border-black" : ""
            }`}
          >
            FAQ
          </Link>
          <Link
            to="contact"
            className={`border px-3 py-2 rounded-md ${
              path.pathname === "/help/contact" ? "border-black" : ""
            }`}
          >
            Contact us
          </Link>
        </div>
        <div className="w-4/5 h-[35rem]   border border-black rounded-md overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Help;
