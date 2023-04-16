import { User } from "./components/User";
import { testUser } from "./mock/user";

export function App() {
  return (
    <>
      <User user={testUser} />
      <User user={testUser} />
      <User user={testUser} />
    </>
  );
}
