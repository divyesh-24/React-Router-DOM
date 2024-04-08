import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col gap-5 h-screen justify-center items-center">
      404 Page Not Found{" "}
      <Link className=" px-3 py-2 bg-slate-200 rounded-md" to="/">
        &larr; Back to Dashboard
      </Link>
    </div>
  );
};

export default Error;
