import { useParams } from "react-router-dom";

export function EmployeeProfile() {
  const { employeeId } = useParams();

  return <div>{employeeId}</div>;
}
