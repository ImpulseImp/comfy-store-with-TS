import { Link, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { useState } from 'react';

const Header = () => {
  const [user, setUser] = useState<{ username: string } | null>({
    username: 'demo user',
  });
  const handleLogout = () => {};

  return (
    <header>
      <div className='align-element flex justify-center sm:justify-end py-2'></div>
    </header>
  );
};
export default Header;
