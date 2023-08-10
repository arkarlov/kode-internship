import { Department } from "../constants";
import { apiClient } from "./client";

export interface Employee {
  id: string;
  avatarUrl: string;
  firstName: string;
  lastName: string;
  userTag: string;
  department: string;
  position: string;
  birthday: string;
  phone: string;
}

export interface EmployeesResponse {
  items: Employee[];
}

export const getEmployees = async (dep: Department = Department.All) => {
  const params = new URLSearchParams();
  // use next line to emulate "500" response error
  if (Math.random() > 0.8) {
    params.append("__code", "500");
  }

  params.append("__dynamic", "true");

  if (typeof dep === "string") {
    params.append("__example", dep);
  }

  const { data } = await apiClient.get<EmployeesResponse>("/users", {
    params,
  });

  return data.items;
};
