import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <header>
        <h1>Športne aktivnosti</h1>

        <nav>
          <NavLink to="/">Seznam</NavLink>
          {" | "}
          <NavLink to="/activities/new">
            Dodaj aktivnost
          </NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;