import { Link, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { useState } from 'react';

const Header = () => {
  const [user, setUser] = useState<{ username: string } | null>({
    username: 'demo user',
  });
  // const [user, setUser] = useState<{ username: string } | null>(null);
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <header>
      <div className='align-element flex justify-center sm:justify-end py-2 mr-6'>
        {user ? (
          <Button
            onClick={() => {
              setUser(null);
            }}
            size='lg'
          >
            Logout
          </Button>
        ) : (
          <div className='flex gap-x-2  sm:gap-x-8 items-center'>
            <Link to='/register'>register</Link>
            <Link to='/login'>login</Link>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
