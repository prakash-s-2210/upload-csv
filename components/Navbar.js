import Image from "next/image";

const Navbar = ({ setIsSidebarOpen, isSidebarOpen }) => {
  return (
    <section className=" flex  justify-between items-center sm:py-12 sm:px-[30px] px-5 py-7 sticky top-0 left-0 bg-[#FAFAFB] z-30">
      <div className="flex items-center gap-4">
        <Image
          src="/assets/hamburger.svg"
          alt="hamburger"
          width={16}
          height={12}
          className="md:hidden"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />

        <div className="flex items-center gap-[11px] md:hidden">
          <Image src="/assets/logo.svg" alt="logo" width={26} height={26} />

          <p className="text-heading3-semibold text-text font-nunito">BASE</p>
        </div>

        <p className="text-heading2-semibold font-figtree max-md:hidden">Upload CSV</p>
      </div>

      <div className="flex items-center gap-7">
        <Image
          src="/assets/navbar-notification.svg"
          alt="notification"
          width={18}
          height={23}
        />

        <Image
          src="/assets/user.svg"
          alt="user"
          width={30}
          height={30}
        />
      </div>
    </section>
  );
};

export default Navbar;
