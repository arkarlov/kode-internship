import { create } from "zustand";

import { Employee } from "../api/employees";

interface EmployeesStore {
  employees: Employee[];
  setEmployees: (v: Employee[]) => void;
  displayedEmployees: Employee[];
  setDisplayedEmployees: (v: Employee[]) => void;
}

export const useEmployeesStore = create<EmployeesStore>((set) => ({
  employees: [],
  setEmployees: (v) => set({ employees: v }),
  displayedEmployees: [],
  setDisplayedEmployees: (v) => set({ displayedEmployees: v }),
}));
