import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { ErrorScreen } from "./components/ErrorScreen";
import { EmployeeProfile } from "./pages/EmployeeProfile";
import { EmployeeList, Employees } from "./pages/Employees";

const routes = [
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
];

const router = createBrowserRouter(routes, {
  basename: import.meta.env.DEV ? "/" : "/kode-internship/",
});

export const App = () => <RouterProvider router={router} />;
