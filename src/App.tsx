import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from './pages/index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/About',
    element: <About />,
  },
]);

function App() {
  return (
    <div className='min-h-screen'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
