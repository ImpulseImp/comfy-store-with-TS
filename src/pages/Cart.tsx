import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div>
      <Link to='/' className='text-3xl text-red-400'>
        back home
      </Link>
      <Button asChild size='lg'>
        <Link to='/'>home button</Link>
      </Button>
    </div>
  );
};
export default Cart;
