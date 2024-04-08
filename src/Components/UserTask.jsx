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
  // console.log(user, "ada");
  return (
    <>
      <div className="w-full mx-auto my-4 flex justify-center items-center text-6xl capitalize">
        User Tasks
      </div>
      <div className="w-full flex h-5/6 justify-around py-4 px-4">
        <div className="flex flex-col w-1/5 p-4 gap-2">
          <p className="px-4 py-1 font-bold">User Detail</p>
          <p className={`border px-3 py-2 rounded-md `}>{user.data?.name}</p>
          <p className={`border px-3 py-2 rounded-md `}>{user.data?.username}</p>
          <p to="contact" className={`border h-fit px-3 py-2 rounded-md `}>
            {user.data?.email}
          </p>
        </div>
        <div className="w-4/5 h-full p-6 flex gap-4 border relative border-black rounded-md overflow-auto ">
          <div className=" w-1/5 flex h-fit px-4 gap-2 flex-col justify-between rounded-md">
            {user.dataTask?.map((project, i) => (
              <Link
                key={i}
                to={`/user/${project?.userId}/tasks/${project.id}`}
                className={`border   rounded-md w-full ${
                  path.pathname ===
                  `/user/${project?.userId}/tasks/${project.id}`
                    ? "border-black bg-gray-200"
                    : ""
                }`}
              >
                <div className="px-1.5 py-1.5">
                  <p>Task No: {i + 1}</p>
                  <p className="text-gray-400">{project?.email}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="w-4/5 h-full p-6 sticky top-0 right-0 border border-black rounded-md">
            {!taskid.taskId ? (
              <div className="flex h-full justify-center items-center">
                Select any task
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
