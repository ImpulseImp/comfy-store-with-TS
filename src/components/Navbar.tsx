import { Logo, LinksDropdown, NavLinks, ModeToggle, CartButton } from ".";

const Navbar = () => {
  return (
    <nav className=" bg-muted py-4">
      <div className="align-element flex items-center justify-between">
        <Logo />

        <div className="sm:hidden">
          <LinksDropdown />
        </div>
        <div className="hidden sm:inline-block">
          <NavLinks />
        </div>
        <div className="flex items-center justify-center gap-x-4">
          <ModeToggle />
          <CartButton />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
