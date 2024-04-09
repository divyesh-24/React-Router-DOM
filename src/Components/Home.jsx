import React from "react";

const Home = () => {
  return (
    <div div className="">
      <div className="w-full h-full mx-auto my-8 flex justify-center items-center text-6xl capitalize">
        welcome to React Router DOM
      </div>
      <div className="w-full flex h-full justify-around p-8">
        <div className="flex h-[25rem] p-6 justify-between ">
          <p className="text-lg text-pretty px-4 leading-[2rem] tracking-[0.19rem] indent-44">
            React Router Dom is a powerful routing library for building web
            applications with React. It provides a declarative and efficient way
            to handle navigation, define routes, and render components based on
            the current URL. It is used to build single-page applications, where
            the page does not have to be refreshed when a link to another page
            is clicked, making the user experience better and the app faster. It
            offers various routing components such as Router, Routes, Route,
            Link, and Redirect, which are used to manage routing functionality
            in a React application.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
