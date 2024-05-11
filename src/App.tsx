import { Button } from './components/ui/button';
import { increase } from './features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from './hooks';

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

function App() {
  const dispatch = useAppDispatch();

  // const { amount } = useSelector((store) => store.cart);
  const { amount } = useAppSelector((state) => state.cartState);
  return (
    <div className='min-h-screen'>
      <h1 className='text-3xl text-yellow-600'>Hello Impulse</h1>
      <Button
        variant='destructive'
        size='lg'
        onClick={() => dispatch(increase())}
      >
        increase
      </Button>
      <h1 className='text-3xl'>Amount: {amount}</h1>
    </div>
  );
}

export default App;
