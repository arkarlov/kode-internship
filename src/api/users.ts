import { apiClient } from "./client";

export interface IUser {
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

export interface IUsersList {
  items: Array<IUser>;
}

export enum Department {
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
//  -> android
//  -> iOS
//  -> Дизайн
//  -> Менеджмент
//  -> QA
//  -> Бэк-офис
//  -> Frontend
//  -> HR
//  -> PR
//  -> Backend
//  -> Техподдержка
//  -> Аналитика

export const getUsersList = async (dep?: Department) => {
  const query = new URLSearchParams();
  query.append("__dynamic", "true");

  if (typeof dep === "string") {
    query.append("__example", dep);
  }
  const { data } = await apiClient.get<IUsersList>(
    `/users?${query.toString()}`
  );
  return data;
};
