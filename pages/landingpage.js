import React, { useState } from "react";
import Navbar from "../components/navbar";
import Search from "../components/Search";
import bookBg from "../public/images/bookBg.png";
// import newbg1 from "../public/images/newbg1.jpg";
import MeaningList from "../components/MeaningList";
import Image from "next/image";

const Landingpage = ({ sidebarOpen, setSidebarOpen }) => {
  const [word, setWord] = useState([])

  console.log(word)


  return (
    <div className={`${sidebarOpen ? "ml-48" : "ml-20"} duration-300`}>
      <div>
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>
      <Search setWord={setWord} />
      <div
        // className="relative bg-contain bg-no-repeat origin-right w-full h-screen bg-opacity-25 bg-fixed"
        // style={{
        // backgroundImage: `url(${bookBg.src})`,
        // backgroundImage: `url(${newbg1.src})`,
        // }}
        className=" grid lg:grid-cols-3"
      >
        <div className=" col-span-2">
          <MeaningList word={word} />
        </div>

        <div className=" mt-32 ">
          <Image src="/images/bookBg1n.png" width={300} height={200} />
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
