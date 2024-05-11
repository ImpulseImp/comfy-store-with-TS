import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <div>
      <header>header</header>
      <nav>Navbar</nav>
      <Outlet />
    </div>
  );
};
export default HomeLayout;
