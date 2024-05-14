import { Outlet, useNavigation } from "react-router-dom";
import { Navbar, Header, Loading } from "@/components/index";
const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <Header />

      <Navbar />
      <div className="align-element py-20">
        {isPageLoading ? <Loading /> : <Outlet />}
      </div>
    </>
  );
};
export default HomeLayout;
