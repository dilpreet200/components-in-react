import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import ClassFAQs from "./components/classFAQs/ClassFAQs";
import FunctionFAQs from "./components/functionFAQs/FunctionFAQs";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
  },
  {
    path: "/classFAQs",
    element: <ClassFAQs />,
  },
  {
    path: "/functionFAQs",
    element: <FunctionFAQs />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
