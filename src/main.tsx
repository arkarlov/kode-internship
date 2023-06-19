import "sanitize.css";
import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { ErrorScreen } from "./components/ErrorScreen";
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
    errorElement: (
      <ErrorScreen
        errorType="common"
        onAction={() => <Navigate to="/" replace={true} />}
      />
    ),
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
