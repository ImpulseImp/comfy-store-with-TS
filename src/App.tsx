import { useDispatch, useSelector } from 'react-redux';
import { Button } from './components/ui/button';
import { increase } from './features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from './hooks';
function App() {
  const dispatch = useAppDispatch();

  // const { amount } = useSelector((store) => store.cart);
  const { amount } = useAppSelector((state) => state.cart);
  return (
    <>
      <h1 className='text-3xl text-yellow-600'>Hello Impulse</h1>
      <Button
        variant='destructive'
        size='lg'
        onClick={() => dispatch(increase())}
      >
        increase
      </Button>
      <h1 className='text-3xl'>Amount: {amount}</h1>
    </>
  );
}

export default App;
