import { links } from "@/utils";
import { Link, NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="space-x-8">
      {links.map((link) => {
        return (
          <NavLink
            to={link.href}
            key={link.label}
            className={({ isActive }) => {
              return `w-full capitalize ${isActive ? "text-primary" : ""}`;
            }}
          >
            {link.label}
          </NavLink>
        );
      })}
    </div>
  );
};
export default NavLinks;
