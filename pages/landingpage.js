import React, { useState } from "react";
import Search from "../components/Search";
import MeaningList from "../components/MeaningList";
import Image from "next/image";

const Landingpage = () => {
  const [word, setWord] = useState([])

  console.log(word)


  return (
    <div >
      <Search setWord={setWord} />
      <div
        className=" grid lg:grid-cols-3"
      >
        <div className=" col-span-2">
          <MeaningList word={word} />
        </div>
        <div className=" mt-32 ">
          <Image src="/images/bookBg1n.png" alt="" width={300} height={200} />
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
