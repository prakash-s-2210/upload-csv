import Image from "next/image";

import { sideNavbarLinks } from "@/constants";

const LeftSidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <section className={`custom-scrollbar h-screen overflow-auto max-md:absolute max-md:z-40 max-md:bg-white transition-all duration-500 max-md:w-full ${isSidebarOpen ? "max-md:left-0" : "max-md:left-[-100%]"}`}>
      <div className="flex items-center gap-[11px] sm:gap-4 sm:pl-14 sm:pr-12 sm:py-12 pt-[34px] pb-[52px] px-5 sticky top-0 left-0 bg-light z-20">
        <Image
          src="/assets/logo.svg"
          alt="logo"
          width={42}
          height={42}
          className="w-[26px] h-[26px] sm:w-[42px] sm:h-[42px]"
        />

        <p className="sm:text-heading2-semibold text-heading3-semibold text-text font-nunito">
          BASE
        </p>

        <Image
          src="/assets/close-dark.svg"
          alt="close"
          width={40}
          height={40}
          className="absolute right-10 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      </div>

      <div className="flex flex-col gap-10">
        {sideNavbarLinks.map((link, index) => (
          <div key={index} className="px-8 flex items-center sm:gap-4 gap-[14px]">
            <Image
              src={link.src}
              alt={link.alt}
              width={24}
              height={24}
            />

            <p className={`text-base-semibold  text-text opacity-50 font-nunito ${link.alt === "chart" && "text-primary"}`}>
              {link.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeftSidebar;
