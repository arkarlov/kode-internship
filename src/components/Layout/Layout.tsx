import { Outlet } from "react-router-dom";

import { NavBar } from "../NavBar";

export function Layout() {
  return (
    <>
      <header>
        <h2>Поиск</h2>
        <div>
          <input type="search" />
        </div>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
