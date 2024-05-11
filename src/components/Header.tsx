import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useState } from "react";

const Header = () => {
  const [user, setUser] = useState<{ username: string } | null>({
    username: "demo user",
  });
  // const [user, setUser] = useState<{ username: string } | null>(null);
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <header>
      <div className="align-element mr-6 flex justify-center py-2 sm:justify-end">
        {user ? (
          <div className="flex items-center gap-x-4 sm:gap-x-8">
            <p>Hello, {user.username}</p>
            <Button
              variant="link"
              onClick={() => {
                setUser(null);
              }}
              size="sm"
            >
              Logout
            </Button>
          </div>
        ) : (
          <div className="flex items-center  gap-x-4 sm:gap-x-8">
            <Button asChild variant="link" size="sm">
              <Link to="/login">Sign in / Guest</Link>
            </Button>

            <Button asChild variant="link" size="sm">
              <Link to="/register">Register</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
