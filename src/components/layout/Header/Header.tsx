import Link from "@docusaurus/Link";
import { SocialLinks } from "./SocialLinks";
import { MobileMenu } from "./MobileMenu";
import { classNames } from "@site/src/utils/classNames";
import { Navigation } from "./Navigation/Navigation";

export const Header = () => {
  return (
    <header
      className={classNames(
        "sticky top-0 z-50 flex flex-none flex-wrap items-center justify-between px-6 py-[16px] lg:py-[15px] transition sm:px-10 md:px-[70px] shadow-none",
      )}
    >
      <div
        className={classNames(
          "absolute top-0 left-[calc((100%-100vw)/2)] -z-10 h-20 w-screen shadow-slate-900/5 bg-[rgba(255,255,255,0.02)] backdrop-blur-sm",
        )}
      />

      {/* Logo */}
      <Link href="/" className="z-[500] items-center flex justify-center">
        <img
          className="w-[170px]! h-[45px]! z-150"
          src="/images/header_logo.svg"
          alt="Permguard Enterprise"
        />
      </Link>

      <Navigation />

      <MobileMenu />

      <div className="relative hidden basis-0 items-center justify-end gap-6 md:gap-5 lg:gap-6 min-[980px]:flex">
        <SocialLinks />
      </div>
    </header>
  );
};
