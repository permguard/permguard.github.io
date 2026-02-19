import Link from "@docusaurus/Link";
import { SectionDescription } from "@site/src/components/shared/SectionDescription";

export const HeroSection = () => {
  return (
    <section className="relative py-16 sm:pt-[95px] sm:pb-30">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="flex flex-col items-start w-full lg:w-1/2">
          <h1
            className="ml-auto mr-auto sm:ml-0 sm:mb-6  z-20 flex gap-3 mb-6 max-w-87.5 xl:text-[56px] font-medium leading-[1.2] tracking-[2.3px] bg-gradient-to-b from-white to-[#999] bg-clip-text text-transparent
                     lg:text-[46px]
                     sm:text-[42px]
                     text-[28px] sm:tracking-[1px] sm:mx-auto sm:text-center"
          >
            Permguard
            <span
              className="rounded-[16px] bg-gradient-to-b from-[#f05c80] to-[#cc34df] text-white px-4 py-1 rotate-[3deg] lg:text-[48px]
                     sm:text-[40px]
                     text-[24px] sm:rounded-[12px]"
            >
              DOCS
            </span>
          </h1>

          <SectionDescription
            className="sm:pr-4 xl:pr-0 lg:max-w-[605px] mb-4 sm:mb-8 !tracking-tight"
            text="Authorization, reimagined. Authority continuity and policy-as-code in one open-source engine, for humans, AI agents, and every workload in between. Zero-trust by construction, not configuration."
          />

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="/"
              className="rounded-full bg-[#cc34df] text-white text-lg font-medium py-2.5 px-6 text-center hover:bg-[#9c28a7]"
            >
              Get Started
            </Link>
            <a
              href="https://github.com/permguard/permguard"
              target="_blank"
              className="rounded-full z-10 bg-[#323337] text-white text-lg font-medium py-2.5 px-6 text-center hover:bg-[#2a2b2e]"
            >
              View on Github
            </a>
          </div>
        </div>

        <div className="z-0 w-full lg:w-1/2">
          <img
            src="/images/home/hero.svg"
            className="hidden lg:block ml-[10%] xl:ml-[4%]  scale-[1.8] max-w-full w-[615px]"
            alt="Permguard Docs"
          />
          <img
            src="/images/home/hero_mobile.svg"
            className="block lg:hidden max-w-[500px] w-full mt-[58px] scale-[1.8] mx-auto"
            alt="Permguard Docs"
          />
        </div>
      </div>
    </section>
  );
};
