import { Outlet } from "react-router-dom";
import { Header } from "@/components/index";
const HomeLayout = () => {
  return (
    <>
      <Header />

      <nav>Navbar</nav>
      <div className="align-element py-20">
        <Outlet />
      </div>
    </>
  );
};
export default HomeLayout;
