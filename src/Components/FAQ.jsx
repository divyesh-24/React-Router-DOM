import React from "react";

const FAQ = () => {
  const questions = [
    {
      id: 1,
      que: "What is React Router Dom?",
      ans: "React Router Dom is a library used for routing in React applications. It is a package that contains the DOM bindings for React Router, which is the core package for the router. React Router Dom provides the router components for websites, and it facilitates component-based routing according to the needs of the app and platform.",
    },
    {
      id: 2,
      que: "How to install React Router Dom?",
      ans: "React Router Dom is a library used for routing in React applications. It is a package that contains the DOM bindings for React Router, which is the core package for the router. React Router Dom provides the router components for websites, and it facilitates component-based routing according to the needs of the app and platform.",
    },
    {
      id: 3,
      que: "What are the benefits of using React Router Dom?",
      ans: "React Router Dom provides several benefits, including declarative routing, dynamic routing, code splitting, history management, and server-side rendering. It provides a declarative way to define routing in your application using JSX syntax, supports dynamic routing that allows you to define routes with parameters that can change based on user input or application state, and supports code splitting that allows you to split your application into smaller chunks that are loaded on demand.",
    },
    {
      id: 4,
      que: "How to use React Router Dom to handle routing in web apps?",
      ans: "React Router Dom includes three main packages: react-router, react-router-dom, and react-router-native. React Router is the core package for the router, react-router-dom contains the DOM bindings for React Router, and react-router-native contains the React Native bindings for React Router. To handle routing in web apps, you can use the <Route> component provided by react-router-dom, which enables you to implement dynamic routing in a web app.",
    },
    {
      id: 5,
      que: "Can we use React Router Dom in React Native?",
      ans: "No, React Router Dom is only available on the browser, so you can only use it for web applications. If you're writing a React application that will run in a web browser, React Router Dom is the most appropriate choice. However, if you're writing a React Native app, you would use the react-router-native package instead.",
    },
  ];
  return (
    <>
      <h1 className="text-lg">FAQs</h1>
      <div className="space-y-4 overflow-auto">
        {questions.map((ques) => (
          <details
            key={ques.id}
            className="group [&_summary::-webkit-details-marker]:hidden"
            open
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
              <h2 className="font-medium">{ques.que}</h2>

              <svg
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <p className="mt-4 px-4 leading-relaxed text-gray-700">
              {ques.ans}
            </p>
          </details>
        ))}
      </div>
    </>
  );
};

export default FAQ;
