import React from "react";

const info = [
  {
    id: 1,
    orderList: [
      {
        id: 1,
        title: "Dynamic Routing",
        desc: "Implemented dynamic routing to handle changing routes based on user interaction.",
      },
      {
        id: 2,
        title: "Nested Routing",
        desc: "Created nested routing structures for better organization and management of routes.",
      },
      {
        id: 3,
        title: "Active Link",
        desc: "Displayed active links based on the current route for improved user experience.",
      },
    ],
    para: "To achieve these features, the following components and methods from React Router DOM were utilized:",
  },
  {
    id: 2,
    orderList: [
      {
        id: 1,
        title: "createBrowserRouter()",
        desc: "A router that uses the HTML5 history API to manage browser history.",
      },
      {
        id: 2,
        title: "createRoutesFromElements()",
        desc: "A method that creates routes based on a series of React elements.",
      },
      {
        id: 3,
        title: "<RouterProvider />",
        desc: "A component that provides a router to the React application.",
      },
    ],
    para: "Additionally, the following components and hooks were used for routing and redirection:",
  },
  {
    id: 3,
    orderList: [
      {
        id: 1,
        title: "<Route />",
        desc: "A component that provides the context for routing.",
      },
      {
        id: 2,
        title: "<Link />",
        desc: "A component that creates links between routes.",
      },
      {
        id: 3,
        title: "<Navlinks />",
        desc: "A component that displays a list of links for navigation.",
      },
      {
        id: 4,
        title: "redirect()",
        desc: "A function that redirects the user to a different route.",
      },
      {
        id: 5,
        title: "<Navigate />",
        desc: "A component that programmatically navigates the user to a different route.",
      },
    ],
    para: "To fetch and send data, the following data API components and hooks were used:",
  },
  {
    id: 4,
    orderList: [
      {
        id: 1,
        title: "loader",
        desc: "A function that fetches data before rendering a route.",
      },
      {
        id: 2,
        title: "action",
        desc: "A function that handles form submissions and other actions.",
      },
      {
        id: 3,
        title: "useLoaderData()",
        desc: "A hook that retrieves data fetched by a loader function.",
      },
      {
        id: 4,
        title: "useActionData()",
        desc: "A hook that retrieves data returned by an action function.",
      },
    ],
    para: "Finally, an errorElement was added to handle any default error pages that may occur during routing.",
  },
];

const About = () => {
  return (
    <div div className="">
      <div className="w-full mx-auto my-4 flex justify-center items-center text-6xl capitalize">
        About
      </div>
      <div className="w-full flex h-full justify-around px-8">
        <div className="flex w-5/6 h-[35rem] p-6 gap-2 flex-wrap justify-between overflow-auto border rounded-md border-black ">
          <p className="">
            This project is centered on utilizing{" "}
            <span className="text-red-900 text-xl">React Router DOM</span>{" "}
            <span className="px-2 py-0.5 rounded-md bg-gray-200">v6.22.3</span>{" "}
            for client-side routing, with a focus on the following features:
          </p>
          {info.map((information, i) => (
            <div key={i}>
              <ol className="list-decimal list-inside">
                {information.orderList.map((li,i) => (
                  <li key={i}>
                    <span className="font-bold">{li?.title}:</span>{" "}
                    {li?.desc}
                  </li>
                ))}
              </ol>
              <p className="pt-6">{information?.para}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
