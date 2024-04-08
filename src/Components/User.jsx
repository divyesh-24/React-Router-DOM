import React from "react";
import { Link, Outlet, useLoaderData, useLocation, useParams } from "react-router-dom";



const User = () => {
  
  const Users = useLoaderData();
  const path = useLocation();
  return (
    <div div className="h-full ">
      <div className="w-full mx-auto my-4 flex justify-center items-center text-6xl capitalize">
        Users
      </div>
      {/* <p>Here is help!!</p> */}
      <div className="w-full flex h-full justify-around p-8">
        <div className="flex h-fit p-6 gap-2 flex-wrap justify-between">
          {Users.map((project, i) => (
            <Link
              key={i}
              to={`/user/${project?.id}/tasks`}
              className={`border  px-3 py-2 rounded-md w-1/4 ${
                path.pathname === "/help/faq" ? "border-black" : ""
              }`}
            >
              <div className="px-3 py-3">
                <p>{project.name}</p>
                <p className="text-gray-400">{project?.email}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default User;
