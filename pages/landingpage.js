import React, { useState } from "react";
import Navbar from "../components/navbar";
import Search from "../components/Search";
import bookBg from "../public/images/bookBg.png";
// import newbg1 from "../public/images/newbg1.jpg";
import MeaningList from "../components/MeaningList";

const Landingpage = ({ sidebarOpen, setSidebarOpen }) => {
  const [word, setWord] = useState([])

  console.log(word)


  return (
    <div className={`${sidebarOpen ? "ml-48" : "ml-20"} duration-300`}>
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Search setWord={setWord} />

      <div
        className="relative bg-contain bg-no-repeat origin-right w-full h-screen bg-opacity-25 bg-fixed"
        style={{
          backgroundImage: `url(${bookBg.src})`,
          // backgroundImage: `url(${newbg1.src})`,
        }}
      >

        <MeaningList word={word}  />
        {/* <Image src="/images/bookBg1.png" width={300} height={200} /> */}
        {/* <div className=" text-gray-500 rounded mt-10 px-5 m-auto mx-48">
          <input
            type="text"
            placeholder="search here..."
            id="search"
            className=" w-full h-10 rounded-2xl items-center outline-none border px-3  "
          />
        </div> */}
        {/* <div className="pt-5">
          <button className="shadow-md align-text-bottom px-4 py-2 m-auto hover:scale-110 duration-200 cursor-pointer rounded-xl space-y-7 justify-start text-white bg-purple-500 hover:bg-pink-300 hover:text-violet-500   ">
            Get Started
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Landingpage;
