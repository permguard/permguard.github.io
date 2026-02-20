import { INavLink } from "./Navigation";
import NavbarItem from "@theme/NavbarItem";

export const NavLink: React.FC<INavLink> = (props) => {
  return <NavbarItem {...props} />;
};
