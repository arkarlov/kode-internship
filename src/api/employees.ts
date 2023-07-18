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

export interface Employees {
  items: Employee[];
}

export enum Department {
  All = "all",
  Android = "android",
  Ios = "ios",
  Design = "design",
  Management = "management",
  Qa = "qa",
  Back_office = "back_office",
  Frontend = "frontend",
  Hr = "hr",
  Pr = "pr",
  Backend = "backend",
  Support = "support",
  Analytics = "analytics",
}

export const getEmployees = async (dep: Department = Department.All) => {
  const params = new URLSearchParams();
  // use next line to emulate "500" response error
  // params.append("__code", "500");

  params.append("__dynamic", "true");

  if (typeof dep === "string") {
    params.append("__example", dep);
  }

  const { data } = await apiClient.get<Employees>("/users", {
    params,
  });

  return data.items;
};
