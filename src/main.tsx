import "sanitize.css";
import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { loadEmployees } from "./modules/LoadModule";
import { EmployeeProfile } from "./pages/EmployeeProfile";
import { Employees } from "./pages/Employees";
import { Layout } from "./pages/Layout";

// initial data load
loadEmployees();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h1>404</h1>,
    children: [
      { index: true, element: <Employees /> },
      { path: "department/:depId", index: true, element: <Employees /> },
    ],
  },
  {
    path: "employee/:employeeId",
    element: <EmployeeProfile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
