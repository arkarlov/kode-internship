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
  const query = new URLSearchParams();

  query.append("__dynamic", "true");
  query.append("__code", "500");

  if (typeof dep === "string") {
    query.append("__example", dep);
  }

  const { data } = await apiClient.get<Employees>(`/users?${query.toString()}`);

  return data.items;
};
