import { classNames } from "@site/src/utils/classNames";
import { useState, useCallback } from "react";
import { SocialLinks } from "./SocialLinks";
import Portal from "@site/src/components/shared/Portal";
import { NAVIGATION } from "./Navigation/Navigation";
import { useHistory, useLocation } from "@docusaurus/router";
import NavbarItem from "@theme/NavbarItem";

export const MobileMenu = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const location = useLocation();
  const history = useHistory();

  const toggleMenu = useCallback(() => {
    setIsMenuOpened((oldState) => !oldState);
  }, []);

  return (
    <>
      <button
        onClick={toggleMenu}
        aria-label="Menu"
        className="flex flex-col gap-1 z-50 cursor-pointer"
      >
        <div className={"w-5 h-0.5 bg-white transition"} />
        <div className={"w-5 h-0.5 bg-white transition"} />
        <div className={"w-5 h-0.5 bg-white transition"} />
      </button>

      {/* Menu opened */}
      <Portal>
        <div
          onClick={toggleMenu}
          className={classNames(
            "flex lg:hidden fixed left-0 right-0 top-0 bottom-0 overflow-hidden bg-[rgba(23,24,28,0.5)] backdrop-blur-sm z-100",
            isMenuOpened ? "opacity-100 visible" : "opacity-0 invisible",
          )}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="ml-auto relative flex flex-col w-[50%] min-w-[min(315px,100%)] bg-[#17181C] border-l border-[#343a40]"
          >
            <div className="px-4 pr-6 py-5 border-b border-[#343a40] flex justify-between">
              <h1 className="text-[20px] leading-[30px] font-bold">
                permguard
              </h1>
              <button
                className="z-10"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="#94a3b8"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M18 6 6 18"></path>
                  <path d="M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            {isMenuOpened && (
              <div className="flex flex-col p-4 h-full">
                <div className="space-y-2 py-6 pl-2">
                  {NAVIGATION.map((el) => {
                    return <NavbarItem {...el} />;
                  })}
                </div>

                <div className="flex gap-6 justify-center items-center p-6 pb-2 mt-auto">
                  <SocialLinks disabledHover />
                </div>
              </div>
            )}
          </div>
        </div>
      </Portal>
    </>
  );
};
