import { Outlet } from "react-router-dom";
import NavBAR from "../ui/NavBar/index.jsx";

export default function Layout() {

  return (
    <>
      <div>
        <NavBAR />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}
