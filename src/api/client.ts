import axios, { isAxiosError } from "axios";

export const apiClient = axios.create({
  baseURL:
    "https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464",
  headers: { "Content-Type": "application/json" },
});

export const parseApiError = (error: unknown) => {
  let message = "Unknown network error";

  if (isAxiosError(error)) {
    message = error.message;
  }

  return { message };
};
