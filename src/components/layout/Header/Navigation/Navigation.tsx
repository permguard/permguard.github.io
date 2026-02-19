import VERSIONS from "@site/versions.json";
import { ComponentType, SVGProps } from "react";
import { NavLink } from "./NavLink";

export interface NavigationSublink {
  name: string;
  external?: boolean;
  href: string;
  description?: string;
  wide?: boolean;
  footerLink?: boolean;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
}

export interface INavLink {
  name: string;
  href?: string;
  sublinks?: NavigationSublink[];
  external?: boolean;
}

type INavigation = INavLink[];

export const NAVIGATION: INavigation = [
  {
    name: "Developers",
    href: "/developers/developers-intro-to-permguard",
  },
  {
    name: "Command-Line",
    href: "/command-line",
  },
  {
    name: "Control Plane",
    href: "/control-plane",
  },
  {
    name: "Data Plane",
    href: "/data-plane",
  },
  {
    name: "Trust Plane",
    href: "/trust-plane",
  },
  {
    name: "Learn",
    href: "/learn",
  },
];

export const Navigation = () => {
  return (
    <nav role="navigation">
      <ul className="gap-3 lg:gap-3 xl:gap-8 hidden min-[980px]:flex">
        {NAVIGATION.map((el) => (
          <NavLink key={el.name} {...el} />
        ))}
      </ul>
    </nav>
  );
};
