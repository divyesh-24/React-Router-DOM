import {
  Link,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
} from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import About from "./Components/About";
import Help from "./Components/Help";
import Contact from "./Components/Contact";
import FAQ from "./Components/FAQ";
import User from "./Components/User";
import UserTask from "./Components/UserTask";
import TaskDetail from "./Components/TaskDetail";
import Error from "./Components/Error";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<Error />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />}>
          <Route path="faq" element={<FAQ />} />
          <Route
            path="contact"
            element={<Contact />}
            action={async ({ request }) => {
              // console.log(request);
              const data = await request.formData();
              const submission = {
                name: data.get("name"),
                email: data.get("email"),
                message: data.get("message"),
              };
              if (submission.message.length < 10) {
                return { error: "Message Should be over 10 characters" };
              }
              console.log(submission);
              alert(`Thank you ${submission?.name} for Sub`);
              return redirect("/");
            }}
          />
        </Route>
        <Route
          path="/user"
          loader={async () => {
            const res = await fetch(
              "https://jsonplaceholder.typicode.com/users"
            );
            const data = await res.json();
            return data;
          }}
          element={<User />}
        />
        <Route
          path="/user/:id/tasks"
          loader={async ({ params }) => {
            const res = await fetch(
              `https://jsonplaceholder.typicode.com/users/${params?.id}`
            );
            const resTask = await fetch(
              `https://jsonplaceholder.typicode.com/todos?userId=${params?.id}`
            );
            const data = await res.json();
            const dataTask = await resTask.json();
            // console.log(dataTask,"a");
            return { data, dataTask };
          }}
          element={<UserTask />}
        >
          <Route
            path="/user/:id/tasks/:taskId"
            loader={async ({ params }) => {
              const res = await fetch(
                `https://jsonplaceholder.typicode.com/todos/${params?.taskId}`
              );
              const data = await res.json();
              return data;
            }}
            element={<TaskDetail />}
          />
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
