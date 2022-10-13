import React from "react";
import woman12a from "../public/images/woman12a.png";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout"

const getStarted = () => {
  return (
    <Layout>
    <div className="grid grid-cols-2 gap-4 p-4 ">
      <div>
        <figure className="md:flex bg-slate-100 rounded-xl p-10 md:p-0  mt-6 dark:bg-slate-800 hover:scale-110 duration-200 ">
          <Image
            className=" object-contain md:w-48 md:h-auto md:rounded-none rounded-r-xl mx-auto"
            src="/images/woman9rm.png"
            alt=""
            width="300"
            height="100"
          />
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-medium">Learn how to use this app</p>
            </blockquote>
            <Link href={`/tutorials`}>
              <button className="bg-pink-600 rounded-lg p-2 text-white">
                Tutorials
              </button>
            </Link>

            {/* <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
              <div className="text-slate-700 dark:text-slate-500">
                Staff Engineer, Algolia
              </div>
            </figcaption> */}
          </div>
        </figure>
      </div>
      <div>
        <figure className="md:flex bg-slate-100  rounded-xl hover:scale-110 duration-200 mt-6 p-8 md:p-0  dark:bg-slate-800">
          <Image
            className="object-contain md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
            src="/images/woman8rm.png"
            alt=""
            width="300"
            height="100"
          />
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-medium">
                Login to add to favorite list
              </p>
            </blockquote>
            <Link href={`/tutorials`}>
              <button className="bg-pink-600 rounded-lg p-2 text-white">
                favorite
              </button>
            </Link>
            {/* <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
              <div className="text-slate-700 dark:text-slate-500">
                Staff Engineer, Algolia
              </div>
            </figcaption> */}
          </div>
        </figure>
      </div>
      <div>
        <figure className="md:flex  bg-slate-100 rounded-xl p-10 md:p-0 mt-4 hover:scale-110 duration-200 dark:bg-slate-800  ">
          <Image
            className="object-contain md:w-48 md:h-auto md:rounded-none rounded-r-xl  mx-auto"
            src="/images/woman8rm.png"
            alt=""
            width="300"
            height="100"
          />
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-medium">Add to favorite list</p>
            </blockquote>
            <Link href={`/tutorials`}>
              <button className="bg-pink-600 rounded-lg p-2 text-white">
                Favorite
              </button>
            </Link>

            {/* <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
              <div className="text-slate-700 dark:text-slate-500">
                Staff Engineer, Algolia
              </div>
            </figcaption> */}
          </div>
        </figure>
      </div>
      <div>
        <figure className="md:flex bg-slate-100 hover:scale-110 duration-200 rounded-xl  mt-6 p-8 md:p-0 dark:bg-slate-800">
          <Image
            className="object-contain md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
            src="/images/woman9rm.png"
            alt=""
            width="300"
            height="200"
          />
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-medium">Learn how to use this app</p>
            </blockquote>
            <Link href={`/tutorials`}>
              <button className="bg-pink-600 rounded-lg p-2 text-white">
                favorite
              </button>
            </Link>
            {/* <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
              <div className="text-slate-700 dark:text-slate-500">
                Staff Engineer, Algolia
              </div>
            </figcaption> */}
          </div>
        </figure>
      </div>
    </div>
    </Layout>
  );
};

export default getStarted;
