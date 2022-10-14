import React from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout"
import Flip from 'react-reveal/Flip';


const getStarted = () => {
  return (
    <Layout title={'Get-Started'}>
      <Flip clear>
        <div className="grid grid-cols-2 gap-4 p-6 m-12 ">
          <div>
            <figure className="md:flex bg-slate-100 rounded-xl p-10 md:p-0  mt-6 dark:bg-slate-800 hover:scale-95 duration-200 ">
              <Image
                className=" object-contain md:w-48 md:h-auto md:rounded-none rounded-r-xl mx-auto"
                src="/images/woman9rm.png"
                alt=""
                width="300"
                height="100"
              />
              <div className="pt-6 pr-5 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                  <p className="text-lg font-medium">Learn how to use this app</p>
                </blockquote>
                <Link href={`/tutorials`}>
                  <button className="bg-pink-600 rounded-lg p-2 text-white">
                    Tutorials
                  </button>
                </Link>
              </div>
            </figure>
          </div>
          <div>
            <figure className="md:flex bg-slate-100  rounded-xl hover:scale-95 duration-200 mt-6 p-8 md:p-0  dark:bg-slate-800">
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
                <Link href={`/favorite`}>
                  <button className="bg-pink-600 rounded-lg p-2 text-white">
                    favorite
                  </button>
                </Link>
              </div>
            </figure>
          </div>
          <div>
            <figure className="md:flex  bg-slate-100 rounded-xl p-10 md:p-0 mt-4 hover:scale-95 duration-200 dark:bg-slate-800  ">
              <Image
                className="object-contain md:w-48 md:h-auto md:rounded-none rounded-r-xl  mx-auto"
                src="/images/woman13rm.png"
                alt=""
                width="300"
                height="100"
              />
              <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                  <p className="text-lg font-medium">Add a comment post to assist us on how to improve the app</p>
                </blockquote>
                <Link href={`/comment`}>
                  <button className="bg-pink-600 rounded-lg p-2 text-white">
                    Comment
                  </button>
                </Link>
              </div>
            </figure>
          </div>
          <div>
            <figure className="md:flex bg-slate-100 hover:scale-95 duration-200 rounded-xl  mt-6 p-8 md:p-0 dark:bg-slate-800">
              <Image
                className="object-contain md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                src="/images/woman16a.png"
                alt=""
                width="300"
                height="100"
              />
              <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                  <p className="text-lg font-medium">Get extra knowledge on words by clicking on this button👇</p>
                </blockquote>
                <Link href={`/articles`}>
                  <button className="bg-pink-600 rounded-lg p-2 text-white">
                    Articles
                  </button>
                </Link>
              </div>
            </figure>
          </div>
        </div>
      </Flip>

    </Layout>
  );
};

export default getStarted;
