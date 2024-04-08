import React from "react";
import { Form, useActionData } from "react-router-dom";

const Contact = () => {
  const data = useActionData();
  // console.log(data);
  return (
    <>
      <h1 className="text-lg">Contact Us</h1>
      <div className="mt-10 w-full h-4/5 my-0 mx-auto p-4 box-border rounded-lg">
        <Form method="post" action="/help/contact" className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="name">
              Name
            </label>
            <input
              className="w-full rounded-lg  border-gray-200 p-3 text-sm border focus:outline-dashed focus:outline-black "
              placeholder="Name"
              type="text"
              id="name"
              name="name"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm border focus:outline-dashed focus:outline-black "
              placeholder="Email address"
              type="email"
              id="email"
              name="email"
            />
          </div>

          <div>
            <label className="sr-only" htmlFor="message">
              Message
            </label>

            <textarea
              className="w-full rounded-lg border-gray-200 p-3 text-sm border focus:outline-dashed focus:outline-black "
              placeholder="Message"
              rows="8"
              id="message"
              name="message"
            ></textarea>
            {data?.error && <p className="text-red-400">*{data?.error}</p>}
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
            >
              Submit
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Contact;
