import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";


const Navbar = () => {
  const { status } = useSession();
  console.log(status);

  return (
    <div className="flex flex-col h-full">
      <nav className="flex items-center justify-between h-20 shadow-2xl ">
        {/* //navbar items */}
        <div className="flex px-10">
          <div className="flex md-8 items-center">
            <div>
              <Image src="/images/removebg.png" alt="" width={75} height={50} />
            </div>
            <Link href="/">
              <a className="flex text-violet-500 font-36 hover:scale-110 duration-200 cursor-pointer">
                <div>BrAiNyDicTioNarY </div>
              </a>
            </Link>
          </div>
        </div>
        {/* //navbar links */}
        <div className="flex gap-5 px-20 items-center ">
          

          {status === "authenticated" ? (
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className=" rounded-lg p-2 text-white bg-pink-400 hover:scale-110 duration-200 cursor-pointer"
              >
                Logout
              </button>
          ) : (
            <>

            <Link 
              href={`/login`} >
             <button className=" rounded-lg p-2 text-white bg-pink-400 hover:scale-110 duration-200 cursor-pointer">
              Login
              </button>
            </Link>
            <Link href="/register">
            <button className=" rounded-lg p-2 text-white bg-violet-400 hover:scale-110 duration-200 cursor-pointer">
              Register
            </button>
          </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
