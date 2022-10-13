import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
import woman7a from "../public/images/woman7a.png";
import { BsHeartFill } from "react-icons/bs";
import Meaning from "../components/Meaning";
import Navbar from "../components/Navbar";

const Favorite = ({ sidebarOpen, setSidebarOpen }) => {
  const { status } = useSession();
  const router = useRouter();
  const [list, setList] = useState([]);

  useEffect(() => {
    if (status !== "authenticated") {
      router.push("/login");
    }
  }, [status]);

  useEffect(() => {
    if (localStorage.getItem("favourite")) {
      let existingWords = localStorage.getItem("favourite");
      existingWords = JSON.parse(existingWords);
      setList(existingWords);
      console.log("existingWords", existingWords);
    }
  }, []);

  return (
    <div className={`${sidebarOpen ? "ml-48" : "ml-20"} duration-300`}>
      <div>
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>
      <div>
        <Navbar />

        <div className=" relative grid grid-cols-2 px-12  bg-purple-400 bg-no-repeat origin-right w-full h-screen bg-opacity-25 min-w-screen">
          <div className="max-w-2xl mx-auto mt-16 ">
            <div className=" w-96 max-w-md bg-white rounded-lg sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                  Favorite List
                </h3>
                <div></div>
              </div>
              <div className="flow-root">
                {list?.map((item, idx) => (
                  // <div key={idx}>
                  //   <Meaning key={idx} meaning={{ item, key: idx }} />
                  // </div>

                  <div
                    key={idx}
                    className="py-3 sm:py-4 border-b border-slate-100 "
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          className="w-8 h-8 rounded-full"
                          // src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                          src="/images/newbg35.jpg"
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white capitalize">
                          {item[0].word}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          word added
                        </p>
                      </div>
                      <div className="indivne-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        <BsHeartFill className="text-red-500 text-2xl cursor-pointer" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className=" mt-52 px-2  ml-20 ">
            <Image
              className="relative w-32 h-24"
              src="/images/woman7a.png "
              alt=""
              width={400}
              height={300}
            />
          </div>
        </div>
      </div>
      //{" "}
    </div>
  );
};


export default Favorite;
