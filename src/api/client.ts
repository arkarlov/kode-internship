import axios from "axios";

export const apiClient = axios.create({
  baseURL:
    "https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464",
  headers: { "Content-Type": "application/json" },
});
