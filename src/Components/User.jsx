import React from "react";
import { Link, Outlet, useLoaderData, useLocation, useParams } from "react-router-dom";



const User = () => {
  
  const Users = useLoaderData();
  const path = useLocation();
  return (
    <div div className="">
      <div className="w-full mx-auto my-4 flex justify-center items-center text-6xl capitalize">
        Users
      </div>
      <div className="w-full flex h-full justify-around px-8 py-2">
        <div className="flex gap-6 flex-wrap justify-between w-full h-[39.5rem] p-10  border border-black rounded-md overflow-y-auto">
          {Users.map((project, i) => (
            <Link
              key={i}
              to={`/user/${project?.id}/tasks`}
              className={`border  px-3 py-2 rounded-md w-1/4 hover:border-dashed hover:border-black active:border-solid`}
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
