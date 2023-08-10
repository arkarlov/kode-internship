import { createBrowserRouter, Navigate } from "react-router-dom";

import { ErrorScreen } from "./components/ErrorScreen";
import { EmployeeProfile } from "./pages/EmployeeProfile";
import { EmployeeList, Employees } from "./pages/Employees";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Employees />,
    errorElement: (
      <ErrorScreen
        errorType="common"
        onAction={() => <Navigate to="/" replace={true} />}
      />
    ),
    children: [
      { index: true, element: <EmployeeList /> },
      { path: "department/:depId", index: true, element: <EmployeeList /> },
    ],
  },
  {
    path: "employee/:employeeId",
    element: <EmployeeProfile />,
  },
]);
