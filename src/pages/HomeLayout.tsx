import { Outlet } from "react-router-dom";
import { Header } from "@/components/index";
const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <nav>Navbar</nav>
      <Outlet />
    </div>
  );
};
export default HomeLayout;
