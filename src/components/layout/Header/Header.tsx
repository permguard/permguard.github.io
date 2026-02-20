import Link from "@docusaurus/Link";
import { SocialLinks } from "./SocialLinks";
import { MobileMenu } from "./MobileMenu";
import { classNames } from "@site/src/utils/classNames";
import { Navigation } from "./Navigation/Navigation";
import NavbarSearch from "@site/src/theme/Navbar/Search";
import SearchBar from "@theme/SearchBar";
import NavbarItem from "@theme/NavbarItem";

interface IHeaderProps {
  mobileSidebarToggle?: React.ReactNode;
}

export const Header: React.FC<IHeaderProps> = ({ mobileSidebarToggle }) => {
  return (
    <header
      className={classNames(
        "sticky w-full max-w-360 mx-auto top-0 z-50 flex flex-none flex-wrap items-center justify-between px-6 py-4 min-[996px]:py-3.75 transition sm:px-10 md:px-6 xl:px-17.5 shadow-none",
      )}
    >
      <div
        className={classNames(
          "absolute top-0 left-[calc((100%-100vw)/2)] -z-10 h-20 w-screen shadow-slate-900/5 bg-[rgba(255,255,255,0.02)] backdrop-blur-sm",
        )}
      />

      {/* Logo */}
      <Link href="/" className="z-50 items-center flex justify-center">
        <img
          className="w-42.5! h-11.25! z-150"
          src="/images/header_logo.svg"
          alt="Permguard Enterprise"
        />
      </Link>

      <Navigation />

      <div className="flex min-[996px]:hidden gap-3 items-center">
        <div className="w-8 h-8 relative flex justify-center items-center">
          <SearchBar />
        </div>
        {mobileSidebarToggle ?? <MobileMenu />}
      </div>

      <div className="relative [&>a]:text-white [&>a]:hover:text-fuchsia-500! hidden basis-0 items-center justify-end gap-6 md:gap-5 min-[996px]:gap-4 xl:gap-6 min-[996px]:flex">
        <NavbarSearch>
          <SearchBar />
        </NavbarSearch>

        <NavbarItem
          items={[]}
          dropdownItemsBefore={[]}
          dropdownItemsAfter={[]}
          position="right"
          type="docsVersionDropdown"
        />
        <SocialLinks />
      </div>
    </header>
  );
};
