import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Department, getUsersList, IUser } from "../../api/users";
import { UsersList } from "../../components/UsersList";

export function Employees() {
  const { depId } = useParams();
  const [employees, setEmployees] = useState<IUser[]>([]);

  useEffect(() => {
    async function getEmployees() {
      const data = await getUsersList(depId as Department);
      setEmployees(data);
    }

    getEmployees();
  }, [depId]);

  return <UsersList users={employees} />;
}
