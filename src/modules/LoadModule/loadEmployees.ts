import { Department, getEmployees } from "../../api/employees";
import { useEmployeesStore } from "../../store";

export async function loadEmployees(depId: Department = Department.All) {
  try {
    const data = await getEmployees(depId);
    useEmployeesStore.setState({ employees: data, displayedEmployees: data });
  } catch (error) {
    console.log(error);
  }
}
