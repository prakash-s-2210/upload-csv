"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

import React from "react";

import { socialLinks } from "@/constants";

const Home = () => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/upload");
  };

  return (
    <main>
      <div className="flex items-center gap-5 px-5 py-7 sm:px-20 sticky top-0 left-0 w-full bg-primary lg:hidden z-20">
        <Image
          src="/assets/sign-in-logo.svg"
          alt="logo"
          width={60}
          height={60}
          className="max-sm:w-[26px] max-sm:h-[26px] "
        />

        <p className="text-heading3-semibold sm:text-[40px] text-light font-bold font-monteserrat">
          BASE
        </p>
      </div>

      <div className="lg:custom-scrollbar flex lg:h-screen lg:overflow-auto">
        <div className="bg-[#F8FAFF] w-1/2 max-lg:hidden">
          <div className="custom-clip-path bg-primary h-screen flex flex-col justify-between p-14">
            <Image
              src="/assets/sign-in-logo.svg"
              alt="logo"
              width={80}
              height={80}
            />

            <p className="relative left-[18%] text-[72px] text-light font-bold font-monteserrat">
              BASE
            </p>

            <div className="flex items-center gap-6 relative left-[15%]">
              {socialLinks.map((img, index) => (
                <Image
                  key={index}
                  src={`/assets/desktop-${img.src}`}
                  alt={img.alt}
                  width={40}
                  height={40}
                  className="w-11 h-11 object-contain"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col lg:justify-center xl:items-center max-sm:px-4 max-sm:pt-7 max-sm:pb-12 py-10 sm:pl-20 sm:pr-10 bg-[#F8FAFF]">
          <div className="lg:max-w-[500px]">
            <h1 className="text-heading2-bold sm:text-heading1-bold">Sign In</h1>
            <p className="mt-[6px] font-lato text-subtle-regular sm:text-base-regular">
              Sign in to your account
            </p>

            <div className="mt-7 flex justify-start flex-wrap gap-x-12 gap-y-6">
              <div className="min-w-max lg:flex-1 flex items-center gap-[10px] px-5 py-2 rounded-xl bg-light ">
                <Image
                  src="/assets/google.svg"
                  alt="google"
                  width={15}
                  height={15}
                  className="max-sm:w-3 max-sm:h-3"
                />

                <p className="text-tiny-regular sm:text-subtle-regular text-secondary-text">
                  Sign in with Google
                </p>
              </div>

              <div className="min-w-max lg:flex-1 flex items-center gap-[10px] px-5 py-2 rounded-xl bg-light ">
                <Image
                  src="/assets/apple.svg"
                  alt="apple"
                  width={15}
                  height={15}
                />

                <p className="text-tiny-regular sm:text-subtle-regular text-secondary-text">
                  Sign in with Apple
                </p>
              </div>
            </div>

            <div className="mt-7 bg-light rounded-[20px] p-8">
              <form className="w-full" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-[10px]">
                  <label
                    htmlFor="email"
                    className="text-base-regular font-lato"
                  >
                    Email address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="px-4 py-[10px] bg-[#F5F5F5] rounded-[10px] focus-within:bg-[#EAEAEA] focus:outline-none text-dark text-base-regular font-lato placeholder:text-secondary-text placeholder:font-lato placeholder:text-base-regular"
                  />
                </div>

                <div className="mt-5 flex flex-col gap-[10px]">
                  <label
                    htmlFor="password"
                    className="text-base-regular font-lato"
                  >
                    Password
                  </label>

                  <input
                    type="password"
                    placeholder="Type your password"
                    required
                    className="px-4 py-[10px] bg-[#F5F5F5] rounded-[10px] focus-within:bg-[#EAEAEA] focus:outline-none text-dark text-base-regular font-lato placeholder:text-secondary-text placeholder:font-lato placeholder:text-base-regular"
                  />
                </div>

                <p className="mt-5 font-lato text-link text-base-regular">
                  Forgot password?
                </p>

                <button
                  type="submit"
                  className="bg-primary w-full mt-5 py-[10px] rounded-[10px] text-light text-base-bold"
                >
                  Sign In
                </button>
              </form>
            </div>

            <p className="mt-5 text-center text-base-regular text-secondary-text">
              Don&#8217;t have an account?{" "}
              <span className="text-link">Register here</span>
            </p>

            <div className="flex justify-center items-center gap-4 mt-10 lg:hidden">
              {socialLinks.map((img, index) => (
                <Image
                  key={index}
                  src={`/assets/mobile-${img.src}`}
                  alt={img.alt}
                  width={7}
                  height={7}
                  className="w-7 h-7 object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
