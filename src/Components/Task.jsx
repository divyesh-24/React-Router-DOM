import React from "react";
import { Link, Outlet, useLoaderData, useLocation, useParams } from "react-router-dom";

const Task = () => {
  
  const Users = useLoaderData();
  const path = useLocation();
  return (
    <div div className="h-full ">
      <div className="w-full mx-auto flex justify-center items-center text-6xl capitalize">
        Users
      </div>
      <div className="w-full flex h-full justify-around p-8">
        <div className="flex h-fit p-6 gap-2 flex-wrap justify-between">
          {Users.map((project, i) => (
            <Link
              key={i}
              to={`/user/${project?.id}`}
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
      <div className="w-4/5 h-4/5 p-6  border border-black rounded-md">
        <Outlet />
      </div>
    </div>
  );
};

export default Task;
