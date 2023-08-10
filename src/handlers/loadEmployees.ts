import { parseApiError } from "../api/client";
import { getEmployees } from "../api/employees";
import { Department } from "../constants";
import { useEmployeesStore } from "../store";
import { useAppStore } from "../store/app";
import { getSortedEmployees } from "./getSortedEmployees";

export async function loadEmployees(depId: Department = Department.All) {
  try {
    useAppStore.setState({ loading: true });
    const employees = await getEmployees(depId);
    const displayedEmployees = getSortedEmployees(employees);

    useEmployeesStore.setState({ employees, displayedEmployees });
    useAppStore.setState({ error: null });
  } catch (error) {
    const { message } = parseApiError(error);
    console.error(message);
    useAppStore.setState({ error: message });
  } finally {
    useAppStore.setState({ loading: false });
  }
}
