import React from "react";
import { useLoaderData } from "react-router-dom";

const TaskDetail = () => {
  const taskData = useLoaderData();
  return (
    <>
      <div>TaskDetails</div>
      <hr />
      <div className="py-2">
        <p> ID: {taskData.id}</p>

        <p  className="capitalize"> Title: {taskData.title}</p>

        <p> Status: {taskData.completed ? "Completed" : "Pending"}</p>
      </div>
    </>
  );
};

export default TaskDetail;
