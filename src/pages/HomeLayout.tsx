import { Outlet } from "react-router-dom";
import { Header } from "@/components/index";
import { Navbar } from "@/components/index";
const HomeLayout = () => {
  return (
    <>
      <Header />

      <Navbar />
      <div className="align-element py-20">
        <Outlet />
      </div>
    </>
  );
};
export default HomeLayout;
