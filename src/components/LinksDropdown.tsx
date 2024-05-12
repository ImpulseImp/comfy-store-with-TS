import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignLeft } from "lucide-react";
import { links } from "@/utils";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";

const LinksDropdown = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon" variant="outline">
            <AlignLeft />
            {/* <span>Toogle Links</span> */}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent sideOffset={20} align="start">
          {links.map((link) => {
            return (
              <DropdownMenuItem key={link.label}>
                <NavLink
                  className={({ isActive }) => {
                    return `w-full capitalize ${isActive ? "text-primary" : ""}`;
                  }}
                  to={link.href}
                >
                  {link.label}
                </NavLink>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
export default LinksDropdown;
