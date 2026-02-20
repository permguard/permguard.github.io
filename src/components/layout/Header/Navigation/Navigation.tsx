import { ComponentType, SVGProps } from "react";
import { NavLink } from "./NavLink";
import { LinkLikeNavbarItemProps } from "@theme/NavbarItem";

export interface NavigationSublink {
  name: string;
  external?: boolean;
  href: string;
  description?: string;
  wide?: boolean;
  footerLink?: boolean;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
}

export type INavLink = LinkLikeNavbarItemProps & { docId: string };

type INavigation = INavLink[];

export const NAVIGATION: INavigation = [
  {
    type: "doc",
    docId: "developers/getting-started/developers-intro-to-permguard",
    position: "left",
    label: "Developers",
  },
  {
    type: "doc",
    docId: "command-line/command-line",
    position: "left",
    label: "Command-Line",
  },
  {
    type: "doc",
    docId: "control-plane/control-plane",
    position: "left",
    label: "Control Plane",
  },
  {
    type: "doc",
    docId: "data-plane/data-plane",
    position: "left",
    label: "Data Plane",
  },
  {
    type: "doc",
    docId: "trust-plane/trust-plane",
    position: "left",
    label: "Trust Plane",
  },
  {
    type: "doc",
    docId: "learn/learn",
    position: "left",
    label: "Learn",
  },
];

export const Navigation = () => {
  return (
    <nav role="navigation">
      <ul className="gap-1.25 min-[996px]:gap-1.5 min-[1100px]:gap-3 xl:gap-6 hidden min-[996px]:flex">
        {NAVIGATION.map((el) => (
          <NavLink key={el.docId} {...el} />
        ))}
      </ul>
    </nav>
  );
};
