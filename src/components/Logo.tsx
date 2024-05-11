import { Link } from "react-router-dom";
import { Armchair } from "lucide-react";

const Logo = () => {
  return (
    <Link
      to="/"
      className="hidden items-center justify-center rounded-xl bg-primary p-2 text-white lg:flex"
    >
      <Armchair className="h-8 w-8" />
    </Link>
  );
};
export default Logo;
