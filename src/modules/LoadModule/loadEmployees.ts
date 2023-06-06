import { parseApiError } from "../../api/client";
import { Department, getEmployees } from "../../api/employees";
import { useEmployeesStore } from "../../store";
import { useAppStore } from "../../store/app";

export async function loadEmployees(depId: Department = Department.All) {
  try {
    useAppStore.setState({ loading: true });
    const data = await getEmployees(depId);
    useEmployeesStore.setState({ employees: data, displayedEmployees: data });
    useAppStore.setState({ error: null });
  } catch (error) {
    const { message } = parseApiError(error);
    console.error(message);
    useAppStore.setState({ error: message });
  } finally {
    useAppStore.setState({ loading: false });
  }
}
