import React from "react";
import {
  Link,
  Outlet,
  useLoaderData,
  useLocation,
  useParams,
} from "react-router-dom";

const UserTask = () => {
  const taskid = useParams();
  console.log(taskid);
  const path = useLocation();
  const user = useLoaderData();
  return (
    <>
      <div className="w-full mx-auto my-4 flex justify-center items-center text-6xl capitalize relative">
        User Tasks
        <Link
          to="/user"
          className="px-3 py-2 border w-fit rounded-full cursor-pointer absolute left-8 top-2 text-2xl hover:border-black hover:border-dashed active:border-solid"
        >
          &larr;
        </Link>
      </div>
      <div className="w-full flex h-5/6 justify-around py-4 px-4">
        {/* User Details */}
        <div className="flex flex-col w-1/5 p-4 gap-2">
          <p className="px-4 py-1 font-bold">User Detail</p>
          <p className={`border-b px-3 py-2 `}>Username: {user.data?.username}</p>
          <p className={`border-b px-3 py-2 `}>Name: {user.data?.name}</p>
          <p to="contact" className={`border-b h-fit px-3 py-2  `}>
            Email: {user.data?.email}
          </p>
        </div>
        {/* Task Details */}
        <div className="w-4/5 h-full p-6 flex gap-5 border border-black rounded-md ">
          <div className=" w-1/5 flex h-full px-4 gap-2 flex-col justify-between rounded-md overflow-auto">
            {user.dataTask?.map((project, i) => (
              <Link
                key={i}
                to={`/user/${project?.userId}/tasks/${project.id}`}
                className={`border   rounded-md w-full  ${
                  path.pathname ===
                  `/user/${project?.userId}/tasks/${project.id}`
                    ? "border-black hover:border-solid"
                    : " hover:border-black hover:border-dashed"
                }`}
              >
                <div className="px-1.5 py-1.5">
                  <p>Task No: {i + 1}</p>
                  <p className="text-gray-400">{project?.email}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="w-4/5 h-full p-6  border  rounded-md">
            {!taskid.taskId ? (
              <div className="flex h-full justify-center items-center capitalize">
                Select any ask
              </div>
            ) : (
              <Outlet />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserTask;
