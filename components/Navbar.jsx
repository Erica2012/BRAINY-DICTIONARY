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
    <nav className="sticky">
      <div className="py-0 top-0 z-50 bg-white max-h-screen ">
        <div className=" bg-gradient-to-r dark:from-gray-400 dark:via-purple-100 dark:to-gray-400 dark:bg-gradient-to-r from-slate-200 via-regal-blue to-gray-100 shadow items-center  ">
          {/* //navbar items */}
          <div className="flex items-center justify-between  md:mx-32">
            <div className=" inline-flex">
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
                    <div className="flex font-bold">
                      <h1>
                        <span className="pr-3  font-serif dark:text-pink-700 text-white">
                          BrAiNy
                        </span>
                      </h1>
                      <h1>
                        <span className="text-yellow-400 dark:text-white  font-serif">
                          DicTioNarY
                        </span>
                      </h1>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            {/* //navbar links */}
            <div className="flex gap-5 px-20 items-center ">
              <div className="pt-5 flex flex-row">
                <ul className="md:space-x-4 space-x-2 inline-flex -mt-3">
                  <Link href={`/`}>
                    <a className="font-semibold text-white dark:text-gray-800 hover:text-pink-400 dark:hover:text-pink-400">
                      HOME
                    </a>
                  </Link>
                  <Link href={`/favorite`}>
                    <a className="font-semibold text-white dark:text-gray-800 hover:text-pink-400 dark:hover:text-pink-400">
                      FAVORITE
                    </a>
                  </Link>
                  <Link href={`/tutorials`}>
                    <a className="font-semibold text-white dark:text-gray-800 hover:text-pink-400 dark:hover:text-pink-400">
                      TUTORIAL
                    </a>
                  </Link>
                  <Link href={`/articles`}>
                    <a className="font-semibold text-white dark:text-gray-800 hover:text-pink-400 dark:hover:text-pink-400">
                      ARTICLES
                    </a>
                  </Link>
                  <Link href={`/about`}>
                    <a className="font-semibold text-white dark:text-gray-800 hover:text-pink-400 dark:hover:text-pink-400">
                      ABOUT
                    </a>
                  </Link>
                </ul>
              </div>

              <div>
                <Link href={`/started`}>
                  <button
                    className="shadow-md align-text-bottom px-4 py-2 m-auto hover:scale-110 duration-200 
          cursor-pointer rounded-xl space-y-7 justify-start text-white bg-purple-500 hover:bg-pink-300 hover:text-violet-500   "
                  >
                    Get Started
                  </button>
                </Link>
              </div>

              <div>
                {status === "authenticated" ? (
                  <div className="flex mr-3">
                    <button
                      onClick={() => signOut({ callbackUrl: "/" })}
                      className=" rounded-lg p-2 text-white bg-pink-500   hover:bg-pink-300  hover:text-violet-500   hover:scale-110 duration-200 cursor-pointer"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="space-x-3">
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
                  </div>
                )}
              </div>
              <div className="text-3xl   text-purple-700 hover:bg-slate-100  hover:rounded-3xl hover:p-1 hover:duration-700 hover:text-pink-700">
                {renderThemeChanger()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
