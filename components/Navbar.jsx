import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { useTheme } from "next-themes";

import { BiSun, BiMoon } from "react-icons/bi";

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <BiSun
          className="w-7 h-7 "
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <BiMoon
          classNames="w-7 h-7"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };
  const { status } = useSession();
  console.log(status);

  return (
    <nav>
      <div className="py-0 top-0 z-50 bg-white">
        <div className="flex items-center justify-between bg-white dark:bg-regal-blue h-16  ">
          {/* //navbar items */}
          <div className="">
            <div className="flex md-8 items-center">
              <div>
                <Image
                  src="/images/removebg.png"
                  alt=""
                  width={75}
                  height={50}
                />
              </div>
              <Link href="/">
                <a className="flex text-violet-500  font-36 hover:scale-110 duration-200 cursor-pointer">
                  <div className="flex">
                    <h1>
                      <span className="pr-3 dark:text-white font-serif text-violet-500">
                        BrAiNy
                      </span>
                    </h1>
                    <h1>
                      <span className="text-yellow-600 dark:text-yellow-700 font-serif">
                        DicTioNarY
                      </span>
                    </h1>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="pt-5"></div>
          {/* //navbar links */}
          <div className="flex gap-5 px-20 items-center ">
            <Link href={`/getstarted`}>
              <button
                className="shadow-md align-text-bottom px-4 py-2 m-auto hover:scale-110 duration-200 
          cursor-pointer rounded-xl space-y-7 justify-start text-white bg-purple-500 hover:bg-pink-300 hover:text-violet-500   "
              >
                Get Started
              </button>
            </Link>
            {status === "authenticated" ? (
              <div className="flex mr-3">
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className=" rounded-lg p-2 text-white bg-pink-500   hover:bg-pink-300  hover:text-violet-500   hover:scale-110 duration-200 cursor-pointer"
                >
                  Logout
                </button>
                <div className="ml-4 text-2xl  text-purple-700 hover:bg-slate-100  hover:rounded-3xl hover:p-1 hover:duration-700 hover:text-pink-700">
                  {renderThemeChanger()}
                </div>
              </div>
            ) : (
              <>
                <Link href="/register">
                  <button className=" rounded-lg p-2 text-white bg-purple-500  hover:bg-pink-300  hover:text-violet-500  hover:scale-110 duration-200 cursor-pointer">
                    Register
                  </button>
                </Link>

                <Link href={`/login`}>
                  <button className=" rounded-lg p-2 text-white bg-pink-500  hover:bg-pink-300  hover:text-violet-500  hover:scale-110 duration-200 cursor-pointer">
                    Login
                  </button>
                </Link>
                <div className="ml-4 text-2xl ml-4  text-purple-700 hover:bg-slate-100  hover:rounded-3xl hover:p-1 hover:duration-700 hover:text-pink-700">
                  {renderThemeChanger()}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
