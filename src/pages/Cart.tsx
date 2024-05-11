import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div>
      <Link to='/' className='text-3xl text-red-400'>
        back home
      </Link>
      <div className='m-12'>
        <Button
          asChild
          size='lg'
          className='bg-yellow-300 text-xl hover:bg-purple-400 mb-4'
        >
          <Link to='/'>home button</Link>
        </Button>
      </div>
    </div>
  );
};
export default Cart;
